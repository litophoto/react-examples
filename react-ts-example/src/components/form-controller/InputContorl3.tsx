import { useController, Control, FieldPath } from "react-hook-form";
import { TextField } from "@mui/material";

type InputControlProps<FORM_TYPE> = {
  name: FieldPath<FORM_TYPE>;
  control: Control<FORM_TYPE>;
};

const InputControl = <FORM_TYPE,>({ name, control }: InputControlProps<FORM_TYPE>) => {
  const { field } = useController({ name, control });

  return <TextField {...field} />
};

export default InputControl