import { useForm, UseFormProps, UseFormReturn } from "react-hook-form";

const useDefaultForm = <T,>(
  props: UseFormProps<T> & {
    defaultValues: T;
  }
): UseFormReturn<T> => {
  return useForm(props);
};

export { useDefaultForm }