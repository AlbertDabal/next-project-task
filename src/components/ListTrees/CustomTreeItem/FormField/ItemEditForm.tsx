"use client";

import { IconTrash } from "@/assets/icons/IconTrash";
import { TreeActionType } from "@/core/types/TreeActionType";
import { TreeNode } from "@/core/types/TreeNode";
import { Button } from "@/core/ui/atoms/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { FormField } from "./FormField";

export type ItemEditFormProps = {
  label?: string;
  url?: string;
  onRemove?(): void;
  value: string;
  handleChangeDataItem: (
    id: string,
    updates: Partial<TreeNode["fields"]> | null,
    action: TreeActionType
  ) => void;
};

export const ItemEditForm: FC<ItemEditFormProps> = ({
  label,
  url,
  onRemove,
  value,
  handleChangeDataItem,
}) => {
  const ItemSchema = z.object({
    label: z.string().min(1, "Required label"),
    url: z.string().optional(),
  });

  type ItemSchemaType = z.infer<typeof ItemSchema>;

  const methods = useForm<ItemSchemaType>({
    resolver: zodResolver(ItemSchema),
    defaultValues: {
      label: label,
      url: url,
    },
  });

  const { reset, handleSubmit } = methods;

  const onSubmit = (data: ItemSchemaType) => {
    handleChangeDataItem(
      value,
      {
        isEdited: false,
        ...data,
      },
      TreeActionType.UPDATE
    );

    reset();
  };

  const handleCancel = () => {
    handleChangeDataItem(
      value,
      {
        isEdited: false,
      },
      TreeActionType.UPDATE
    );

    if (label === "") {
      if (onRemove) {
        onRemove();
      }
    }

    reset();
  };

  const handleRemove = () => {
    if (onRemove) {
      onRemove();
    }
  };

  return (
    <div className="flex items-start gap-[16px] w-full py-[20px] px-[24px] bg-white rounded-md border-[1px] border-border-primary mx-[24px] my-[16px]">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="flex flex-col gap-[8px]">
            <FormField name="label" label="Nazwa" placeholder="np. Promocje" />
            <FormField
              name="url"
              label="Link"
              placeholder="Wklej lub wyszukaj"
              search
            />
          </div>
          <div className="flex gap-[8px] mt-[20px]">
            <Button onClick={handleCancel}>Anuluj</Button>
            <Button variant="secondary" type="submit">
              Dodaj
            </Button>
          </div>
        </form>
      </FormProvider>

      <button onClick={handleRemove}>
        <IconTrash />
      </button>
    </div>
  );
};
