import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "@fontsource/dosis";
import api from "../service/api";
import { useEffect, useState } from "react";
import CardMateria from "../components/CardMateria";
import NavBar from "../components/NavBar";
import { AxiosResponse, AxiosError } from "axios";
import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";


interface Materia {
  id: string;
  descricao: string;
  quantidadeQuestoesSimuladoEspecifico: number;
  quantidadeQuestoesSimuladoGeral: number;
}

const TelaInicial = () => {
  const [listaMaterias, setListaMaterias] = useState<Materia[]>([]);
  const navegate = useNavigate()
  
  const navega =()=>{
    navegate(`/simulado`, {state:{i:null}})
  }

  useEffect(() => {
    api
      .get("/materia")
      .then((response: AxiosResponse) => setListaMaterias(response.data.lista))
      .catch((err: AxiosError) => {
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
      <NavBar />
      
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
        onClick={navega}
      >
       Simulado Geral
        
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
          {listaMaterias !== undefined ? (
            listaMaterias.map((materia) => (
              <CardMateria
                key={materia.id}
                id={materia.id}
                descricao={materia.descricao}
              />
            ))
          ) : (
            <div> Carregando...</div>
          )}
        </Grid>
      </Box>
    </Box>
  );
};
export default TelaInicial;
