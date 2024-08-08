import { InputProps } from "../types";
import { DefaultInputDiv } from "./InputType/DefaultInput";
import { PlaceholderInputDiv } from "./InputType/PlaceHolderInput";

export default function Input({
  type,
  width,
  height,
  icon,
  bordercolor,
  placeholder,
  value,
  onChange,
}: InputProps) {
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
}
