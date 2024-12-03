"use client";

import React, { useState } from "react";
import { ItemEditForm } from "./ItemEditForm";
import { EmptyList } from "./EmptyList";
import { Button } from "@/core/ui/atoms/Button";
import { ItemInfo } from "./ItemInfo";
import { v4 as uuidv4 } from "uuid";

export const ListItem = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = {
      id: uuidv4(),
      label: "",
      url: "",
      parent: null,
      order: 1,
      isEdited: false,
    };

    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div className="flex flex-col gap-[32px]">
      <EmptyList addItem={addItem} />
      {items.map((item, index) => {
        const { isEdited, label, url } = item;

        return (
          <>
            {!isEdited ? (
              <ItemEditForm label={label} url={url} />
            ) : (
              <>
                <ItemInfo
                  label="Promocje"
                  url="https://rc32141.redcart.pl/promocje"
                />
                <Button onClick={handleAddItem}>Dodaj pozycję menu</Button>
              </>
            )}
          </>
        );
      })}
    </div>
  );

  // {/* <ItemEditForm />
  // <Button onClick={handleAddItem}>Dodaj pozycję menu</Button>
  // <ItemInfo label="Promocje" url="https://rc32141.redcart.pl/promocje" /> */}

  // return (
  //   <div className="border border-1 rounded-md border-border-primary w-full overflow-hidden">
  //     <EmptyList />
  //     {/* <ItemEditForm />
  //     <Button onClick={handleAddItem}>Dodaj pozycję menu</Button>
  //     <ItemInfo label="Promocje" url="https://rc32141.redcart.pl/promocje" /> */}
  //   </div>
  // );
};
