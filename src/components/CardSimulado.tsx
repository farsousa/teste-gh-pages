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
  
  const [timeLeft, setTimeLeft] = useState(2400);
  
  useEffect( () => {
    console.log(id)
    api
    .post("/simulado",{
       "idMateria": id
    })
    .then((response) =>  setQuestoesSimuladoIndividual(response.data.objeto.questoes))
    .catch((err) => {  
      console.error("ops! ocorreu um erro" + err);
    });
    
  }, []);
  function ControlaBtnReponderProxima(){
    if(textoBtnResponder ==="Responder"){
      setTextoBtnResponder("Próxima")
  }else{ 
    setTextoBtnResponder("Responder")
  }
  }
   
  return (
    <Card variant="outlined" sx={{ minWidth: 400, maxWidth: 600, margin: 'auto', marginTop: 15 }}>
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
        
        <Typography variant="h6" gutterBottom>{questoesSimuladoIndividual && questoesSimuladoIndividual[controlaQuestoesSimulado].enunciado}:</Typography>
        <RadioGroup name="radio-buttons-group" >
            <ItemQuestao texto={questoesSimuladoIndividual && questoesSimuladoIndividual[controlaQuestoesSimulado].alternativa1}></ItemQuestao>
            <ItemQuestao texto={questoesSimuladoIndividual && questoesSimuladoIndividual[controlaQuestoesSimulado].alternativa2}></ItemQuestao>
            <ItemQuestao texto={questoesSimuladoIndividual && questoesSimuladoIndividual[controlaQuestoesSimulado].alternativa3}></ItemQuestao>
            <ItemQuestao texto={questoesSimuladoIndividual && questoesSimuladoIndividual[controlaQuestoesSimulado].alternativa4}></ItemQuestao>
        </RadioGroup>
      </CardContent>

      <CardContent>
        <Grid container justifyContent="space-between">
          <Button variant="contained" disabled>Anterior</Button>
         
          <Button variant="contained" color="error" >Encerrar o Simulado</Button>
          <Button variant="contained" onClick={ControlaBtnReponderProxima}>{textoBtnResponder}</Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardSimulado;