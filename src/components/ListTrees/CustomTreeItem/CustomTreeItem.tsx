import { TreeActionType } from "@/core/types/TreeActionType";
import { TreeNode } from "@/core/types/TreeNode";
import React, { FC, ReactNode } from "react";

export type CustomTreeItemProps = {
  label?: string;
  url?: string;
  handle: ReactNode;
  onRemove?(): void;
  value: string;
  handleChangeDataItem: (
    id: string,
    updates: Partial<TreeNode["fields"]> | null,
    action: TreeActionType
  ) => void;
};

export const CustomTreeItem: FC<CustomTreeItemProps> = ({
  label,
  url,
  handle,
  onRemove,
  handleChangeDataItem,
  value,
}) => {
  const handleRemove = () => {
    if (onRemove) {
      onRemove();
    }
  };

  const handleEdit = () => {
    handleChangeDataItem(
      value,
      {
        isEdited: true,
      },
      TreeActionType.UPDATE
    );
  };

  const handleAddItem = () => {
    handleChangeDataItem(value, null, TreeActionType.ADD_CHILD);
  };

  return (
    <div className="flex w-full justify-between bg-white py-[20px] px-[24px] overflow-hidden border-[1px] border-[#dedede] ">
      <div className="flex gap-[4px] items-center ">
        {handle}
        <div className="flex flex-col gap-[6px]">
          <h1 className="text-[14px] font-semibold">{label}</h1>
          <p className="text-[14px] text-text-tertiary-600">{url}</p>
        </div>
      </div>
      <div className="rounded-md border-[1px] border-border-primary font-semibold text-text-secondary-700 text-[14px]">
        <button
          onClick={handleRemove}
          className="py-[10px] px-[16px] border-r-[1px] h-full  border-border-primary"
        >
          Usuń
        </button>
        <button
          onClick={handleEdit}
          className="py-[10px] px-[16px] border-r-[1px] h-full"
        >
          Edytuj
        </button>
        <button onClick={handleAddItem} className="py-[10px] px-[16px]">
          Dodaj pozycję menu
        </button>
      </div>
    </div>
  );
};
