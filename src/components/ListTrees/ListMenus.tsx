"use client";

import React, { useState } from "react";
import { mockDataTrees } from "./data/mockDataTrees";

export const ListMenus = () => {
  const [listMenu, setListMenu] = useState(mockDataTrees);

  console.log("listMenu", listMenu);

  return <div>ListMenus</div>;
};
