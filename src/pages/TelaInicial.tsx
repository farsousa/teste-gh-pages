import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import api from "../service/api";
import { useEffect, useState } from "react";
import CardMateria from "../components/CardMateria";
import NavBar from "../components/NavBar";
import { AxiosResponse, AxiosError } from "axios";

import {useNavigate } from "react-router-dom";


interface Materia {
  id: string;
  descricao: string;
  quantidadeQuestoesSimuladoEspecifico: number;
  quantidadeQuestoesSimuladoGeral: number;
}

const TelaInicial = () => {
  const [listaMaterias, setListaMaterias] = useState<Materia[]>([]);
  const navegate = useNavigate();
  
  const navega =()=>{
    navegate(`/simulado`, {state:{i:null,controlador:1}})
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
          mb: 3,
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
          marginTop: { xs: 15, sm: 0, md: 20, lg: 0, xl: 0 },
        }}
        onClick={navega}
      >
       Simulado Geral
        
      </Button>
      
    
        <Grid
          className="card_group"
          container
          spacing={6}
          sx={{ 
            flexWrap: "wrap", 
            width: "100%", 
            height:300,
            paddingRight: { xs: 4, sm: 4, md: 2,lg:6,xl:50 },
            paddingLeft: { xs: 4, sm: 4, md: 2,lg:6, xl:50 }, 
            margin:0,
            mb:"10px",
            '& .MuiGrid-item': {
              paddingLeft: 6, // Estilo padrão para todos os dispositivos
              '@media (max-width:600px)': { // Para dispositivos pequenos
                paddingLeft: 0,
              },
            }
          }}
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
    
  );
};
export default TelaInicial;
