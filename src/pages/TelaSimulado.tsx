import Box from "@mui/material/Box";
import CardSimulado from "../components/CardSimulado";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

const TelaSimulado = () => {
  const { id } = useParams();
  console.log("TelaSimulado "+ id)
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
      {id && <CardSimulado id={id} />}
    </Box>
  );
};
export default TelaSimulado;
