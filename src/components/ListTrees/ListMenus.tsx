"use client";

import React, { useEffect, useState } from "react";
import { mockDataTrees } from "./data/mockDataTrees";
import { ListTrees } from "./ListTrees";
import { EmptyList } from "./CustomTreeItem/EmptyList";
import { v4 as uuidv4 } from "uuid";
import { TreeData } from "@/core/types/TreeNode";

export const ListMenus = () => {
  const [listMenu, setListMenu] = useState<TreeData>(mockDataTrees);

  const handleAddItem = () => {
    const id = uuidv4();

    setListMenu((prevItems) => [
      ...prevItems,
      [
        {
          id: id,
          fields: { label: "", url: "", isEdited: true },
          children: [],
        },
      ],
    ]);
  };

  useEffect(() => {
    const hasEmptyArrays = listMenu.some(
      (item) => Array.isArray(item) && item.length === 0
    );

    if (hasEmptyArrays) {
      setListMenu((prevState) =>
        prevState.filter((item) => !Array.isArray(item) || item.length > 0)
      );
    }
  }, [listMenu]);

  return (
    <div className="flex flex-col w-full max-w-[1208px] gap-[32px]">
      <EmptyList addItem={handleAddItem} />
      {listMenu.map((item, index) => (
        <ListTrees
          key={index}
          id={index}
          listTrees={item}
          setListMenu={setListMenu}
        />
      ))}
      <pre>{JSON.stringify(listMenu, null, 2)}</pre>
    </div>
  );
};
