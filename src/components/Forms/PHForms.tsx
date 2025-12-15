import React from "react";
import {
  FieldValue,
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormProps = {
  children: React.ReactNode;
};

const PHForms = ({ children }: TFormProps) => {
  const methods = useForm();
  const { handleSubmit } = methods;
  const submit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default PHForms;
