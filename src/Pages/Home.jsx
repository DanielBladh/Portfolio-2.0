import { Avatar, Typography, Box, IconButton, Container } from "@mui/material";
import ProfilePic from "../assets/Profilepic2.png";
import html5 from "../assets/html5.svg";
import vue from "../assets/vue.svg";
import react from "../assets/react.svg";
import css3 from "../assets/css3.svg";
import nodejs from "../assets/nodejs.svg";
import javascript from "../assets/javascript.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ backgroundColor: "rgb(252,252,252)" }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        flexDirection="column"
      >
        <Box
          className="hero-main"
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="flex-start"
          flex="1"
          maxHeight={400}
        >
          <Box
            className="hero-text"
            display="flex"
            flexDirection="column"
            flex="1"
          >
            <Typography variant="h2" sx={{ fontFamily: "Poppins, sans-serif" }}>
              Front-End Developer<span className="wave">👋🏻</span>
            </Typography>
            <Typography sx={{ fontFamily: "Poppins, sans-serif" }}>
              Hi, I'm Daniel Bladh. A passionate Front-end Developer based in
              Stockholm, Sweden<span className="pin">📍</span> <br /> <br />
              Well-organised person, problem solver, independent employee with
              high attention to detail. <br />
              Fan of sports, outdoor activities, TV series and gaming.
            </Typography>
            <Box className="social-links">
              <IconButton
                href="https://www.linkedin.com/in/daniel-bladh-stenberg/"
                sx={{ color: "black" }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href="https://github.com/DanielBladh"
                sx={{ color: "black" }}
              >
                <GitHubIcon />
              </IconButton>
            </Box>
            <Box
              className="tech-stack"
              display="flex"
              alignItems="center"
              gap="1.5rem"
              mt={8}
            >
              <Typography sx={{ fontWeight: "bold" }}>TECH STACK |</Typography>
              <img src={html5} alt="html5-icon" title="HTML5" />
              <img src={css3} alt="css3-icon" title="CSS3" />
              <img src={javascript} alt="javascript-icon" title="JavaScript" />
              <img src={react} alt="react-icon" title="React" />
              <img src={vue} alt="vue-icon" title="Vue.js" />
              <img src={nodejs} alt="nodejs-icon" title="Node.js" />
            </Box>
          </Box>
          <Box className="hero-img" display="flex" alignItems="center" ml={1}>
            <Avatar
              className="profilepicture"
              alt="image-of-me"
              src={ProfilePic}
              sx={{ width: 350, height: 350 }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
