import {
  Alert,
  FormControlLabel,
  Radio,
  AlertColor,
  Box,
  styled,
} from "@mui/material";

type Item = {
  texto: string | undefined;
  tipoAlerta?: AlertColor | undefined;
};
const CustomAlert = styled(Alert)(({ theme }) => ({
  display: "flex",
  flexDirection: "row-reverse", // Move o ícone para a direita
  alignItems: "center",
  justifyContent: "space-between",
}));
const ItemQuestao = ({ texto, tipoAlerta }: Item) => {
  return (
    <>
      {tipoAlerta === undefined ? (
        <FormControlLabel
          control={<Radio />}
          label={texto}
          value={texto}
          sx={{ h: 20 }}
        />
      ) : (
        <Box sx={{ width: "100%", mb: 0.5 }}>
          <CustomAlert
            severity={tipoAlerta}
            sx={{
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
              padding: 0,
            }}
          >
            <FormControlLabel
              control={<Radio />}
              label={texto}
              value={texto}
              sx={{
                height: 20,
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                flex: 1,
              }}
            />
          </CustomAlert>
        </Box>
      )}
    </>
  );
};

export default ItemQuestao;
