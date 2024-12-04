"use client";

import React, { CSSProperties } from "react";
import type { UniqueIdentifier } from "@dnd-kit/core";
import { AnimateLayoutChanges, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { TreeItem, Props as TreeItemProps } from "./TreeItem";
import { TreeNode } from "@/core/types/TreeNode";
import { TreeActionType } from "@/core/types/TreeActionType";

interface Props extends TreeItemProps {
  id: UniqueIdentifier;
  fields: Partial<TreeNode["fields"]>;
  handleChangeDataItem: (
    id: string,
    updates: Partial<TreeNode["fields"] | null>,
    action: TreeActionType
  ) => void;
}

const animateLayoutChanges: AnimateLayoutChanges = ({
  isSorting,
  wasDragging,
}) => (isSorting || wasDragging ? false : true);

export function SortableTreeItem({ id, fields, depth, ...props }: Props) {
  const {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    treeItem,
    attributes,
    isDragging,
    isSorting,
    listeners,
    setDraggableNodeRef,
    setDroppableNodeRef,
    transform,
    transition,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    handleChangeDataItem,
  } = useSortable({
    id,
    animateLayoutChanges,
  });
  const style: CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <TreeItem
      fields={fields}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      treeItem={treeItem}
      ref={setDraggableNodeRef}
      wrapperRef={setDroppableNodeRef}
      style={style}
      depth={depth}
      ghost={isDragging}
      disableInteraction={isSorting}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      handleChangeDataItem={handleChangeDataItem}
      handleProps={{
        ...attributes,
        ...listeners,
      }}
      {...props}
    />
  );
}
