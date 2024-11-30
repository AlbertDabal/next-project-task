import { IconSearch } from "@/assets/icons/IconSearch";
import React from "react";

export type InputTextProps = {
  search?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const InputText: React.FC<InputTextProps> = ({ search, ...rest }) => {
  return (
    <div className="w-full border-[1px] rounded-md border-border-primary px-[12px] py-[8px] text-[16px] text-text-placeholder flex gap-[8px] items-center shadow-shadow-xs bg-white">
      {search && <IconSearch />}
      <input {...rest} className="outline-none border-none bg-white w-full" />
    </div>
  );
};
