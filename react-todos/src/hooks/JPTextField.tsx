import { TextField } from "@mui/material";

const JPTextField = () => {
  const [typing, setTyping] = useState
  
  return (
    <TextField
      value={newTitle}
      onChange={handleChangeTitle}
      onKeyDown={handleDoneEdit}
      onCompositionStart={() => setTyping(true)}
      onCompositionEnd={() => setTyping(false)}
      size="small"
      variant="standard"
      fullWidth
    />
  );
};
