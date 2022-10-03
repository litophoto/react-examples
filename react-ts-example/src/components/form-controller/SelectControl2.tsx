import { useController, FieldPath, Control } from "react-hook-form";
import { Select, MenuItem } from "@mui/material";

type Option = {
  value: string | number;
  text: string;
};

type SelectControlProps<T> = {
  name: FieldPath<T>;
  control: Control<T>;
  options: Option[];
};

const SelectControl = <T,>({
  name,
  control,
  options,
}: SelectControlProps<T>) => {
  const { field } = useController({ name, control });

  return (
    <Select {...field}>
      {options.map((option) => (
        <MenuItem key={option.value + option.text} value={option.value}>
          {option.text}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectControl
