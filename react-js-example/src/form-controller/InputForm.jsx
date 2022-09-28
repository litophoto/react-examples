import { useController } from "react-hook-form";
import { TextField } from "@mui/material";

const InputForm = ({ name, control }) => {
  const { field } = useController({ name, control });
  return (
    <>
      <TextField {...field} />
    </>
  );
};

export default InputForm;
