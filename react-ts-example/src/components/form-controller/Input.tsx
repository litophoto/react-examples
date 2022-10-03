import { Control, FieldPath, useController } from "react-hook-form";
import { TextField } from "@mui/material";

type InputControlProps<FORM_TYPE> = {
  name: FieldPath<FORM_TYPE>; // FieldPathを使うことでControlに渡したジェネリクスの型を読み取ってタイプセーフになる
  control: Control<FORM_TYPE>;
};

const InputControl = <FORM_TYPE,>({
  name,
  control,
}: InputControlProps<FORM_TYPE>): JSX.Element => {
  const { field } = useController({
    name,
    control,
  });

  return <TextField {...field} />;
}

export default InputControl;
