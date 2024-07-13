import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TurnRightIcon from "@mui/icons-material/TurnRight";
import TurnLeftIcon from "@mui/icons-material/TurnLeft";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "@fontsource/dosis";
import api from '../service/Api';
import { useEffect, useState } from "react";
import CardMateria from "../components/CardMateria"
import NavBar from "../components/NavBar";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const sm = 6; // define a quantidade de colunas no small screen
const md = 4;

interface Materia {
  id: string;
  descricao: string;
  quantidadeQuestoesSimuladoEspecifico: number;
  quantidadeQuestoesSimuladoGeral: number;
}

const Tela_inicial = () => {
  const [listaMaterias, setListaMaterias] = useState<Materia[]>([]);

useEffect(() => {
  api
    .get("/questoesdetranws/materia/listar-todos")
    .then((response) => setListaMaterias(response.data.lista))
    .catch((err) => {  
      console.error("ops! ocorreu um erro" + err);
    });
}, []);

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
      <Button
        variant="contained"
        sx={{
          width: { xs: 300, sm: 300, md: 300, lg: 300, xl: 300 },
          mb: 7,
          mt: 20,
          padding: 2,
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
          display: "flex",
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
        <Grid
          className="card_group"
          container
          spacing={4}
          sx={{ flexWrap: "wrap", width: "100%", mb: 10 }}
        >
          {listaMaterias != undefined ? listaMaterias.map((materia) =>(
            <CardMateria key={materia.id} id={materia.id} descricao={materia.descricao}
            />
          )) : <div> Carregando...</div>}
        </Grid>
      </Box>
    </Box>
  );
};
export default Tela_inicial;
