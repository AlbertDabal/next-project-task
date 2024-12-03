import { Button } from "@/core/ui/atoms/Button";
import { SortableTree } from "@/lib/dnd-kit/dnd-kit-tree/SortableTree";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ListTrees = ({ listTrees, setListMenu, listMenu, id }) => {
  const setTreeItems = (newValue) => {
    setListMenu((prevState) =>
      prevState.map((item, i) =>
        i === id
          ? typeof newValue === "function"
            ? newValue(item)
            : newValue
          : item
      )
    );
  };

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
    const id = uuidv4();

    setTreeItems((prevItems) => [
      ...prevItems,
      {
        id: id,
        fields: { label: "", url: "", isEdited: true },
        children: [],
      },
    ]);
  };

  const hasOnlyEmptyRootNode =
    listTrees.length === 1 &&
    listTrees[0].children.length === 0 &&
    listTrees[0].fields.label === "";

  return (
    <>
      <div className="rounded-md border-[1px] border-border-primary overflow-hidden">
        <SortableTree
          removable
          items={listTrees}
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
