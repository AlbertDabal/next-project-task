import React from "react";
import { CustomTreeItem } from "./CustomTreeItem";
import { ItemEditForm } from "@/components/ListItems/ItemEditForm";

export const CustomTreeWrapper = ({ handle, onRemove, dataItems, value }) => {
  const foundItem = dataItems.find((item) => item.id === value);

  console.log("dataItems, value", dataItems, value, foundItem);

  if (!foundItem.isEdited) {
    return <CustomTreeItem handle={handle} onRemove={onRemove} />;
  } else {
    return <ItemEditForm label={label} url={url} />;
  }
};
