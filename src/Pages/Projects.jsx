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
  const requestUserRepoAsync = async () => {
    await fetch("https://api.github.com/users/DanielBladh/repos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRepos(data);
      })
      .catch(setError("Could not data from Github API Repos."));
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
    <Container className="projects-container" maxWidth="100%" sx={{ backgroundColor: "rgb(252,252,252)" }}>
      <Box
        className="projects-main"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap="1rem"
      >
        <Typography variant="h5">Portfolio</Typography>
        <Typography variant="h4">My projects are under development</Typography>
        <Box sx={{ display: "flex", flexDirection: "row", gap: "2rem"}}>
        <MediaCard sx={{ height: 140 }} image={projectOne} title="Image" />
        <MediaCard sx={{ height: 140 }} image={projectOne} title="Image" />
        <MediaCard sx={{ height: 140 }} image={projectOne} title="Image" />
        </Box>
        <Box
          className="projects-main"
          display="flex"
          flexDirection="row"
          justifyContent="center"
          gap="1rem"
        >
          <Box
            className="projects-text"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
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
              Hammarby Fotboll
            </Typography>
            <Typography
              maxWidth="30rem"
              fontFamily="Poppins, sans-serif"
              color="#767676"
            >
              A car rental website is an online platform that allows users to
              rent cars for personal or business use. The website provides an
              interface for searching, comparing, and reserving cars.
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
                <IconButton
                  href="https://github.com/DanielBladh"
                  sx={{ color: "black" }}
                >
                  <GitHubIcon />
                </IconButton>
              </Typography>
              <Typography fontWeight="bold">
                DEMO
                <IconButton
                  href="https://www.linkedin.com/in/daniel-bladh-stenberg/"
                  sx={{ color: "black" }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Typography>
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
      </Box>
    </Container>
  );
};

export default Projects;

{
  /* <Grid
  container
  spacing={10}
  sx={{
    display: "grid",
    gridGap: "3rem",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto auto",
    height: "auto",
    width: "100%",
  }}
>
  {projects.map((project, index) => (
    <Grid
      item
      key={index}
      sx={{
        display: "flex",
        flexDirection: index % 2 === 0 ? "row" : "row-reverse",
        height: "auto",
        padding: "2rem",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f5f5f5",
          borderRadius: "1rem",
          overflow: "hidden",
          width: "50%",
          height: "auto",
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "50%",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h6">{project.title}</Typography>
        <Typography variant="body1">{project.description}</Typography>
        <Box sx={{ marginTop: "1rem" }}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View project
          </a>
        </Box>
      </Box>
    </Grid>
  ))}
</Grid> */
}
