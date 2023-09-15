import React from 'react'
import { IconType } from 'react-icons';

interface ButtonProps {
  label: string;
  type: "button" | "submit" | "reset"
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  onOpen?: () => void;
  disabled?: boolean;
  outline?: boolean;
  danger?: boolean
  dark?: boolean
  small?: boolean;
  icon?: IconType;
}


export default function Button({label, onOpen, type, onClick, disabled, outline, dark, danger, small, icon:Icon}: ButtonProps) {
  return (
      <button className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full 
      ${outline && "bg-white"}
      ${outline && "border-black"}
      ${outline && "text-black"}
      ${danger && "bg-rose-600"}
      ${danger && "border-rose-600"}
      ${danger && "text-white"}
      ${dark && "bg-slate-900"}
      ${dark && "border-white/90"}
      ${dark && "text-white/90"}
      ${small ? "py-1" : "py-3"}
      ${small ? "text-sm" : "text-md"}
      ${small ? "font-light" : "font-semibold"}
      ${small ? "border-[1px]" : "border-2"}`}
      onClick={onClick ? onClick : onOpen}
      disabled={disabled}
      type={type}>
      {Icon && (
        <Icon
          size={24}
          className="absolute left-4 top-3" />
      )}
      {label}
    </button>
  )
}
