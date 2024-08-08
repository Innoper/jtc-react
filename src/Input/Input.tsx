import React from "react";
import { DefaultInputDiv } from "./InputType/DefaultInput";
import { PlaceholderInputDiv } from "./InputType/PlaceHolderInput";

interface InputProps {
  type?: "placeholder";
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  bordercolor?: React.CSSProperties["color"];
  icon?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  width,
  height,
  icon,
  bordercolor,
  placeholder,
  value,
  onChange,
}) => {
  if (type === "placeholder") {
    return (
      <PlaceholderInputDiv
        width={width}
        height={height}
        bordercolor={bordercolor}
      >
        {icon && <img src={icon} />}
        <input
          type="text"
          className={`${icon ? "jtc-input-img" : "jtc-input"}`}
          value={value}
          onChange={onChange}
          placeholder=" "
        />
        <label className={`${icon ? "jtc-label-img" : "jtc-input"}`}>
          {placeholder}
        </label>
      </PlaceholderInputDiv>
    );
  }

  return (
    <DefaultInputDiv
      icon={icon}
      width={width}
      height={height}
      bordercolor={bordercolor}
    >
      {icon && <img src={icon} />}
      <input
        type="text"
        className={`${icon ? "jtc-input-img" : "jtc-input"}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </DefaultInputDiv>
  );
};

export default Input;
