import EmojiNatureOutlinedIcon from "@mui/icons-material/EmojiNatureOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import TaxiAlertOutlinedIcon from "@mui/icons-material/TaxiAlertOutlined";
import SosOutlinedIcon from "@mui/icons-material/SosOutlined";
import { styled } from "@mui/material/styles";

import { Grid, Paper, Typography } from "@mui/material";
import { useNavigate} from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  cursor: 'pointer',
  transition: 'box-shadow 0.3s ease-in-out', // Adiciona transição suave

  '&:hover': {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Adiciona sombra ao passar o mouse
  },
}));

const sm = 6; // Define a quantidade de colunas no small screen
const md = 4;

type infoMateria = {
  id:string;
  descricao: string;
}

const CardMateria = ({id,descricao}:infoMateria) =>{
  const navegate = useNavigate()
  const navega =()=>{
    navegate(`/simulado`, {state:{i:id,controlador:1}})
  }
  let iconeMateria;
  if (descricao === 'Meio Ambiente e Cidadania') {
    iconeMateria = <EmojiNatureOutlinedIcon style={{ fontSize: 70 }} />;
  } else if (descricao === 'Mecânica Básica') {
    iconeMateria = <BuildOutlinedIcon style={{ fontSize: 70 }} />;
  } else if (descricao === 'Direção Defensiva') {
    iconeMateria = <TaxiAlertOutlinedIcon style={{ fontSize: 70 }} />;
  } else if (descricao === 'Primeiros Socorros') {
    iconeMateria = <SosOutlinedIcon style={{ fontSize: 70 }} />;
  } else {
    // Caso padrão: usar o ícone de Livro
    iconeMateria = <MenuBookOutlinedIcon style={{ fontSize: 70 }} />;
  }
  return (
    <Grid item xs={12} sm={sm} md={md} sx={{paddingBottom:"10px"}}>
            
              <Item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={navega}
              >
                {iconeMateria}
                <Typography variant="h6">{descricao}</Typography>
              </Item>
              
          </Grid>
  );
}

export default CardMateria;

