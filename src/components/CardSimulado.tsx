import { useEffect, useState } from 'react';
import {  Box, Typography, Card, CardContent, Grid, Button, Divider, FormGroup, FormControlLabel, Checkbox, RadioGroup } from '@mui/material';
import ItemQuestao from './ItemQuestao';
import api from '../service/Api';

type materia ={
  id:string | null
}
type questaoDetalhada = {
    "id": string
    "enunciado": string 
    "linkImagem": string
    "alternativa1": string;
    "alternativa2": string;
    "alternativa3": string;
    "alternativa4": string;
    "resposta": string;
    "explicacao":  string;
    "nomeMateria": string;
}
const CardSimulado = ({id}:materia) => { {/*Aqui é o Id da matéria, só serve para gerar o simulado*/}

  const [textoBtnResponder, setTextoBtnResponder] = useState("Responder")
  const [questoesSimuladoIndividual,setQuestoesSimuladoIndividual] = useState<questaoDetalhada[]>()
  const [controlaQuestoesSimulado, setcontrolaQuestoesSimulado] = useState(0);
  const [radioButtonMarcadoUsuario, setRadioButtonMarcadoUsuario] = useState("");
  const [feedback, setFeedback] = useState("");
  
  const [timeLeft, setTimeLeft] = useState(2400);
  
  useEffect( () => {
    api
    .post("/simulado",{
       "idMateria": id
    })
    .then((response) =>  setQuestoesSimuladoIndividual(response.data.objeto.questoes))
    .catch((err) => {  
      console.error("ops! ocorreu um erro" + err);
    });
    
  }, []);
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioButtonMarcadoUsuario(event.target.value);
};
  function ControlaBtnReponderProxima(){
    if(textoBtnResponder ==="Responder"){
      if(radioButtonMarcadoUsuario===(questoesSimuladoIndividual && questoesSimuladoIndividual[controlaQuestoesSimulado].resposta)){
        setFeedback("Parabéns, você acertou")
      }else{
      setFeedback("Você errou")
      }
      setTextoBtnResponder("Próxima")
      
  }else{ 
    if(questoesSimuladoIndividual && questoesSimuladoIndividual.length-1 === controlaQuestoesSimulado){
      setcontrolaQuestoesSimulado(controlaQuestoesSimulado)
    }else{
      setcontrolaQuestoesSimulado(controlaQuestoesSimulado+1)
    }
    setFeedback('')
    setTextoBtnResponder("Responder")
  }
  }
   
  return (
    <Card variant="outlined" sx={{ width: 500, minHeight:400, margin: 'auto', marginTop: 15 }}>
      {/* Cabeçalho com temporizador e contagem de respostas */}
      <CardContent>
          <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <Typography variant="body2" color="textSecondary">Acertos:  | Erros: </Typography>
            <Typography variant="h6" sx={{fontWeight:'bold', fontSize:15}}>Tempo Restante: {Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}</Typography>
            
          </Box>
          
        
      </CardContent>

      <Divider />
      {/* Conteúdo da pergunta e opções de resposta */}
      <CardContent>
        
        <Typography variant="h6" gutterBottom>{questoesSimuladoIndividual && questoesSimuladoIndividual[controlaQuestoesSimulado].enunciado}</Typography>
        <RadioGroup name="radio-buttons-group" value={radioButtonMarcadoUsuario} onChange={handleRadioChange}>
            <ItemQuestao texto={questoesSimuladoIndividual && questoesSimuladoIndividual[controlaQuestoesSimulado].alternativa1}></ItemQuestao>
            <ItemQuestao texto={questoesSimuladoIndividual && questoesSimuladoIndividual[controlaQuestoesSimulado].alternativa2}></ItemQuestao>
            <ItemQuestao texto={questoesSimuladoIndividual && questoesSimuladoIndividual[controlaQuestoesSimulado].alternativa3}></ItemQuestao>
            <ItemQuestao texto={questoesSimuladoIndividual && questoesSimuladoIndividual[controlaQuestoesSimulado].alternativa4}></ItemQuestao>
        </RadioGroup>
        <Typography variant="body1" color="initial" sx={{height:6}}>{feedback}</Typography>
      </CardContent>

      <CardContent>
        <Grid container justifyContent="space-between">
         
          <Button variant="contained" onClick={ControlaBtnReponderProxima} sx={{fontWeight:"bold"}}>{textoBtnResponder}</Button>
          <Button variant="contained" sx={{bgcolor:"#e34e47", fontWeight:"bold"}} >Encerrar o Simulado</Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardSimulado;