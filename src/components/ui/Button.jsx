// components/Button.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const variantClasses = {
  default: "bg-primary text-white hover:bg-primary/90",
  outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  secondary:
    "bg-white text-primary border border-primary hover:bg-primary hover:text-white",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1EBE5D] flex items-center gap-2",
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm rounded-md",
  md: "px-4 py-2 text-base rounded-md",
  lg: "px-6 py-3 text-lg rounded-md",
};

const Button = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`${variantClasses[variant]} ${sizeClasses[size]} cursor-pointer font-medium transition-colors duration-200 ${className}`}
      {...props}
    >
      {variant === "whatsapp" && <FaWhatsapp size={18} />}
      {children}
    </button>
  );
};

export default Button;
