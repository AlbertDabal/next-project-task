import { MainSection } from "@/components/DragAndDrop/MainSection";
import { ListItem } from "@/components/ListItems/ListItems";
import { SortableTree } from "@/lib/dnd-kit/dnd-kit-tree/SortableTree";
import { TreeItems } from "@/lib/dnd-kit/dnd-kit-tree/types";

export default function Home() {
  const initialItems: TreeItems = [
    {
      id: "TEST",
      children: [],
    },
    {
      id: "Collections",
      children: [
        { id: "Spring", children: [] },
        { id: "Summer", children: [] },
        { id: "Fall", children: [] },
        { id: "Winter", children: [] },
      ],
    },
    {
      id: "About Us",
      children: [],
    },
    {
      id: "My Account",
      children: [
        { id: "Addresses", children: [] },
        { id: "Order History", children: [] },
      ],
    },
  ];

  return (
    <div className="w-full max-w-[1208px]">
      <ListItem />
      {/* <DndTest /> */}
      <div
        style={{
          maxWidth: 600,
          padding: 10,
          margin: "0 auto",
          marginTop: "10%",
        }}
      >
        <SortableTree removable defaultItems={initialItems} />
      </div>
      <MainSection />
    </div>
  );
}
