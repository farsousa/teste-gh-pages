import React, { useEffect, useState } from 'react';
import {  Box, Typography, Card, CardContent, Grid, Button, Divider, FormGroup, FormControlLabel, Checkbox, RadioGroup } from '@mui/material';
import ItemQuestao from './ItemQuestao';
import api from '../service/Api';

type materia ={
  id:string
}
type questaoDetalhada = {
  "objeto": {
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
  },
  "mensagem": string;

}
const CardSimulado = ({id}:materia) => {


  const [textoBtnResponder, setTextoBtnResponder] = useState<string>("Responder")
  const [timeLeft, setTimeLeft] = useState<number>(2400);
  const [questoesSimuladoIndividual,setQuestoesSimuladoIndividual] = useState<[] | null>([])
  const [questaoDetalhada, setQuestaoDetalhada] = useState<questaoDetalhada>()
  
  useEffect( () => {
    api
    .post("/simulado",{
       "idMateria": id
    },)
    .then((response) =>  setQuestoesSimuladoIndividual(response.data.objeto.questoes))
    .catch((err) => {  
      console.error("ops! ocorreu um erro" + err);
    });
    consultaQuestao()
  }, []);
 
   function consultaQuestao(){
    api
    .get(`/questao/${id}`)
    .then((response) =>  setQuestaoDetalhada(response.data))
    .catch((err) => {  
      console.error("ops! ocorreu um erro" + err);
    });
    console.log("questão detalhada "+JSON.stringify(questaoDetalhada?.objeto))
   }
 

  function teste(){
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
        <Typography variant="h6" gutterBottom>Conduzir veículo com defeito no sistema de iluminação ou sinalização constitui infração:</Typography>
        <RadioGroup name="radio-buttons-group" >
            <ItemQuestao texto="Grave"></ItemQuestao>
            <ItemQuestao texto="Gravíssima"></ItemQuestao>
            <ItemQuestao texto="Leve"></ItemQuestao>
            <ItemQuestao texto="Média"></ItemQuestao>
        </RadioGroup>
      </CardContent>

      <CardContent>
        <Grid container justifyContent="space-between">
          <Button variant="contained" disabled>Anterior</Button>
         
          <Button variant="contained" color="error" >Encerrar o Simulado</Button>
          <Button variant="contained" onClick={teste}>{textoBtnResponder}</Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardSimulado;