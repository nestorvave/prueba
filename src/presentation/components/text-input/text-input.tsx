import { type HTMLProps } from "react";

interface ITextInput extends HTMLProps<HTMLInputElement> {}

export const TextInput = ({ ...rest }: ITextInput) => {
  const { onChange, onClick, placeholder, name } = rest;

  return (
    <input
      className="border border-black w-52 pl-2 cursor-pointer"
      onChange={onChange}
      onClick={onClick}
      placeholder={placeholder}
      name={name}
    ></input>
  );
};
