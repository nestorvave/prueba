import type { IButton } from "./interface/button.interface";

export const Button = ({ ...rest }: IButton) => {
  const { onClick, label, disabled } = rest;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 bg-blue-600 text-white text-sm borderborder-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {label}
    </button>
  );
};
