import { useForm } from "react-hook-form";
import InputForm from "./InputForm";

const FormControll = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      input: '',
    }
  })
  return (
    <InputForm name="input" control={control}></InputForm>
  )
}

export default FormControll