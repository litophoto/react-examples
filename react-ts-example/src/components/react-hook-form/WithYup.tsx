// $ npm i yup react-hook-form @hookform/resolvers

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    age: yup.number().required(),
  })
  .required();

const WithYup = () => {
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input type="text" {...register("name")} />
      <input type="number" {...register("age")} />
      <input type="submit" />
    </form>
  );
};

export default WithYup