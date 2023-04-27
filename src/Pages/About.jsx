import loungepic from "../assets/loungepic.jpg";
// import { Box, Typography } from "@mui/material";
import { Typography, Box, Container } from "@mui/material";

function About() {
  return (
      <Container maxWidth="lg">
        <Box
          className="hero-main"
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="flex-start"
          flex="1"
          maxHeight={400}
        >
          <Box className="hero-img" display="flex" alignItems="center" mr={1}>
            <Box
              component="img"
              alt="image-of-me"
              src={loungepic}
              sx={{ width: 410, height: 350, borderRadius: "20px" }}
            />
          </Box>
          <Box
            className="hero-text"
            display="flex"
            flexDirection="column"
            flex="1"
          >
            <Typography variant="h5">About me</Typography>
            <Typography variant="h4">
              A dedicated Front-end Developer <br /> based in Sthlm, Sweden
            </Typography>
            <Typography>
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques.
            </Typography>
          </Box>
        </Box>
      </Container>
  );
}

export default About;
