"use-client";

import { IconPlusCircle } from "@/assets/icons/IconPlusCircle";
import { Button } from "@/core/ui/atoms/Button";
import React from "react";

export const EmptyList = ({ addItem }) => {
  const handleAddItem = () => {
    addItem();
  };

  return (
    <div className="flex flex-col items-center py-[20px] px-[24px] gap-[24px] bg-secondary-other">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold">Menu jest puste</h1>
        <p className="font-light text-text-tertiary-600">
          W tym menu nie ma jeszcze żadnych linków.
        </p>
      </div>

      <Button
        onClick={handleAddItem}
        variant="tertiary"
        icon={<IconPlusCircle />}
      >
        Dodaj pozycję menu
      </Button>
    </div>
  );
};
