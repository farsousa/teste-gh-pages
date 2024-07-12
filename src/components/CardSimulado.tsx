import React, { useEffect, useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Card, CardContent, Grid, Button, Divider, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import TurnRightIcon from '@mui/icons-material/TurnRight';
import TurnLeftIcon from '@mui/icons-material/TurnLeft';
import ItemQuestao from './ItemQuestao';



const QuizCard: React.FC = () => {

  const [textoBtnResponder, setTextoBtnResponder] = useState<string>("Responder")
  const [timeLeft, setTimeLeft] = useState<number>(2400);
  

  function teste(){
    if(textoBtnResponder ==="Responder")
      setTextoBtnResponder("Próxima")
    else 
    setTextoBtnResponder("Responder")
  }
   
  return (
    <Card variant="outlined" sx={{ minWidth: 400, maxWidth: 600, margin: 'auto', marginTop: 20 }}>
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
        <FormGroup>
            <ItemQuestao texto="Grave"></ItemQuestao>
            <ItemQuestao texto="Gravíssima"></ItemQuestao>
            <ItemQuestao texto="Leve"></ItemQuestao>
            <ItemQuestao texto="Média"></ItemQuestao>
        </FormGroup>
      </CardContent>

      {/* Rodapé com botões de navegação e responder */}
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

const CardSimulado: React.FC = () => {
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
      <AppBar sx={{ backgroundColor: "#c5c6c7", height: 80, pb: 3, pt: 0.5 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Typography variant="h5" component="div" sx={{ fontWeight: 900, fontSize: 40, color: "black", display: 'flex', alignItems: 'center' }}>
            <TurnRightIcon sx={{ fontSize: 60 }} />
            Questões Detran
            <TurnLeftIcon sx={{ fontSize: 60 }} />
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Renderizando o QuizCard */}
      <QuizCard />
    </Box>
  );
};

export default CardSimulado;