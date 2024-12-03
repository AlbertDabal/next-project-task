import React, { useMemo } from "react";
import { CustomTreeItem } from "./CustomTreeItem";
import { ItemEditForm } from "@/components/ListItems/ItemEditForm";

export const CustomTreeWrapper = ({
  handle,
  onRemove,
  dataItems,
  value,
  handleChangeDataItem,
}) => {
  const foundItem = useMemo(
    () => dataItems.find((item) => item.id === value),
    [dataItems]
  );

  const { label, url } = foundItem;

  if (!foundItem.isEdited) {
    return (
      <CustomTreeItem
        handle={handle}
        onRemove={onRemove}
        handleChangeDataItem={handleChangeDataItem}
        value={value}
      />
    );
  } else {
    return (
      <ItemEditForm
        value={value}
        label={label}
        url={url}
        handleChangeDataItem={handleChangeDataItem}
      />
    );
  }
};
