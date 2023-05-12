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
import WaveAnimation from "../components/Animations/WaveAnimation/WaveComponent";

const Home = () => {
  return (
    <Container className="home-container" maxWidth="100%" sx={{ backgroundColor: "rgb(252,252,252)" }}>
      <Box
        className="home-content"
        display="flex"
        justifyContent="center"
        minHeight="100vh"
        minWidth="100%"
        flexDirection="column"
      >
        <Box
          className="home-main"
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={{ xs: "center", md: "flex-start" }}
          justifyContent={{ xs: "center" }}
          gap="1rem"
          padding={{ xs: "2rem", md: "4rem" }}        >
          <Box
            className="home-text-left"
            display="flex"
            flexDirection="column"
            alignItems={{ xs: "center", md: "flex-start" }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <WaveAnimation />
            <Typography
              sx={{ fontFamily: "Poppins, sans-serif", maxWidth: "46.650rem" }}
            >
              Hi, I'm Daniel Bladh. A passionate Front-end Developer based in
              Stockholm, Sweden<span className="pin"> 📍</span> <br /> <br />
              Well-organised person, problem solver, independent employee with
              high attention to detail. <br />
              Fan of sports, outdoor activities, TV series and gaming.
            </Typography>
            <Box className="social-links" sx={{ marginTop: "1rem" }}>
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
              <Box
                className="tech-stack"
                display="flex"
                alignItems="center"
                gap="1.5rem"
                mt={{ xs: "2rem", md: "8rem" }}
                marginLeft={{ md: "2rem" }}
              >
                <Typography sx={{ fontWeight: "bold" }}>
                  TECH STACK |
                </Typography>
                <img src={html5} alt="html5-icon" title="HTML5" />
                <img src={css3} alt="css3-icon" title="CSS3" />
                <img
                  src={javascript}
                  alt="javascript-icon"
                  title="JavaScript"
                />
                <img src={react} alt="react-icon" title="React" />
                <img src={vue} alt="vue-icon" title="Vue.js" />
                <img src={nodejs} alt="nodejs-icon" title="Node.js" />
              </Box>
            </Box>
          </Box>
          <Box className="home-profile-img" display="flex" marginTop={{xs: "2rem"}}>
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
