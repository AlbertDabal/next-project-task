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
  const [dataItems, setDataItems] = useState([
    {
      id: "10552010-9c00-4dce-8188-af8eec4962be",
      label: "",
      url: "",
      isEdited: false,
    },
    {
      id: "3aaa8658-6843-48e7-a885-b07b82df21d9",
      label: "",
      url: "",
      isEdited: false,
    },
    {
      id: "5e5223b0-bf11-4068-8ba4-a0fa4e1fcabd",
      label: "",
      url: "",
      isEdited: false,
    },
    {
      id: "a596e03c-a9c7-47d2-92bf-502937bec36b",
      label: "",
      url: "",
      isEdited: false,
    },
  ]);

  const handleChangeDataItem = () => {
    setItems((prev) => [...prev]); // Wywoływanie zmiany stanu bez modyfikacji powoduje cykliczny render
  };

  const initialItems: TreeItems = [
    {
      id: "10552010-9c00-4dce-8188-af8eec4962be",
      children: [
        {
          id: "3aaa8658-6843-48e7-a885-b07b82df21d9",
          children: [
            {
              id: "5e5223b0-bf11-4068-8ba4-a0fa4e1fcabd",
              children: [],
            },
          ],
        },
      ],
    },
    { id: "a596e03c-a9c7-47d2-92bf-502937bec36b", children: [] },
  ];

  const handleAddItem = () => {};

  return (
    <div className="w-full max-w-[1208px]">
      <ListItem />
      {/* <DndTest /> */}
      <div className="rounded-md border-[1px] border-border-primary overflow-hidden">
        <SortableTree
          removable
          defaultItems={initialItems}
          treeItem={true}
          dataItems={dataItems}
          handleChangeDataItem={handleChangeDataItem}
        />
        <div className="py-[20px] px-[24px]">
          <Button onClick={handleAddItem}>Dodaj pozycję menu</Button>
        </div>
      </div>
      <MainSection />
    </div>
  );
}
