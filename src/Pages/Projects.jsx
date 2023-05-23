import { Container, Typography, IconButton, Box } from "@mui/material";
import { useState, useEffect } from "react";
import react from "../assets/react.svg";
import css3 from "../assets/css3.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import bajenDevice from "../assets/bajenDevice.png";
import GeochTaDevice from "../assets/GeochTaDevice.png";
import bollDevice from "../assets/BollDevice.png";

const Projects = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [avatar, setAvatar] = useState("");
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const requestUser = async () => {
      await requestUserAsync();
    };
    const requestUserRepo = async () => {
      await requestUserRepoAsync();
    };
    requestUser();
    requestUserRepo();
  }, []);

  const requestUserAsync = async () => {
    await fetch("https://api.github.com/users/DanielBladh")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setName(data.name);
        setUsername(data.login);
        setAvatar(data.avatar_url);
        setProfileUrl(data.html_url);
      })
      .catch(setError("Could not fetch from Github API Users."));
  };

  const requestUserRepoAsync = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/DanielBladh/repos"
      );
      let data = await response.json();

      const excludedRepos = [
        "clock-js",
        "danielbladh",
        "hapi-server",
        "my-portfolio",
        "js1-gruppinl-mning",
        "danielbladh.github.io",
        "portfolio-2.0"
      ];

      data = data.filter(
        (repo) => !excludedRepos.includes(repo.name.toLowerCase())
      );

      console.log(data);
      setRepos(data);
    } catch (error) {
      console.error("Could not get data from Github API Repos.");
      setError(error);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgb(252,252,252)",
      }}
    >
      <Container maxWidth="lg" sx={{ width: "65%", padding: "2.5rem 0" }}>
        <Typography variant="h5" color="#147efb" fontWeight="bold">
          Portfolio
        </Typography>
        <Typography variant="h4">My projects are under development</Typography>
        {repos.map((repo, index) => {
          const isEven = index % 2 === 0;
          let projectImage;
          if (repo.name === "HammarbyFotboll") {
            projectImage = bajenDevice;
          } else if (repo.name === "Ge-och-Ta") {
            projectImage = GeochTaDevice;
          } else if (repo.name === "Boll-Webshop") {
            projectImage = bollDevice;
          }
          return (
            <Box
              key={index}
              className="projects-main"
              sx={{
                display: "flex",
                flexDirection: isEven ? "row" : "row-reverse",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                paddingBottom: "3rem",
                maxWidth: "1000px",
                margin: "3rem auto",
                borderRadius: "20px",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 5px",
                flexWrap: "wrap",
                [`@media (max-width: 900px)`]: {
                  flexDirection: "column",
                  textAlign: "center",
                },
              }}
            >
              <Box
                className="projects-text"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                  height: "auto",
                  flex: 1,
                  alignItems: "center", 
                }}
              >
                <Typography
                  variant="h5"
                  fontFamily="Poppins, sans-serif"
                  fontWeight="bold"
                >
                  {repo.name}
                </Typography>
                <Typography
                  maxWidth="30rem"
                  fontFamily="Poppins, sans-serif"
                  color="#767676"
                >
                  {repo.description}
                </Typography>
                <Box className="project-stack" padding="2rem">
                  <img src={react} alt="react-icon" title="React" />
                  <img src={css3} alt="css3-icon" title="CSS3" />
                </Box>
                <Box
                  className="projects-links"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                  }}
                >
                  <Typography fontWeight="bold">
                    CODE
                    <IconButton href={repo.html_url} sx={{ color: "black" }}>
                      <GitHubIcon />
                    </IconButton>
                  </Typography>
                </Box>
              </Box>

              <Box
                component="img"
                src={projectImage}
                className="projects-image"
                sx={{
                  width: "350px",
                  height: "300px",
                  borderRadius: "20px",
                  objectFit: "contain",
                }}
              />
            </Box>
          );
        })}
      </Container>
    </Box>
  );
};

export default Projects;

//   return (
//     <Container
//       className="projects-container"
//       maxWidth="100%"
//       display="flex"
//       sx={{ backgroundColor: "rgb(252,252,252)" }}
//     >
//       <Box
//         width="md"
//         display="flex"
//         flexDirection="column"
//         justifyContent="center"
//         alignItems="center"
//       >
//         <Box
//           minWidth="1000px"
//           display="flex"
//           alignItems="flex-start"
//           flexDirection="column"
//           maxWidth="1000px"
//           paddingBottom="2.5rem"
//         >
//           <Typography variant="h5" color="#147efb" fontWeight="bold">
//             Portfolio
//           </Typography>
//           <Typography variant="h4">
//             My projects are under development
//           </Typography>
//         </Box>
//         {repos.map((repo, index) => {
//           const isEven = index % 2 === 0;

//           let projectImage;
//           if (repo.name === "HammarbyFotboll") {
//             projectImage = bajenDevice;
//           } else if (repo.name === "Ge-och-Ta") {
//             projectImage = GeochTaDevice;
//           } else if (repo.name === "Boll-Webshop") {
//             projectImage = bollDevice;
//           }
//           return (
//             <div key={index}>
//               <Box
//                 className="projects-main"
//                 display="flex"
//                 flexDirection={{ xs: "column", sm: "row" }} // Added responsive flex-direction
//                 justifyContent="center"
//                 alignItems="center"
//                 gap="1rem"
//                 paddingBottom="5rem"
//                 maxWidth="1000px"
//                 margin="0 auto"
//               >
//                 <Box
//                   className="projects-text"
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "center",
//                     textAlign: "center",
//                     height: "auto",
//                     width: { xs: "100%", sm: "30rem" }, // Added responsive width
//                     order: isEven ? 0 : 1,
//                   }}
//                 >
//                   <Typography
//                     variant="h5"
//                     fontFamily="Poppins, sans-serif"
//                     fontWeight="bold"
//                   >
//                     {repo.name}
//                   </Typography>
//                   <Typography
//                     maxWidth="30rem"
//                     fontFamily="Poppins, sans-serif"
//                     color="#767676"
//                   >
//                     {repo.description}
//                   </Typography>
//                   <Box className="project-stack" padding="2rem">
//                     <img src={react} alt="react-icon" title="React" />
//                     <img src={css3} alt="css3-icon" title="CSS3" />
//                   </Box>
//                   <Box
//                     className="projects-links"
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       gap: "1rem",
//                     }}
//                   >
//                     <Typography fontWeight="bold">
//                       CODE
//                       <IconButton href={repo.html_url} sx={{ color: "black" }}>
//                         <GitHubIcon />
//                       </IconButton>
//                     </Typography>
//                   </Box>
//                 </Box>
//                 <Box
//                   component="img"
//                   src={projectImage}
//                   display="flex"
//                   sx={{
//                     width: { xs: "100%", sm: 410 }, // Added responsive width
//                     height: { xs: "auto", sm: 300 }, // Added responsive height
//                     borderRadius: "20px",
//                     objectFit: "fill",
//                     order: isEven ? 1 : 0,
//                   }}
//                 />
//               </Box>
//             </div>
//           );
//         })}
//       </Box>
//     </Container>
//   );
// };
