'use client'
import { SubmitHandler, useForm } from "react-hook-form";


type Inputs = {
  example: string;
  exampleRequired:string;
}
export default function Home() {
  const {register, handleSubmit, formState: {errors}, watch} = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} className="border-2 border-gray-300 rounded-md p-2" />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} className="border-2 border-gray-300 rounded-md p-2" />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" className="bg-blue-500 text-white rounded-md p-2" />
    </form>
  );
}
