import { useLocation, useNavigate } from "react-router-dom";
import GraficoPizza from "../components/GraficoPizza";
import NavBar from "../components/NavBar";
import { Box, Button, Snackbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import HomeIcon from '@mui/icons-material/Home';



const logo = require('../img/pix.png')

const TelaResultadoSimulado = () =>{
    const chaveAleatoria = "00020126580014br.gov.bcb.pix0136309479f7-2ca5-4089-8516-ef8b1250622e52040000530398654045.005802BR5925Carlos Eduardo Moreira Bo6009Sao Paulo62070503***6304CEF9"
const copiaTexto = ()=>{
    navigator.clipboard.writeText(chaveAleatoria).then(()=>{
        console.log('Texto copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
      });
      handleClickOpenSnack()
}
const location = useLocation();
const erradas = location.state?.erradas ?? 0;
const certas = location.state?.certas ?? 0;
const controlador = location.state?.controlador ?? 0;
const navegate = useNavigate()

useEffect(()=>{
    if(!controlador){
        console.log("Entrou no controlador")
        navegate("/pagina-inicial")
    }

},[controlador,navegate])

const [openSnack, setOpenSnack] = useState(false);
const handleCloseSnack = () => {
    setOpenSnack(false);
};
const handleClickOpenSnack = () => {
    setOpenSnack(true);
};
const handleNavegacao = () =>{

navegate("/pagina-principal")
}
    return (
        <Box className="body" sx={{width:"100vw", height:"100vh", backgroundColor: "#f3f4f7", pt:12, textAlign:"center"}}>
            <Snackbar sx={{
        '& .MuiSnackbarContent-root': {
          backgroundColor: '#fec5bb', // Cor de fundo desejada
          color: 'black', // Cor do texto desejada
          fontWeight:"Bold"
          },
          
        }}
        open={openSnack}
        autoHideDuration={1700}
        onClose={handleCloseSnack}
        message="Pix Copiado Com Sucesso!"
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
            <NavBar/>
            <Button variant="contained" onClick={handleNavegacao} sx={{verticalAlign:"middle",backgroundColor:"#2e2f2f", mb:3, width:90}}> <HomeIcon sx={{pr:"2px"}}/> Início</Button>
            <Box className="main" sx={{width:{ sm:"80%", md:"60%",xl:"40%"}, height:550, backgroundColor: "white", margin:"auto", borderRadius:5, boxShadow:24, pt:5, display: "flex", flexDirection:"column", alignItems: "center"}}>
                <Typography variant="h6" component="div"> {(certas/(erradas+certas) > 0.7) ? `Parabéns, você passou! Acertou ${Math.floor(certas/(erradas+certas)*100)}%` : `Infelizmente você reprovou - só acertou ${Math.floor(certas/(erradas+certas)*100)}%`} </Typography>

                <Box>
                    <GraficoPizza certas={certas} erradas={erradas}/>
                </Box>
                <Typography variant="h6" component="div" sx={{fontWeight:"bold", fontSize:15}}>Se o site te ajudou, faça uma doação e nos ajude a melhorar a plataforma. </Typography>
                <Typography variant="subtitle1" component="div">Pix QrCode: </Typography>
                <img src={logo} style={{width:150}}alt="qrcode do pix" />
                <Typography variant="subtitle1" >Clique para copiar: </Typography>
                <Typography 
                    sx={{
                        fontSize:20, 
                        width:300, 
                        height:50,
                        textAlign:"center", 
                        overflow:"hidden", 
                        whiteSpace: "nowrap", 
                        textOverflow: "ellipsis", 
                        cursor:"pointer",  
                        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
                        borderRadius:1, 
                        transition: 'background-color 0.3s ease, color 0.3s ease', 
                        '&:hover': { // Estilo para quando o mouse passa sobre o componente
                            backgroundColor: "gray", // Muda a cor de fundo
                            color: 'white', // Muda a cor do texto
                        },
                        pl:1,  
                        pr:1
                        }} variant="subtitle1"  onClick={copiaTexto}>Chave aleatoria:00020126580014br.gov.bcb.pix0136309479f7-2ca5-4089-8516-ef8b1250622e52040000530398654045.005802BR5925Carlos Eduardo Moreira Bo6009Sao Paulo62070503***6304CEF9 </Typography>

            </Box>
        </Box>
    );
}
export default TelaResultadoSimulado;