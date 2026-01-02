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
    "inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full " + // زيادة الـ py من 3.5 إلى 4
    "transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 " +
    "active:scale-[0.97]"; // تحسين استجابة اللمس

  const variants = {
    primary:
      "bg-gradient-to-r from-[#1292B7] to-[#60C9DC] text-white " +
      "shadow-xl shadow-[#1292B7]/25 " + // ظل أعمق لاحترافية أكثر
      "hover:shadow-2xl hover:shadow-[#1292B7]/35 hover:-translate-y-0.5",

    secondary:
      "bg-gray-900 text-white hover:bg-gray-800",

    outline:
      "border-2 border-[#1292B7] text-[#1292B7] hover:bg-[#1292B7]/5",
  };

  return (
    <button
      className={[baseStyles, variants[variant], fullWidth ? "w-full" : "", className].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
};
