import Box from "@mui/material/Box";

import Card_simulado from '../components/CardSimulado'
import NavBar from "../components/NavBar";

 const Tela_simulado: React.FC = () => {

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