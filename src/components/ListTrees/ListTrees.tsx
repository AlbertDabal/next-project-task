import { TreeActionType } from "@/core/types/TreeActionType";
import { TreeNode } from "@/core/types/TreeNode";
import { Button } from "@/core/ui/atoms/Button";
import { SortableTree } from "@/lib/dnd-kit/dnd-kit-tree/SortableTree";
import { FC } from "react";
import { v4 as uuidv4 } from "uuid";

export type ListTreesProps = {
  listTrees: TreeNode[];
  setListMenu: (callback: (prevState: TreeNode[][]) => TreeNode[][]) => void;
  id: number;
};

export const ListTrees: FC<ListTreesProps> = ({
  listTrees,
  setListMenu,
  id,
}) => {
  const setTreeItems = (
    newValue: TreeNode[] | ((prevNode: TreeNode[]) => TreeNode[])
  ): void => {
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

  const updateNestedItem = (
    tree: TreeNode[],
    id: string,
    updates: Partial<TreeNode["fields"]>,
    action: TreeActionType
  ): TreeNode[] => {
    return tree.map((node) => {
      if (node.id === id) {
        switch (action) {
          case TreeActionType.ADD_CHILD:
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

          case TreeActionType.UPDATE:
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

  const handleChangeDataItem = (
    id: string,
    updates: Partial<TreeNode["fields"]> | null,
    action: TreeActionType
  ) => {
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
    </>
  );
};
