import { Checkbox, FormControlLabel } from "@mui/material";

  type TextoItem = {
    texto: string
  }
  
  const ItemQuestao = ({texto}:TextoItem)=>{
    return(
        <FormControlLabel control={<Checkbox/>} label={texto} />
    );
   };

   export default ItemQuestao;