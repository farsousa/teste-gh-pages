import Box from "@mui/material/Box";
import CardSimulado from "../components/CardSimulado";
import NavBar from "../components/NavBar";
import { useLocation } from "react-router-dom";

const TelaSimulado = () => {
  const location = useLocation();
  const {i=null} = location.state
  console.log("TelaSimulado "+ JSON.stringify(i))
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
