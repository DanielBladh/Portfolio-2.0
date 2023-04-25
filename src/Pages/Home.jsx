import { Avatar, Typography, Box, IconButton } from "@mui/material";
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
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      flexDirection="column"
    >
      <Box
        className="box-2"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="flex-start"
        flex="1"
        maxHeight={300}
      >
        <Box display="flex" flexDirection="column" flex="1">
          <Typography variant="h3" sx={{ fontFamily: "monospace" }}>
            Front-End Developer<span className="wave">👋🏻</span>
          </Typography>
          <Typography sx={{ fontFamily: "monospace" }}>
            Hi, I'm Daniel Bladh. A passionate Front-end Developer based in
            Stockholm, Sweden<span className="pin">📍</span> <br />
            Well-organised person, problem solver, independent employee with
            high attention to detail. <br />
            Fan of sports, outdoor activities, TV series and gaming. <br />
          </Typography>
          <Box>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            <IconButton>
              <GitHubIcon />
            </IconButton>
            </Box>
            <Box
              className="techStack"
              display="flex"
              alignItems="center"
              mt={8}
            >
              <Typography sx={{ fontWeight: "bold" }}>TECH STACK |</Typography>
              <img src={html5} alt="html5-icon" />
              <img src={css3} alt="css3-icon" />
              <img src={javascript} alt="javascript-icon" />
              <img src={react} alt="react-icon" />
              <img src={vue} alt="vue-icon" />
              <img src={nodejs} alt="nodejs-icon" />
            </Box>
        </Box>
        <Box display="flex" alignItems="center" ml={4}>
          <Avatar
            alt="image-of-me"
            src={ProfilePic}
            sx={{ width: 300, height: 300 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
