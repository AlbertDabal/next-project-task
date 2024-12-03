import React, { useMemo } from "react";
import { CustomTreeItem } from "./CustomTreeItem";
import { ItemEditForm } from "./FormField/ItemEditForm";

export const CustomTreeWrapper = ({
  handle,
  onRemove,
  value,
  handleChangeDataItem,
  fields,
}) => {
  if (!fields) return null;

  const { label, url, isEdited } = fields;

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
