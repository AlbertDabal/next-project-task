"use client";

import { IconTrash } from "@/assets/icons/IconTrash";
import { Button } from "@/core/ui/atoms/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { FormField } from "./FormField";

export type FormFieldProps = {
  name: string;
  link: string;
};

export const ItemEditForm = ({ label, url }) => {
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
    <div className="flex items-start gap-[16px] w-full py-[20px] px-[24px] bg-white">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <FormField name="label" label="Nazwa" placeholder="np. Promocje" />
          <FormField
            name="url"
            label="Link"
            placeholder="Wklej lub wyszukaj"
            search
          />
          <div className="flex gap-[8px] mt-[20px]">
            <Button onClick={handleCancel}>Anuluj</Button>
            <Button variant="secondary" type="submit">
              Dodaj
            </Button>
          </div>
        </form>
      </FormProvider>

      <button>
        <IconTrash />
      </button>
    </div>
  );
};
