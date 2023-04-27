import { Container, Box, Typography, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
    return ( 
        <Container sx={{ backgroundColor: "#2d2e32", padding: "5rem 0", width:"100%"}}>
            <Box sx={{ margin: "0 auto", padding: "0 4rem"}}>
                <Box className="footer-info" sx={{ display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <Typography variant="h5" color="white">Copyright © 2023. All rights are reserved</Typography>
                    <Box className="footer-socials" sx={{ display: "flex", gap: "2rem"}}>
                    <Link href="https://www.linkedin.com/in/daniel-bladh-stenberg/"><LinkedInIcon /></Link>
                    <Link href="https://github.com/DanielBladh"><GitHubIcon /></Link>
                    </Box>
                </Box>
            </Box>
        </Container>
     );
}
 
export default Footer;