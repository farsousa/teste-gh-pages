import { FormControlLabel, Radio } from "@mui/material";

  type TextoItem = {
    texto: string | undefined
  }
  
  const ItemQuestao = ({texto}:TextoItem)=>{
    return(
        <FormControlLabel control={<Radio/>} label={texto} value={texto} />
    );
   };

   export default ItemQuestao;