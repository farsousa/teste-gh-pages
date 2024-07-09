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
import IconButton from "@mui/material/IconButton";
import '@fontsource/dosis'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {


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
    <AppBar
      position="static"
      sx={{ mb: 5, backgroundColor: "gray", height: 80 }}
    >
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 , fontWeight:'bold'}}>
          <TurnRightIcon sx={{ fontSize: 40 }} />
          
           Questões Detran
          <TurnLeftIcon sx={{ fontSize: 40 }} />
          
        </Typography>
      </Toolbar>
    </AppBar>
    <Button
      variant="contained"
      sx={{
        width: "400",
        mb: 4,
        padding:2,
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
        borderColor: "gray",
        borderRadius: 10,
        "&:hover": {
          backgroundColor: "gray",
          color: "white",
          borderColor: "gray",
        },
        backgroundColor: "gray",
      }}
    >
      Simulado Completo
    </Button>
    <Box
      sx={{
        flexGrow: 1,
        paddingRight: { xs: 1, sm: 3, md: 10, lg: 10, xl: 10 },
        paddingLeft: { xs: 1, sm: 3, md: 10, lg: 10, xl: 10 },
      }}
      className="main"
    >
      <Grid container spacing={4} sx={{ flexWrap: "wrap" }}>
        <Grid item xs={12} sm={4}>
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
        <Grid item xs={12} sm={4}>
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
        <Grid item xs={12} sm={4}>
          <Item sx={{display: "flex",flexDirection: "column", justifyContent: "center",alignItems: "center",}}>
            <TaxiAlertOutlinedIcon style={{ fontSize: 70 }} />
            <Typography variant="h6">Direção Defensiva</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4}>
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
        <Grid item xs={12} sm={4}>
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

export default App;
