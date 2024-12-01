"use client";

import React, { useState } from "react";
import { ItemEditForm } from "./ItemEditForm";
import { EmptyList } from "./EmptyList";
import { Button } from "@/core/ui/atoms/Button";
import { ItemInfo } from "./ItemInfo";

export const ListItem = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    console.log("handleAddItem");
  };

  items.map((item, index) => (
    <EmptyList key={index} addItem={addItem} />
    // {/* <ItemEditForm />
    // <Button onClick={handleAddItem}>Dodaj pozycję menu</Button>
    // <ItemInfo label="Promocje" url="https://rc32141.redcart.pl/promocje" /> */}
  ));

  return (
    <div className="border border-1 rounded-md border-border-primary w-full overflow-hidden">
      <EmptyList />
      {/* <ItemEditForm />
      <Button onClick={handleAddItem}>Dodaj pozycję menu</Button>
      <ItemInfo label="Promocje" url="https://rc32141.redcart.pl/promocje" /> */}
    </div>
  );
};
