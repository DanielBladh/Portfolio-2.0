import { Avatar, Typography, Box } from "@mui/material";
import ProfilePic from "../assets/Profilepic.jpg";

const Home = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      flexDirection="column"
      backgroundColor='lightblue'
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="flex-start"
        flex="1"
        marginTop='200px'
      >
        <Box display="flex" flexDirection="column" flex="1" sx={{ backgroundColor: 'blue'}}>
          <Typography variant="h3" sx={{ fontFamily: 'monospace', }}>
            Front-End Developer<span className="wave">👋🏻</span>
          </Typography>
          <Typography sx={{ fontFamily: 'monospace', }}>
            Hi, I'm Daniel Bladh. A passionate Front-end Developer based in
            Stockholm, Sweden<span className="pin">📍</span> <br />
            Well-organised person, problem solver, independent employee with
            high attention to detail. <br />
            Fan of sports, outdoor activities, TV series and gaming. <br />
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" ml={4} backgroundColor='blue'>
          <Avatar
            alt="Remy Sharp"
            src={ProfilePic}
            sx={{ width: 250, height: 250, }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
