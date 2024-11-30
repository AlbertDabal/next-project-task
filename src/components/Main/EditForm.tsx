"use client";

import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormField } from "./FormField";
import { IconTrash } from "@/assets/icons/IconTrash";

export type FormFieldProps = {
  name: string;
  link: string;
};

export const EditForm = () => {
  // const [items, setItems] = useState([]);

  const ItemSchema = z.object({
    label: z.string().min(1, "Required label"),
    url: z.string().optional(),
  });

  type ItemSchemaType = z.infer<typeof ItemSchema>;

  const methods = useForm<ItemSchemaType>({
    resolver: zodResolver(ItemSchema),
    defaultValues: {
      label: "",
      url: "",
    },
  });

  const { reset, handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log(data);

    reset();
  };

  const handleCancel = () => {
    reset();
  };

  return (
    <div className="flex items-start gap-[16px] w-full">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <FormField name="label" label="Nazwa" placeholder="np. Promocje" />
          <FormField
            name="url"
            label="Link"
            placeholder="Wklej lub wyszukaj"
            search
          />
          <div className="flex gap-[8px]">
            <button onClick={handleCancel}>Anuluj</button>
            <button type="submit">Dodaj</button>
          </div>
        </form>
      </FormProvider>

      <button>
        <IconTrash />
      </button>
    </div>
  );
};
