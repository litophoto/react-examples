import { useDefaultForm } from "../../hooks/defaultHooks";
import MUITextFieldController from "./MUITextFieldController";
import SelectControl from "./MUISelectController";
type Form = {
  username: string;
  sex: string;
};

const Controled = () => {
  const { control, handleSubmit } = useDefaultForm<Form>({
    defaultValues: {
      username: "",
      sex: "",
    },
  });
  const onSubmit = (data: Form) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <MUITextFieldController name="username" control={control} />
        <SelectControl
          name="sex"
          control={control}
          options={[
            { id: 1, title: "Female", value: "female" },
            { id: 2, title: "Male", value: "male" },
            { id: 3, title: "Other", value: "other" },
          ]}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default Controled;
