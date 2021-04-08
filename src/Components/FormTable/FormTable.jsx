import React from "react";
import { useForm } from "react-hook-form";

export default function FormTable() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="example" defaultValue="test" {...register('text')} />
      
      <input name="exampleRequired" {...register('name', { required: true })} />
      
      <input type="submit" />
    </form>
  );
}