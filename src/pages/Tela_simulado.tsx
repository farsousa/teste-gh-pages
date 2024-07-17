import Box from "@mui/material/Box";
import Card_simulado from '../components/CardSimulado'
import NavBar from "../components/NavBar";
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
          {id && <Card_simulado id={id} />}
          
    
        </Box>
    );
};
export default Tela_simulado