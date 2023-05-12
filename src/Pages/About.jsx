import React from "react";
import loungepic from "../assets/loungepic.jpg";
import { Typography, Box, Container } from "@mui/material";

function About() {
  return (
    <Container className="about-container" maxWidth="100%">
      <Box
        className="about-content"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Box
          className="about-main"
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="center"
          alignItems={{ xs: "center", md: "flex-start" }}
          gap="1rem"
        >
          <Box
            className="about-main-img"
            component="img"
            alt="image-of-lounge"
            src={loungepic}
            sx={{
              width: { xs: "80%", md: "410px" },
              height: { xs: "auto", md: "350px" },
              borderRadius: "20px",
            }}
          />
          <Box className="about-main-text">
            <Typography
              variant="h5"
              color="#147efb"
              fontWeight="bold"
              marginBottom="0.5rem"
              textAlign={{ xs: "center", md: "left" }}
            >
              About me
            </Typography>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="#2d2e32"
              marginBottom="1rem"
              fontFamily="Poppins, sans-serif"
              textAlign={{ xs: "center", md: "left" }}
            >
              A dedicated Front-end Developer <br /> based in Sthlm, Sweden
            </Typography>
            <Typography
              maxWidth="40rem"
              fontFamily="Poppins, sans-serif"
              color="#767676"
              textAlign={{ xs: "center", md: "left" }}
            >
              In my everyday life, I am someone who enjoys sports, exercise,
              spending time on the computer, and socializing with friends and
              family. A significant portion of my time is either spent at the
              gym or in front of the computer. I actively engage in social
              situations and value getting to know new people. Since a young
              age, I have had a strong interest in gaming and technology. I
              would say that my main strength lies in having an open mind and
              always striving to understand perspectives other than my own. I
              feel that many of my interests intersect with this career choice,
              such as creative thinking and problem-solving techniques.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default About;
