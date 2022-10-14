import { TextField } from "@mui/material";
import { useState } from "react";
import { useController, Control, FieldPath } from "react-hook-form";

type FORM_TYPE<T> = {
  name: FieldPath<T>;
  control: Control<T>;
};

const MUITextFieldController = <T,>({ name, control }: FORM_TYPE<T>) => {
  const { field } = useController({ name, control });

  return <TextField {...field} />;
};

export default MUITextFieldController
