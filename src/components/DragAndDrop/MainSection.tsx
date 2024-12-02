"use client";

import { DndContext } from "@dnd-kit/core";
import React, { useState } from "react";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";
import { SortableContext } from "@dnd-kit/sortable";

export const MainSection = () => {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = <Draggable>Drag me</Draggable>;
  const [items] = useState([1, 2, 3]);

  function handleDragEnd(event) {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  }

  return (
    <div>
      {/* <DndContext onDragEnd={handleDragEnd}>
        {!isDropped ? draggableMarkup : null}
        <Droppable>{isDropped ? draggableMarkup : "Drop here"}</Droppable>
      </DndContext> */}
      <DndContext>
        <SortableContext items={items}>{/* ... */}</SortableContext>
      </DndContext>
    </div>
  );
};
