"use client";

import React, { useState } from "react";
import { mockDataTrees } from "./data/mockDataTrees";
import { ListTrees } from "./ListTrees";
import { EmptyList } from "./CustomTreeItem/EmptyList";
import { v4 as uuidv4 } from "uuid";

export const ListMenus = () => {
  const [listMenu, setListMenu] = useState(mockDataTrees);

  const handleAddItem = () => {
    setListMenu((prevItems) => [
      ...prevItems,
      [
        {
          id: uuidv4(),
          fields: { label: "", url: "", isEdited: true },
          children: [],
        },
      ],
    ]);
  };

  return (
    <div className="flex flex-col w-full max-w-[1208px] gap-[32px]">
      <EmptyList addItem={handleAddItem} />
      {listMenu.map((item, index) => (
        <ListTrees
          key={index}
          listTrees={item}
          setListMenu={setListMenu}
          listMenu={listMenu}
        />
      ))}
      <pre>{JSON.stringify(listMenu, null, 2)}</pre>
    </div>
  );
};
