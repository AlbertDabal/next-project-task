"use client";

import { MainSection } from "@/components/DragAndDrop/MainSection";
import { ItemInfo } from "@/components/ListItems/ItemInfo";
import { ListItem } from "@/components/ListItems/ListItems";
import { Button } from "@/core/ui/atoms/Button";
import { SortableTree } from "@/lib/dnd-kit/dnd-kit-tree/SortableTree";
import { TreeItems } from "@/lib/dnd-kit/dnd-kit-tree/types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const initialItems: TreeItems = [
    {
      id: "10552010-9c00-4dce-8188-af8eec4962be",
      fields: {
        label: "Promocje",
        url: "https://rc32141.redcart.pl/promocje",
        isEdited: false,
      },

      children: [
        {
          id: "3aaa8658-6843-48e7-a885-b07b82df21d9",
          fields: {
            label: "Ostatnie 7 dni",
            url: "https://rc32141.redcart.pl/7dni",
            isEdited: false,
          },
          children: [
            {
              id: "5e5223b0-bf11-4068-8ba4-a0fa4e1fcabd",
              fields: {
                label: "Najlepsze",
                url: "https://rc32141.redcart.pl/najlepsze",
                isEdited: false,
              },
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: "a596e03c-a9c7-47d2-92bf-502937bec36b",
      fields: {
        label: "Diamenty forbesa",
        url: "https://www.forbes.pl/diamenty",
        isEdited: false,
      },
      children: [],
    },
  ];

  const [treeItems, setTreeItems] = useState(initialItems);

  const updateNestedItem = (tree, id, updates) => {
    return tree.map((node) => {
      if (node.id === id) {
        return { ...node, fields: { ...node.fields, ...updates } };
      }
      if (node.children) {
        return {
          ...node,
          children: updateNestedItem(node.children, id, updates),
        };
      }
      return node;
    });
  };

  const handleChangeDataItem = (id, updates) => {
    setTreeItems((prevItems) =>
      updateNestedItem(prevItems, id, {
        ...updates,
      })
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

  return (
    <div className="w-full max-w-[1208px]">
      <ListItem />
      {/* <DndTest /> */}
      <div className="rounded-md border-[1px] border-border-primary overflow-hidden">
        <SortableTree
          removable
          items={treeItems}
          setItems={setTreeItems}
          handleChangeDataItem={handleChangeDataItem}
        />
        <div className="py-[20px] px-[24px]">
          <Button onClick={handleAddItem}>Dodaj pozycję menu</Button>
        </div>
      </div>
      <MainSection />
      <pre>{JSON.stringify(treeItems, null, 2)}</pre>
    </div>
  );
}
