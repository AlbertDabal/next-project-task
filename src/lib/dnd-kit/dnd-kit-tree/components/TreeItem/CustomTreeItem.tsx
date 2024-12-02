import React from "react";

export const CustomTreeItem = ({
  label = "TEST",
  url = "test123",
  handle,
  onRemove,
}) => {
  const handleRemove = () => {};

  const handleEdit = () => {};

  const handleAddItem = () => {};

  return (
    <div className="flex w-full justify-between bg-white py-[20px] px-[24px] overflow-hidden border-[1px] border-[#dedede] border-r-0">
      <div className="flex gap-[4px] items-center ">
        {handle}
        <div className="flex flex-col gap-[6px]">
          <h1 className="text-[14px] font-semibold">{label}</h1>
          <p className="text-[14px] text-text-tertiary-600">{url}</p>
        </div>
      </div>
      <div className="rounded-md border-[1px] border-border-primary font-semibold text-text-secondary-700 text-[14px]">
        <button
          onClick={onRemove}
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