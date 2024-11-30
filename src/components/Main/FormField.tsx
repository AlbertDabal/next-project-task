import { InputText } from "@/core/ui/atoms/InputText";
import React, { FC } from "react";
import { FieldError, useFormContext } from "react-hook-form";

export type FormFieldProps = {
  name: string;
  label: string;
  placeholder?: string;
  search?: boolean;
};

export const FormField: FC<FormFieldProps> = ({
  name,
  label,
  placeholder,
  search,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name] as FieldError | undefined;

  return (
    <div className="flex flex-col gap-[6px] w-full">
      <p className="text-[14px] font-normal font-inter">{label}</p>
      <InputText
        search={search}
        {...register(name)}
        placeholder={placeholder}
      />
      {error?.message && <p>{error.message}</p>}
    </div>
  );
};
