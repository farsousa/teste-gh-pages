import { FormControlLabel, Radio } from "@mui/material";

  type TextoItem = {
    texto: string
  }
  
  const ItemQuestao = ({texto}:TextoItem)=>{
    return(
        <FormControlLabel control={<Radio/>} label={texto} value={texto} />
    );
   };

   export default ItemQuestao;