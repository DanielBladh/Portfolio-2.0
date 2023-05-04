import loungepic from "../assets/loungepic.jpg";
// import { Box, Typography } from "@mui/material";
import { Typography, Box, Container } from "@mui/material";

function About() {
  return (
    <Container maxWidth="100vh">
      <Box
        className="about-content"
        display="flex"
        justifyContent="center"
        // minHeight="100vh"
        flexDirection="column"
      >
        <Box
          className="about-main"
          display="flex"
          flexDirection="row"
          justifyContent="center"
          gap="1rem"
        >
            <Box
              component="img"
              alt="image-of-me"
              src={loungepic}
              sx={{ width: 410, height: 350, borderRadius: "20px" }}
            />
            <Box className="about-text">
              <Typography variant="h5" color="#147efb" fontWeight="bold" marginBottom="1rem">
                About me
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="#2d2e32" marginBottom="1rem">
                A dedicated Front-end Developer <br /> based in Sthlm, Sweden
              </Typography>
              <Typography maxWidth="40rem">
                As a Junior Front-End Developer, I possess an impressive arsenal
                of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
                excel in designing and maintaining responsive websites that
                offer a smooth user experience. My expertise lies in crafting
                dynamic, engaging interfaces through writing clean and optimized
                code and utilizing cutting-edge development tools and
                techniques.
              </Typography>
            </Box>
          </Box>
      </Box>
    </Container>
  );
}

export default About;
