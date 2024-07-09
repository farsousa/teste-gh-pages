import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import EmojiNatureOutlinedIcon from "@mui/icons-material/EmojiNatureOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import TaxiAlertOutlinedIcon from "@mui/icons-material/TaxiAlertOutlined";
import SosOutlinedIcon from "@mui/icons-material/SosOutlined";
import Button from "@mui/material/Button";
import TurnRightIcon from "@mui/icons-material/TurnRight";
import TurnLeftIcon from "@mui/icons-material/TurnLeft";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import '@fontsource/dosis';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  
const sm = 6; // define a quantidade de colunas no small screen
const md = 4; 

export const Tela_inicial = () => {


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
    <Button
      variant="contained"
      sx={{
        width: { xs: 300, sm: 300, md: 300, lg: 300, xl: 300 },
        mb: 7,
        mt:20,
        padding:2,
        color: "white",
        fontWeight: "bold",
        fontSize: 23,
        borderColor: "gray",
        borderRadius: 10,
        "&:hover": {
          backgroundColor: "gray",
          color: "white",
          borderColor: "gray",
        },
        backgroundColor: "gray",
        display: 'flex',
        marginTop: { xs: 70, sm: 20, md: 30, lg: 20, xl: 20 },
      }}
    >
      Simulado Completo
    </Button>
    <Box
      sx={{
        flexGrow: 1,
        paddingRight: { xs: 4, sm: 6, md: 10, lg: 10, xl: 10 },
        paddingLeft: { xs: 4, sm: 6, md: 10, lg: 10, xl: 10 },
      }}
      className="main"
    >
      <Grid className="card_group" container spacing={4} sx={{ flexWrap: "wrap" , width:'100%',mb:10}}>
        <Grid item xs={12} sm={sm} md={md}>
          <Item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MenuBookOutlinedIcon style={{ fontSize: 70 }} /> <Typography variant="h6">Legislação de
            Transito</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={sm} md={md}>
          <Item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BuildOutlinedIcon style={{ fontSize: 70 }} /> <Typography variant="h6">Mecânica Básica</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={sm} md={md}>
          <Item sx={{display: "flex",flexDirection: "column", justifyContent: "center",alignItems: "center",}}>
            <TaxiAlertOutlinedIcon style={{ fontSize: 70 }} />
            <Typography variant="h6">Direção Defensiva</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={sm} md={md}>
          <Item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SosOutlinedIcon style={{ fontSize: 70 }} /> <Typography variant="h6">Primeiros Socorros</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={sm} md={md}>
          <Item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <EmojiNatureOutlinedIcon style={{ fontSize: 70 }} />
            <Typography variant="h6">Meio Ambiente e Cidadania</Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  </Box>
    );
}