import { useController, Control, FieldPath } from "react-hook-form";
import TextField from "@mui/material/TextField";

type FormType<T> = {
  name: FieldPath<T>;
  control: Control<T>;
};

const InputControl = <T,>({ name, control }: FormType<T>) => {
  const { field } = useController({ name, control });

  return <TextField {...field} />;
};

export default InputControl