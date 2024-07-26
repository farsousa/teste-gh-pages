import Box from "@mui/material/Box";
import CardSimulado from "../components/CardSimulado";
import NavBar from "../components/NavBar";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const TelaSimulado = () => {
  const location = useLocation();
  const i = location.state?.i ?? null;
  const controlador = location.state?.controlador ?? 0;
  console.log("TelaSimulado "+ JSON.stringify(i))
  const navegate = useNavigate()
  useEffect(()=>{
    if(!controlador){
    navegate("/pagina-inicial")
  }
  },[controlador, navegate])
 
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
      <NavBar />
      {<CardSimulado id={i} />}
    </Box>
  );
};
export default TelaSimulado;
