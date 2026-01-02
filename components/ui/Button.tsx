import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-3.5 text-base font-bold rounded-full " +
    "transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 " +
    "active:scale-[0.99]";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#1292B7] to-[#60C9DC] text-white " +
      "shadow-lg shadow-[#1292B7]/30 " +
      "hover:opacity-95 hover:shadow-xl hover:shadow-[#1292B7]/35 " +
      "focus:ring-[#1292B7]/40",

    secondary:
      "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900/40",

    outline:
      "border-2 border-[#1292B7] text-[#1292B7] " +
      "hover:bg-[#1292B7]/10 focus:ring-[#1292B7]/30",
  };

  return (
    <button
      className={[
        baseStyles,
        variants[variant],
        fullWidth ? "w-full" : "",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
};
