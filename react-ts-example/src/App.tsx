import { useDefaultForm } from "./hooks/defaultHooks";
import InputControl from "./components/InputControl";
import SelectControl from "./components/SelectControl";
type Form = {
  username: string;
  sex: string;
};

const App = () => {
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
        <InputControl name="username" control={control} />
        <SelectControl
          name="sex"
          control={control}
          options={[{ value: "female" }, { value: "male" }, { value: "other" }]}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default App;
