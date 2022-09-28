import { Control, FieldPath, useController } from "react-hook-form";
import { Select, MenuItem } from "@mui/material";

type Option = {
  value: string | number;
};

type SelectContorlProps<FORM_TYPE> = {
  name: FieldPath<FORM_TYPE>;
  control: Control<FORM_TYPE>;
  options: Option[];
};

const SelectContorl = <FORM_TYPE,>({
  name,
  control,
  options,
}: SelectContorlProps<FORM_TYPE>) => {
  const { field } = useController({ name, control });

  return (
    <Select {...field}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.value}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectContorl;
