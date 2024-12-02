"use client";

import React, { useState } from "react";
import {
  SimpleTreeItemWrapper,
  SortableTree,
  TreeItemComponentProps,
  TreeItems,
} from "dnd-kit-sortable-tree";
import { ItemInfo } from "../ListItems/ItemInfo";

export const DndTest = () => {
  const [items, setItems] = useState(initialViableMinimalData);
  return (
    <SortableTree
      items={items}
      onItemsChanged={setItems}
      TreeItemComponent={TreeItem}
    />
  );
};

type MinimalTreeItemData = {
  value: string;
};
/*
 * Here's the component that will render a single row of your tree
 */
const TreeItem = React.forwardRef<
  HTMLDivElement,
  TreeItemComponentProps<MinimalTreeItemData>
>((props, ref) => {
  const [sample, setSample] = useState("");
  return (
    <SimpleTreeItemWrapper {...props} ref={ref}>
      <ItemInfo />
    </SimpleTreeItemWrapper>
  );
});
/*
 * Configure the tree data.
 */
const initialViableMinimalData: TreeItems<MinimalTreeItemData> = [
  {
    id: 1,
    value: "Jane",
    children: [
      { id: 4, value: "John", children: [{ id: 7, value: "Eugene" }] },
      { id: 5, value: "Sally" },
    ],
  },
  { id: 2, value: "Fred", children: [{ id: 6, value: "Eugene" }] },
  { id: 3, value: "Helen" },
];
