import { Box, Container, Typography, Link } from "@mui/material";
import { FaMapMarkedAlt, FaEnvelopeSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <Container className="contact-content" maxWidth="lg">
      <Box className="contact-title">
        <Typography variant="h5">Contact me</Typography>
        <Typography variant="h4">Don't be shy! Hit me up! 👇</Typography>
      </Box>
      <Box className="contact-icons" sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "8rem", marginTop: "5rem"}}>
        <Box className="contact-icon-box" sx={{ display: "flex", alignItems: "center", gap: "1.5rem"}}>
          <span>
            <Link href="https://www.instagram.com/"><FaMapMarkedAlt /></Link>
          </span>
          <Box className="contact-info" sx={{ display: "flex", flexDirection: "column", gap: "0.5rem"}}>
            <Typography variant="h5">Location</Typography>
            <Typography>Stockholm, Sweden</Typography>
          </Box>
        </Box>
        <Box className="contact-icon-box" sx={{ display: "flex", alignItems: "center", gap: "1.5rem"}}>
          <span>
            <Link href="mailto: danielbladh92@gmail.com"><FaEnvelopeSquare className="wiggle"/></Link>
          </span>
          <Box className="contact-info" sx={{ display: "flex", flexDirection: "column", gap: "0.5rem"}}>
            <Typography variant="h5">Mail</Typography>
            <Typography>danielbladh92@gmail.com</Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
