import EmojiNatureOutlinedIcon from "@mui/icons-material/EmojiNatureOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import TaxiAlertOutlinedIcon from "@mui/icons-material/TaxiAlertOutlined";
import SosOutlinedIcon from "@mui/icons-material/SosOutlined";
import { styled } from "@mui/material/styles";

import { Grid, Paper, Typography } from "@mui/material";
import {Link} from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const sm = 6; // Define a quantidade de colunas no small screen
const md = 4;
type infoMateria = {
  id:string;
  descricao: string;
}

const CardMateria = ({id,descricao}:infoMateria) =>{
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
    <Grid item xs={12} sm={sm} md={md}>
            <Link
              to={`/simulado/${id}`}
              style={{
                textDecoration: "none",
              }}
            >
              <Item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {iconeMateria}
                <Typography variant="h6">{descricao}</Typography>
              </Item>
            </Link>
          </Grid>
  );
}

export default CardMateria;

