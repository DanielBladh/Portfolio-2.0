import { useState } from "react";
import { Box, Container, Typography, Link, Button, Modal } from "@mui/material";
import { FaMapMarkedAlt, FaEnvelopeSquare } from "react-icons/fa";

const Contact = () => {
  const [showPDF, setShowPDF] = useState(false);

  const handleTogglePDF = () => {
    setShowPDF((prevState) => !prevState);
  };

  const handleClosePDF = () => {
    setShowPDF(false);
  };

  return (
    <Container className="contact-container" maxWidth="lg">
      <Box className="contact-title">
        <Typography variant="h5" color="#147efb" fontWeight="bold">
          Contact
        </Typography>
        <Typography variant="h4" fontFamily="Poppins, sans-serif">
          Don't hesitate to hit me up! 👇
        </Typography>
      </Box>
      <Box
        className="contact-icons"
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "8rem",
          marginTop: "5rem",
          "@media (max-width: 768px)": {
            gap: "4rem",
            marginTop: "3rem",
          },
          "@media (max-width: 480px)": {
            flexDirection: "column",
            gap: "3rem",
          },
        }}
      >
        <Box
          className="contact-icon-box"
          sx={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
        >
          <span>
            <Link>
              <FaMapMarkedAlt />
            </Link>
          </span>
          <Box
            className="contact-info"
            sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <Typography variant="h5" fontFamily="Poppins, sans-serif">
              Location
            </Typography>
            <Typography color="#767676">Stockholm, Sweden</Typography>
          </Box>
        </Box>
        <Box
          className="contact-icon-box"
          sx={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
        >
          <span>
            <Link href="mailto: danielbladh92@gmail.com">
              <FaEnvelopeSquare className="wiggle" />
            </Link>
          </span>
          <Box
            className="contact-info"
            sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <Typography variant="h5" fontFamily="Poppins, sans-serif">
              Mail
            </Typography>
            <Typography>
              <Link
                sx={{ textDecoration: "none", color: "#767676" }}
                href="mailto: danielbladh92@gmail.com"
              >
                danielbladh92@gmail.com
              </Link>
            </Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{ borderRadius: "10%", backgroundColor: "#147efb" }}
          onClick={handleTogglePDF}
        >
          Show Resume
        </Button>
        <Modal
          open={showPDF}
          onClose={handleClosePDF}
          aria-labelledby="resume-modal-title"
          aria-describedby="resume-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "#fff",
              borderRadius: "10px",
              outline: "none",
              width: "90%",
              height: "90%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
            }}
          >
            <embed
              src="resume.pdf"
              width="100%"
              height="100%"
              type="application/pdf"
            />
            <Button
              variant="contained"
              sx={{ borderRadius: "10%", marginTop: "1rem" }}
              onClick={handleClosePDF}
            >
              Close Resume
            </Button>
          </Box>
        </Modal>
      </Box>
    </Container>
  );
};

export default Contact;
