import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const variantClasses = {
  primary: "bg-[#771bd6] text-white hover:bg-[#6a18c4] shadow-md",
  secondary: "bg-[#3e84a5] text-white hover:bg-[#36738f]",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1EBE5D] flex items-center gap-2",
  outline:
    "bg-transparent border-2 border-[#2f239c] text-[#2f239c] hover:bg-[#2f239c]/10",
  ghost: "bg-transparent text-[#2f239c] hover:bg-[#dceaf4] shadow-none",
  gradient:
    "bg-gradient-to-r from-[#771bd6] to-[#3e84a5] text-white hover:from-[#6a18c4] hover:to-[#36738f] shadow-md",
  light: "bg-[#dceaf4] text-[#2f239c] hover:bg-[#c5d9e8]",
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm rounded-md",
  md: "px-4 py-2 text-base rounded-md",
  lg: "px-6 py-3 text-lg rounded-lg",
  xl: "px-8 py-4 text-xl rounded-lg",
  icon: "p-2 rounded-full",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  ...props
}) => {
  return (
    <button
      className={`${variantClasses[variant]} ${sizeClasses[size]} ${
        icon ? "flex items-center justify-center gap-2" : ""
      } cursor-pointer font-medium transition-all duration-200 active:scale-95 ${className}`}
      {...props}
    >
      {variant === "whatsapp" && <FaWhatsapp size={18} />}
      {icon && React.cloneElement(icon, { className: "w-5 h-5" })}
      {children}
    </button>
  );
};

export default Button;
