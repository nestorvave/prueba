import { type HTMLProps } from "react";

interface ITextInput extends HTMLProps<HTMLInputElement> {
  customSize: string;
}

export const TextInput = ({ customSize, ...rest }: ITextInput) => {
  const { onChange, onClick, placeholder, name } = rest;
  const size = customSize ? customSize : "w-full";
  return (
    <input
      className={`border border-black w-full pl-2 cursor-pointer ${size}`}
      onChange={onChange}
      onClick={onClick}
      placeholder={placeholder}
      name={name}
    ></input>
  );
};
