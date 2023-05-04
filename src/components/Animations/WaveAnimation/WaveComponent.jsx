import { Typography} from "@mui/material";
import './WaveStyles.css';

const WaveAnimation = () => {
    return (
        <>
        <Typography variant="h2" sx={{ fontFamily: "Poppins, sans-serif" }}>
              Front-End Developer<span className="wave">👋🏻</span>
        </Typography>
        </>
    )
}

export default WaveAnimation;