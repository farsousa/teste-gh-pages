import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Divider,
  RadioGroup,
  AlertColor,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import ItemQuestao from "./ItemQuestao";
import api from "../service/api";
import { AxiosResponse, AxiosError } from "axios";
import { useLocation, useNavigate} from "react-router-dom";
import ChatIcon from '@mui/icons-material/Chat';
type materia = {
  id: string | null;
};
type questaoDetalhada = {
  id: string;
  enunciado: string;
  linkImagem: string;
  alternativa1: string;
  alternativa2: string;
  alternativa3: string;
  alternativa4: string;
  resposta: string;
  explicacao: string;
  nomeMateria: string;
};
const CardSimulado = ({ id }: materia) => {
  const [textoBtnResponder, setTextoBtnResponder] = useState("Responder");
  const [questoesSimuladoIndividual, setQuestoesSimuladoIndividual] =
    useState<questaoDetalhada[]>();
  const [controlaQuestoesSimulado, setcontrolaQuestoesSimulado] = useState(0);
  const [radioButtonMarcadoUsuario, setRadioButtonMarcadoUsuario] =
    useState("");

  const [timeLeft, setTimeLeft] = useState(2400);
  const [valorAlertaAlternativa1, setValorAlertaAlternativa1] = useState<
    AlertColor | undefined
  >(undefined);
  const [valorAlertaAlternativa2, setValorAlertaAlternativa2] = useState<
    AlertColor | undefined
  >();
  const [valorAlertaAlternativa3, setValorAlertaAlternativa3] = useState<
    AlertColor | undefined
  >();
  const [valorAlertaAlternativa4, setValorAlertaAlternativa4] = useState<
    AlertColor | undefined
  >();
  const [bordaBtnResponder, setBordaBtnResponder] = useState("");
  const [colorBtnResponder, setColorBtnResponder] = useState("white");
  const [variacaoBtnResponder, setVariacaoBtnResponder] = useState<
    "contained" | "outlined" | "text"
  >("contained");
  const [ComentarioDesativado, setComentarioDesativado] = useState(true);
  const [contQuestoesCertas, setContQuestoesCertas] = useState(0);
  const [contQuestoesErradas, setContQuestoesErradas] = useState(0);
  const [openSnack, setOpenSnack] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navegate = useNavigate();
  const [expandido, setExpandido] = useState(false);
  const location = useLocation();
  const { i } = location.state || {};
  useEffect(() => {
    if(i!==null || i!== undefined){
      api
        .post('/simulado', {
          idMateria: i,
        })
        .then((response: AxiosResponse) => 
          setQuestoesSimuladoIndividual(response.data.objeto.questoes)
        )
        .catch((err: AxiosError) => {
          console.error('ops! ocorreu um erro' + err);
        });
      }else{
        api
        .post('/simulado', {
          idMateria: null,
        })
        .then((response: AxiosResponse) => 
          setQuestoesSimuladoIndividual(response.data.objeto.questoes)
        )
        .catch((err: AxiosError) => {
          console.error('ops! ocorreu um erro' + err);
        });
      }

    return () => {
      setBordaBtnResponder('Responder');
    };
  }, [i]);
  useEffect(()=>{
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime > 0 ? prevTime - 1 : 0);
    }, 1000);

    
    return () => clearInterval(timer);
  },[])
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioButtonMarcadoUsuario(event.target.value);
  };

  const handleClickOpenSnack = () => {
    setOpenSnack(true);
  };

  const handleCloseSnack = () => {
    setOpenSnack(false);
  };
  const handleClickOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleConfirm = () => {
    navegate("/pagina-inicial")
  }
  const handleExpansao = (expandido:any) => {
    setExpandido(expandido);
  };
  const navegaResultadoSimulado =()=>{
    navegate(`/resultadoSimulado`, {state:{certas:contQuestoesCertas, erradas:contQuestoesErradas,controlador:1}})
  }
  function ControlaBtnResponderProxima() {
    if (textoBtnResponder === "Responder") {
      if(radioButtonMarcadoUsuario===""){
        handleClickOpenSnack()
      }else{
        setTextoBtnResponder("Próxima");
      if (
        radioButtonMarcadoUsuario ===
        (questoesSimuladoIndividual &&
          questoesSimuladoIndividual[controlaQuestoesSimulado].resposta)
      ) {
      
        setContQuestoesCertas(contQuestoesCertas+1)
      } else {
        setContQuestoesErradas(contQuestoesErradas+1)
      }
      (questoesSimuladoIndividual &&
        questoesSimuladoIndividual[controlaQuestoesSimulado].alternativa1) !==
      (questoesSimuladoIndividual &&
        questoesSimuladoIndividual[controlaQuestoesSimulado].resposta)
        ? setValorAlertaAlternativa1("error")
        : setValorAlertaAlternativa1("success");

      (questoesSimuladoIndividual &&
        questoesSimuladoIndividual[controlaQuestoesSimulado].alternativa2) !==
      (questoesSimuladoIndividual &&
        questoesSimuladoIndividual[controlaQuestoesSimulado].resposta)
        ? setValorAlertaAlternativa2("error")
        : setValorAlertaAlternativa2("success");

      (questoesSimuladoIndividual &&
        questoesSimuladoIndividual[controlaQuestoesSimulado].alternativa3) !==
      (questoesSimuladoIndividual &&
        questoesSimuladoIndividual[controlaQuestoesSimulado].resposta)
        ? setValorAlertaAlternativa3("error")
        : setValorAlertaAlternativa3("success");

      (questoesSimuladoIndividual &&
        questoesSimuladoIndividual[controlaQuestoesSimulado].alternativa4) !==
      (questoesSimuladoIndividual &&
        questoesSimuladoIndividual[controlaQuestoesSimulado].resposta)
        ? setValorAlertaAlternativa4("error")
        : setValorAlertaAlternativa4("success");

      setVariacaoBtnResponder("contained");
      setBordaBtnResponder("");
      setColorBtnResponder("white");
      setComentarioDesativado(false)
      }
      
    } else {
      if(radioButtonMarcadoUsuario===""){
        handleClickOpenSnack()
      }
      console.log(textoBtnResponder)
      setBordaBtnResponder("1px solid gray");
      setVariacaoBtnResponder("outlined");
      setColorBtnResponder("gray");
      setComentarioDesativado(true)
      setRadioButtonMarcadoUsuario("")
      if (
        questoesSimuladoIndividual &&
        questoesSimuladoIndividual.length - 1 === controlaQuestoesSimulado
      ) {
        navegaResultadoSimulado()
      } else {
        setcontrolaQuestoesSimulado(controlaQuestoesSimulado + 1);
      }
      setValorAlertaAlternativa1(undefined);
      setValorAlertaAlternativa2(undefined);
      setValorAlertaAlternativa3(undefined);
      setValorAlertaAlternativa4(undefined);
      setTextoBtnResponder("Responder");
    }
  }
  
 
  return (
    <Card
      variant="outlined"
      sx={{ width: { xs: 300, sm: 400, md: 500 }, minHeight: 300, margin: "auto", marginTop: 10, overflow: 'auto' }}
    >
      <Snackbar sx={{
        '& .MuiSnackbarContent-root': {
          backgroundColor: 'red', // Cor de fundo desejada
          color: 'white', // Cor do texto desejada
          fontWeight:"Bold"
          },
          
        }}
        open={openSnack}
        autoHideDuration={1100}
        onClose={handleCloseSnack}
        message="Selecione uma das opções"
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      />
      {/* Cabeçalho com temporizador e contagem de respostas */}
      <CardContent sx={{pt:1, pb:1}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="textSecondary">
          <span style={{color:"green"}}>Acertos: {contQuestoesCertas}</span>  | <span style={{color:"red"}}>Erros:{contQuestoesErradas}</span>
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: 15,pr:2 }}>
             {Math.floor(timeLeft / 60)}:
            {("0" + (timeLeft % 60)).slice(-2)}
          </Typography>
        </Box>
      </CardContent>

      <Divider />
      {/* Conteúdo da pergunta e opções de resposta */}
      <CardContent sx={{ pl: "4%" ,pt:1}}>
      
        <Typography variant="h6" gutterBottom>
          {questoesSimuladoIndividual &&
            questoesSimuladoIndividual[controlaQuestoesSimulado].enunciado}
        </Typography>
        <RadioGroup
          name="radio-buttons-group"
          value={radioButtonMarcadoUsuario}
          onChange={handleRadioChange}
        >
          <ItemQuestao
            texto={
              questoesSimuladoIndividual &&
              questoesSimuladoIndividual[controlaQuestoesSimulado].alternativa1
            }
            tipoAlerta={valorAlertaAlternativa1}
          ></ItemQuestao>
          <ItemQuestao
            texto={
              questoesSimuladoIndividual &&
              questoesSimuladoIndividual[controlaQuestoesSimulado].alternativa2
            }
            tipoAlerta={valorAlertaAlternativa2}
          ></ItemQuestao>
          <ItemQuestao
            texto={
              questoesSimuladoIndividual &&
              questoesSimuladoIndividual[controlaQuestoesSimulado].alternativa3
            }
            tipoAlerta={valorAlertaAlternativa3}
          ></ItemQuestao>
          <ItemQuestao
            texto={
              questoesSimuladoIndividual &&
              questoesSimuladoIndividual[controlaQuestoesSimulado].alternativa4
            }
            tipoAlerta={valorAlertaAlternativa4}
          ></ItemQuestao>
        </RadioGroup>
      </CardContent>

      <CardContent sx={{ p: 0, pl: "3%", pr: "3%" }}>
        <Accordion expanded={expandido} disabled={ComentarioDesativado} onChange={()=>handleExpansao(!expandido)}sx={{ mb: "4%" }}>
          <AccordionSummary
            sx={{ height: 30, minHeight: 0 , pt:'3%', display:'flex', justifyContent:'center'}}
            
          >
            <Typography
              variant="overline"
              color="initial"
              sx={{ fontWeight: "bold", padding:0,}}
            >
             <ChatIcon sx={{fontSize:20,mt:"3%"}}/> 
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {questoesSimuladoIndividual &&
                questoesSimuladoIndividual[controlaQuestoesSimulado].explicacao}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Grid container id="roodape" justifyContent="space-between">
          <Button
            variant={variacaoBtnResponder}
            onClick={ControlaBtnResponderProxima}
            sx={{
              fontWeight: "bold",
              color: colorBtnResponder,
              border: bordaBtnResponder,
            }}
          >
            {textoBtnResponder}
          </Button>
            <Dialog
              open={openModal}
              onClose={handleCloseModal}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Encerrar Simulado"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Tem certeza que quer encerrar o simulado? Você voltará para a página inicial.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseModal} color="primary">
                  NÃO
                </Button>
                <Button onClick={handleConfirm} color="primary" autoFocus>
                  SIM
                </Button>
              </DialogActions>
            </Dialog>
          <Button
            variant="contained"
            sx={{ background: "#ee3a20", fontWeight: "bold", '&:hover':{
              backgroundColor:"#9a1f12"
            },
          }}
          onClick={handleClickOpenModal}
          >
            Encerrar o Simulado
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardSimulado;
