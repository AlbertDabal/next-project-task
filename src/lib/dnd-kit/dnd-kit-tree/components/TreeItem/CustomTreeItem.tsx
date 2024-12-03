import React from "react";
import { v4 as uuidv4 } from "uuid";

export const CustomTreeItem = ({
  label = "TEST",
  url = "test123",
  handle,
  onRemove,
  handleChangeDataItem,
  value,
}) => {
  const handleRemove = () => {
    onRemove();
  };

  const handleEdit = () => {
    handleChangeDataItem(value, {
      isEdited: true,
    });
  };

  const handleAddItem = () => {
    const newItem = {
      id: uuidv4(),
      fields: { label: "", url: "", isEdited: true },
      children: [],
    };
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
