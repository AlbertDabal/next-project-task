import { FC, ReactNode } from "react";
import { CustomTreeItem } from "./CustomTreeItem";
import { ItemEditForm } from "./FormField/ItemEditForm";
import { TreeActionType } from "@/core/types/TreeActionType";
import { TreeNode } from "@/core/types/TreeNode";

export type CustomTreeWrapperProps = {
  handle: ReactNode;
  onRemove?(): void;
  value: string;
  handleChangeDataItem: (
    id: string,
    updates: Partial<TreeNode["fields"]> | null,
    action: TreeActionType
  ) => void;
  fields: Partial<TreeNode["fields"]>;
};

export const CustomTreeWrapper: FC<CustomTreeWrapperProps> = ({
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
