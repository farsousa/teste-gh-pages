import Box from "@mui/material/Box";
import Card_simulado from '../components/CardSimulado'
import NavBar from "../components/NavBar";
import api from "../service/Api"
import { useEffect } from "react";


 const Tela_simulado= () => {

    return (
        <Box
          className="body"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
          }}
        >
          <NavBar/>
          <Card_simulado/>
    
        </Box>
    );
};
export default Tela_simulado