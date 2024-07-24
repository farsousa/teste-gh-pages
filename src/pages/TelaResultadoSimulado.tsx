import { useLocation } from "react-router-dom";
import GraficoPizza from "../components/GraficoPizza";
import NavBar from "../components/NavBar";
import { Box, Typography } from "@mui/material";
const logo = require('../img/pix.png')



const TelaResultadoSimulado = () =>{
    const chaveAleatoria = "00020126580014br.gov.bcb.pix0136309479f7-2ca5-4089-8516-ef8b1250622e52040000530398654045.005802BR5925Carlos Eduardo Moreira Bo6009Sao Paulo62070503***6304CEF9"
const copiaTexto = ()=>{
    navigator.clipboard.writeText(chaveAleatoria).then(()=>{
        console.log('Texto copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
      });
}
const location = useLocation();
  const {certas,erradas} = location.state
  console.log("cetas erradas"+(certas/(erradas+certas)))
    return (
        <Box className="body" sx={{width:"100vw", height:"100vh", backgroundColor: "#f3f4f7", pt:12, textAlign:"center"}}>
            <NavBar/>
            <Box className="main" sx={{width:{ sm:"80%", md:"60%"}, height:550, backgroundColor: "white", margin:"auto", borderRadius:5, boxShadow:24, pt:5, display: "flex", flexDirection:"column", alignItems: "center"}}>
                <Typography variant="h6" component="div"> {(certas/(erradas+certas) > 0.7) ? `Parabéns, você passou! Acertou ${certas/(erradas+certas)*100}%` : `Infelizmente você reprovou - só acertou ${certas/(erradas+certas)*100}%`} </Typography>

                <Box>
                    <GraficoPizza certas={certas} erradas={erradas}/>
                </Box>
                <Typography variant="h6" component="div" sx={{fontWeight:"bold", fontSize:15}}>Se o site te ajudou, faça uma doação e nos ajude a melhorar a plataforma. </Typography>
                <Typography variant="subtitle1" component="div">Pix QrCode: </Typography>
                <img src={logo} style={{width:150}}alt="qrcode do pix" />
                <Typography variant="subtitle1" >Clique para copiar: </Typography>
                <Typography sx={{fontSize:10, width:300, height:20, overflow:"hidden", whiteSpace: "nowrap", 
        textOverflow: "ellipsis", cursor:"pointer",  boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius:1, transition: 'background-color 0.3s ease, color 0.3s ease', '&:hover': { // Estilo para quando o mouse passa sobre o componente
          backgroundColor: "gray", // Muda a cor de fundo
          color: 'white', // Muda a cor do texto
        },pl:1,pr:1}} variant="subtitle1"  onClick={copiaTexto}>Chave aleatoria:00020126580014br.gov.bcb.pix0136309479f7-2ca5-4089-8516-ef8b1250622e52040000530398654045.005802BR5925Carlos Eduardo Moreira Bo6009Sao Paulo62070503***6304CEF9 </Typography>

            </Box>
        </Box>
    );
}
export default TelaResultadoSimulado;