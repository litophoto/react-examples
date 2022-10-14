import { Select, MenuItem } from "@mui/material";
import { useController, FieldPath, Control } from "react-hook-form";

type Option = {
  id: number | string;
  title: string;
  value: string;
};

type FORM_TYPE<T> = {
  name: FieldPath<T>;
  control: Control<T>;
  options: Option[];
};

const MUISelectController = <T,>({ name, control, options }: FORM_TYPE<T>) => {
  const { field } = useController({ name, control });

  return (
    <Select {...field}>
      {options.map((option) => (
        <MenuItem key={option.id} value={option.value}>
          {option.title}
        </MenuItem>
      ))}
    </Select>
  );
};

export default MUISelectController;
