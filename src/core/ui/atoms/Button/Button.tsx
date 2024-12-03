"use client";

import React from "react";

export type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  icon,
  onClick,
}) => {
  const variants = {
    primary:
      "border-border-primary font-semibold text-button-secondary-fg bg-button-secondary-bg",
    secondary: "border-border-secondary text-secondary-fg font-semibold",
    tertiary:
      "border-border-secondary text-button-primary-fg font-semibold bg-primary",
  };

  return (
    <button
      onClick={onClick}
      className={`flex py-[10px] px-[16px] gap-[5px] border-[1px] text-[14px] shadow-shadow-xs rounded-md ${variants[variant]}`}
    >
      {icon}
      {children}
    </button>
  );
};
