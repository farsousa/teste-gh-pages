import { AppBar, Toolbar, Typography } from "@mui/material"
import TurnRightIcon from "@mui/icons-material/TurnRight";
import TurnLeftIcon from "@mui/icons-material/TurnLeft";

const NavBar = () => {
    
    return(
        <AppBar sx={{ backgroundColor: "#c5c6c7", height: 80, pb:3,pt:0.5 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Typography variant="h5" component="div" sx={{fontWeight:900,fontSize: 40, color:"black", display: 'flex', alignItems: 'center'}}>
          <TurnRightIcon sx={{ fontSize: 60 }} />
          
           Questões Detran
          <TurnLeftIcon sx={{ fontSize: 60 }} />
          
        </Typography>
      </Toolbar>
    </AppBar>
    )
} 
export default NavBar