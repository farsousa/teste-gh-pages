import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TurnRightIcon from "@mui/icons-material/TurnRight";
import TurnLeftIcon from "@mui/icons-material/TurnLeft";
import Card_simulado from '../components/CardSimulado'

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
    <AppBar sx={{ backgroundColor: "#c5c6c7", height: 80, pb:3,pt:0.5 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Typography variant="h5" component="div" sx={{fontWeight:900,fontSize: 40, color:"black", display: 'flex', alignItems: 'center'}}>
          <TurnRightIcon sx={{ fontSize: 60 }} />
          
           Questões Detran
          <TurnLeftIcon sx={{ fontSize: 60 }} />
          
        </Typography>
      </Toolbar>
    </AppBar>
    
    <Card_simulado/>
    
    </Box>
    );
};
export default Tela_simulado