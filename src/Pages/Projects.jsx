import { Container, Typography, IconButton, Box } from "@mui/material";
import { useState, useEffect } from "react";
import react from "../assets/react.svg";
import css3 from "../assets/css3.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import projectOne from "../assets/Hammarbyfotboll.png";
import MediaCard from "../components/Core/MediaCard";

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
  // const requestUserRepoAsync = async () => {
  //   await fetch("https://api.github.com/users/DanielBladh/repos")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       data.filter((x) => {
  //         x.name != ""
  //       })
  //       console.log(data);
  //       setRepos(data);
  //     })
  //     .catch(setError("Could not data from Github API Repos."));
  // };

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
      ]; // Add the names of the repos you want to exclude

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

  const projects = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: { projectOne },
      link: "#",
    },
    {
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/200",
      link: "#",
    },
  ];

  return (
    <Container
      className="projects-container"
      maxWidth="100%"
      sx={{ backgroundColor: "rgb(252,252,252)" }}
    >
      <Typography variant="h5">Portfolio</Typography>
      <Typography variant="h4">My projects are under development</Typography>
      {repos.map((repo, index) => {
        return (
          <div key={index}>
            <Box
              className="projects-main"
              display="flex"
              flexDirection="row"
              justifyContent="center"
              gap="1rem"
              padding="4rem 0"
              boxShadow="0 0 10px rgba(0,0,0,.1)"
            >
              <Box
                className="projects-text"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                  height: "auto",
                  width: "30rem",
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
                  {/* <Typography fontWeight="bold">
                DEMO
                <IconButton
                  href="https://www.linkedin.com/in/daniel-bladh-stenberg/"
                  sx={{ color: "black" }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Typography> */}
                </Box>
              </Box>
              <Box
                component="img"
                src={projectOne}
                display="flex"
                sx={{
                  width: 410,
                  height: 350,
                  borderRadius: "20px",
                  objectFit: "fill",
                }}
              ></Box>
            </Box>
          </div>
        );
      })}
    </Container>
  );
};

export default Projects;
