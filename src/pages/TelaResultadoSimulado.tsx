
import GraficoPizza from "../components/GraficoPizza";
import NavBar from "../components/NavBar";
import { Box, Typography } from "@mui/material";
const logo = require('../img/pix.png')
const TelaResultadoSimulado = () =>{
    return (
        <Box className="body" sx={{width:"100vw", height:"100vh", backgroundColor: "#f3f4f7", pt:20, textAlign:"center"}}>
            <NavBar/>
            <Box className="main" sx={{width: 350, height:500, backgroundColor: "white", margin:"auto", borderRadius:5, boxShadow:24, pt:5}}>
                <Typography variant="h6" component="div">Parabéns, você passou! </Typography>

                <Box>
                    <GraficoPizza certas={9} erradas={3}/>
                </Box>
                <Typography variant="h6" component="div" sx={{fontWeight:"bold"}}>Se o site te ajudou, faça uma doação e nos ajude a melhor a plataforma. </Typography>
                <Typography variant="subtitle1" component="div">Pix QrCode: </Typography>
                <img src={logo} style={{width:150}}alt="qrcode do pix" />

            </Box>
        </Box>
    );
}
export default TelaResultadoSimulado;