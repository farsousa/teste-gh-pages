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
} from "@mui/material";
import ItemQuestao from "./ItemQuestao";
import api from "../service/api";
import { AxiosResponse, AxiosError } from "axios";
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
  {
    /*Aqui é o Id da matéria, só serve para gerar o simulado*/
  }

  const [textoBtnResponder, setTextoBtnResponder] = useState("Responder");
  const [questoesSimuladoIndividual, setQuestoesSimuladoIndividual] =
    useState<questaoDetalhada[]>();
  const [controlaQuestoesSimulado, setcontrolaQuestoesSimulado] = useState(0);
  const [radioButtonMarcadoUsuario, setRadioButtonMarcadoUsuario] =
    useState("");
  const [feedback, setFeedback] = useState("");

  const [timeLeft, setTimeLeft] = useState(2400);
  const [valorAlertaAlternativa1, setValorAlertaAlternativa1] = useState<
    AlertColor | undefined
  >();
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
  useEffect(() => {
    api
      .post("/simulado", {
        idMateria: id,
      })
      .then((response: AxiosResponse) =>
        setQuestoesSimuladoIndividual(response.data.objeto.questoes)
      )
      .catch((err: AxiosError) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioButtonMarcadoUsuario(event.target.value);
  };

  function ControlaBtnResponderProxima() {
    if (textoBtnResponder === "Responder") {
      if (
        radioButtonMarcadoUsuario ===
        (questoesSimuladoIndividual &&
          questoesSimuladoIndividual[controlaQuestoesSimulado].resposta)
      ) {
        setFeedback("Parabéns, você acertou");
      } else {
        setFeedback("Você errou");
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
      setTextoBtnResponder("Próxima");
    } else {
      setBordaBtnResponder("1px solid gray");
      setVariacaoBtnResponder("outlined");
      setColorBtnResponder("gray");
      if (
        questoesSimuladoIndividual &&
        questoesSimuladoIndividual.length - 1 === controlaQuestoesSimulado
      ) {
        setcontrolaQuestoesSimulado(controlaQuestoesSimulado);
      } else {
        setcontrolaQuestoesSimulado(controlaQuestoesSimulado + 1);
      }
      setValorAlertaAlternativa1(undefined);
      setValorAlertaAlternativa2(undefined);
      setValorAlertaAlternativa3(undefined);
      setValorAlertaAlternativa4(undefined);
      setFeedback("");
      setTextoBtnResponder("Responder");
    }
    console.log(variacaoBtnResponder);
  }

  return (
    <Card
      variant="outlined"
      sx={{ width: 500, minHeight: 400, margin: "auto", marginTop: 15 }}
    >
      {/* Cabeçalho com temporizador e contagem de respostas */}
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="textSecondary">
            Acertos: | Erros:{" "}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: 15 }}>
            Tempo Restante: {Math.floor(timeLeft / 60)}:
            {("0" + (timeLeft % 60)).slice(-2)}
          </Typography>
        </Box>
      </CardContent>

      <Divider />
      {/* Conteúdo da pergunta e opções de resposta */}
      <CardContent>
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
        <Typography variant="body1" color="initial" sx={{ height: 6 }}>
          {feedback}
        </Typography>
      </CardContent>

      <CardContent>
        <Grid container justifyContent="space-between">
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
          <Button
            variant="contained"
            sx={{ background: "#ee3a20", fontWeight: "bold" }}
          >
            Encerrar o Simulado
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardSimulado;
