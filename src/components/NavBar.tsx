import { AppBar, styled, Toolbar, Typography } from "@mui/material"
import TurnRightIcon from "@mui/icons-material/TurnRight";
import TurnLeftIcon from "@mui/icons-material/TurnLeft";
import { Link } from "react-router-dom";

const NavBar = () => {
  const CustomLink = styled(Link)({
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
     textDecoration: 'none', 
     color: 'inherit'
    },
  });
  let tamanhoFonte = 30;
    return(
        <AppBar sx={{ backgroundColor: "#c5c6c7", height: 60, pb:3,pt:0.5 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Typography variant="h1" component="div" sx={{fontWeight:900,fontSize: tamanhoFonte, color:"black", display: 'flex', alignItems: 'center'}}>
        <CustomLink to="/pagina-principal">
          <TurnRightIcon sx={{ fontSize: tamanhoFonte }} />
          
           Questões Detran
          <TurnLeftIcon sx={{ fontSize: tamanhoFonte }} />
          </CustomLink>
          
        </Typography>
      </Toolbar>
    </AppBar>
    )
} 
export default NavBar