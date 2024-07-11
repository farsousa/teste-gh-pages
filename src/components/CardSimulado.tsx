import React, { useEffect, useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Card, CardContent, Grid, Button, Divider, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import TurnRightIcon from '@mui/icons-material/TurnRight';
import TurnLeftIcon from '@mui/icons-material/TurnLeft';
import ItemQuestao from './ItemQuestao';



const QuizCard: React.FC = () => {
  const DefaultColor: string = "gray"
  // Estado para controle do tempo
  const [timeLeft, setTimeLeft] = useState<number>(2400); // 5 minutos em segundos
  const [timerActive, setTimerActive] = useState<boolean>(false);

  // Estados para controle das respostas
  const [answered, setAnswered] = useState<boolean>(false);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [wrongAnswers, setWrongAnswers] = useState<number>(0);

  // Efeito para controlar o temporizador
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(interval!);
      setTimerActive(false);
      // Aqui você pode adicionar lógica para lidar com o término do tempo, se necessário
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive, timeLeft]);

  // Função para lidar com a seleção de uma resposta
  const handleAnswer = (isCorrect: boolean) => {
    if (!answered) {
      setAnswered(true);
      if (isCorrect) {
        setCorrectAnswers((prevCount) => prevCount + 1);
      } else {
        setWrongAnswers((prevCount) => prevCount + 1);
      }
    }
  };

  // Função para navegar para a próxima pergunta
  const goToNextQuestion = () => {
    // Lógica para ir para a próxima pergunta
    setAnswered(false); // Reset da flag de resposta
  };

  // Componente do Card de Pergunta    
  return (
    <Card variant="outlined" sx={{ minWidth: 400, maxWidth: 600, margin: 'auto', marginTop: 20 }}>
      {/* Cabeçalho com temporizador e contagem de respostas */}
      <CardContent>
          <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <Typography variant="body2" color="textSecondary">Acertos: {correctAnswers} | Erros: {wrongAnswers}</Typography>
            <Typography variant="h6" sx={{fontWeight:'bold', fontSize:15}}>Tempo Restante: {Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}</Typography>
            
          </Box>
          {/* Adicione outros elementos necessários no cabeçalho aqui */}
        
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
          <Button variant="contained" onClick={goToNextQuestion} disabled={!answered}>Próxima</Button>
          <Button variant="contained" color="error">Encerrar o Simulado</Button>
          <Button variant="contained" onClick={() => handleAnswer(true)}>Responder</Button>
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