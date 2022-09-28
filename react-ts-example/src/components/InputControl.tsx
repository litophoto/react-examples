import { Control, FieldPath, useController } from "react-hook-form";
import { TextField } from "@mui/material";

type InputControlProps<T> = {
  name: FieldPath<T>;
  control: Control<T>;
};

const InputControl = <T,>({ name, control }: InputControlProps<T>) => {
  const { field } = useController({ name, control });

  return <TextField {...field} />;
};

export default InputControl;
