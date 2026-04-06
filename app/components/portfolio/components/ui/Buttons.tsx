"use client";

import { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  children?: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  className?: string;
};

function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-md font-semibold transition-all duration-300",

        // SIZE
        {
          "px-2 py-1 text-sm": size === "sm",
          "px-4 py-2 text-base": size === "md",
          "px-6 py-3 text-lg": size === "lg",
        },

        // VARIANTS
        {
          "bg-primary text-white hover:scale-105": variant === "primary",
          "bg-secondary text-black hover:scale-105": variant === "secondary",
          "bg-transparent text-white hover:bg-white/10": variant === "ghost",
          "bg-red-500 text-white hover:bg-red-600": variant === "danger",
        },

        className,
      )}
    >
      {children}
    </button>
  );
}

export default Button;
