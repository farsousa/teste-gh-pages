import Box from "@mui/material/Box";
import Card_simulado from '../components/CardSimulado'
import NavBar from "../components/NavBar";
import api from "../service/Api"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


 const Tela_simulado= () => {
  
  const {id} = useParams();
  
  
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
          {id !== undefined && <Card_simulado id={"d9e0f1g2-h3i4-j5k6-l7m8-n9o0p1q2"} />}
          
    
        </Box>
    );
};
export default Tela_simulado