import { TreeItems } from "@/lib/dnd-kit/dnd-kit-tree/types";
import React, { useEffect, useState } from "react";
import { EmptyList } from "./CustomTreeItem/EmptyList";
import { SortableTree } from "@/lib/dnd-kit/dnd-kit-tree/SortableTree";
import { Button } from "@/core/ui/atoms/Button";
import { v4 as uuidv4 } from "uuid";

export const ListTrees = ({ listTrees, setListMenu, listMenu }) => {
  const [treeItems, setTreeItems] = useState(listTrees);

  useEffect(() => {
    setListMenu((prevItems) =>
      prevItems.map((item) =>
        item.id === treeItems.id ? { ...item, ...treeItems } : item
      )
    );
  }, [treeItems]);

  const updateNestedItem = (tree, id, updates, action) => {
    return tree.map((node) => {
      if (node.id === id) {
        switch (action) {
          case "addChild":
            return {
              ...node,
              children: [
                ...(node.children || []),
                {
                  id: uuidv4(),
                  fields: { label: "", url: "", isEdited: true },
                  children: [],
                },
              ],
            };

          case "update":
            return {
              ...node,
              fields: { ...node.fields, ...updates },
            };

          default:
            return node;
        }
      }

      if (node.children) {
        return {
          ...node,
          children: updateNestedItem(node.children, id, updates, action),
        };
      }

      return node;
    });
  };

  const handleChangeDataItem = (id, updates, action) => {
    console.log("action", action);

    setTreeItems((prevItems) =>
      updateNestedItem(
        prevItems,
        id,
        {
          ...updates,
        },
        action
      )
    );
  };

  const handleAddItem = () => {
    setTreeItems((prevItems) => [
      ...prevItems,
      {
        id: uuidv4(),
        fields: { label: "", url: "", isEdited: true },
        children: [],
      },
    ]);
  };

  const hasOnlyEmptyRootNode =
    treeItems.length === 1 &&
    treeItems[0].children.length === 0 &&
    treeItems[0].fields.label === "";

  return (
    <>
      <div className="rounded-md border-[1px] border-border-primary overflow-hidden">
        <SortableTree
          removable
          items={treeItems}
          setItems={setTreeItems}
          handleChangeDataItem={handleChangeDataItem}
        />

        {!hasOnlyEmptyRootNode && (
          <div className="py-[20px] px-[24px]">
            <Button onClick={handleAddItem}>Dodaj pozycję menu</Button>
          </div>
        )}
      </div>
      {/* <pre>{JSON.stringify(treeItems, null, 2)}</pre> */}
    </>
  );
};
