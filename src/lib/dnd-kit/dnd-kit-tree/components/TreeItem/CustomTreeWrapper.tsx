import React, { useMemo } from "react";
import { CustomTreeItem } from "./CustomTreeItem";
import { ItemEditForm } from "@/components/ListItems/ItemEditForm";

export const CustomTreeWrapper = ({
  handle,
  onRemove,
  value,
  handleChangeDataItem,
  fields,
}) => {
  // const foundItem = useMemo(
  //   () => dataItems.find((item) => item.id === value),
  //   [dataItems]
  // );

  if (!fields) return null;

  const { label, url, isEdited } = fields;

  console.log("fields", fields);

  if (!isEdited) {
    return (
      <CustomTreeItem
        label={label}
        url={url}
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
        onRemove={onRemove}
        handleChangeDataItem={handleChangeDataItem}
      />
    );
  }
};
