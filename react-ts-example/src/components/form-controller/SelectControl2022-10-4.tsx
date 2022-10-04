import { useController, FieldPath, Control } from "react-hook-form";
import { Select, MenuItem } from "@mui/material";

type Option = {
  id: number;
  title: string;
  value: string;
};

type SelectControlType<T> = {
  name: FieldPath<T>;
  control: Control<T>;
  options: Option[];
};

const SelectControl = <T,>({
  name,
  control,
  options,
}: SelectControlType<T>) => {
  const { field } = useController({ name, control });

  return (
    <>
      <Select {...field}>
        {options.map((option) => (
          <MenuItem key={option.id} value={option.value}>
            {option.title}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default SelectControl;
