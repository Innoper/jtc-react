import { CheckboxProps } from "../types";
import { DefaultCheckboxDiv } from "./CheckboxType/DefaultCheckbox";

/**
 * JTC Checkbox Component
 */
export default function Checkbox({
  id,
  icon,
  width = "15px",
  height = "15px",
  color = "#727272",
  onChange,
  disabled = false,
  checked = false,
}: CheckboxProps) {
  const inputClassName = "jtc-checkbox-input";
  const labelClassName = "jtc-checkbox-label";
  const spanClassName = "jtc-checkbox-span";

  return (
    <DefaultCheckboxDiv width={width} height={height} color={color}>
      <input
        className={inputClassName}
        id={`jtc-checkbox-${id}`}
        type="checkbox"
        onChange={onChange}
        disabled={disabled}
        checked={checked}
      />
      <label className={labelClassName} htmlFor={`jtc-checkbox-${id}`}>
        <span className={spanClassName}>
          {icon ? (
            <img className="jtc-checkbox-img" src={icon} />
          ) : (
            <img className="jtc-checkbox-img" src="/public/path.svg" />
          )}
        </span>
      </label>
    </DefaultCheckboxDiv>
  );
}
