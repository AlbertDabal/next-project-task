"use client";

import { MainSection } from "@/components/DragAndDrop/MainSection";
import { ItemInfo } from "@/components/ListItems/ItemInfo";
import { ListItem } from "@/components/ListItems/ListItems";
import { Button } from "@/core/ui/atoms/Button";
import { SortableTree } from "@/lib/dnd-kit/dnd-kit-tree/SortableTree";
import { TreeItems } from "@/lib/dnd-kit/dnd-kit-tree/types";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const initialItems: TreeItems = [
    {
      id: uuidv4(),
      children: [{ id: uuidv4(), children: [{ id: uuidv4(), children: [] }] }],
    },
    { id: uuidv4(), children: [] },
  ];

  const handleAddItem = () => {};

  return (
    <div className="w-full max-w-[1208px]">
      <ListItem />
      {/* <DndTest /> */}
      <div className="rounded-md border-[1px] border-border-primary overflow-hidden">
        <SortableTree removable defaultItems={initialItems} treeItem={true} />
        <div className="py-[20px] px-[24px]">
          <Button onClick={handleAddItem}>Dodaj pozycję menu</Button>
        </div>
      </div>
      <MainSection />
    </div>
  );
}
