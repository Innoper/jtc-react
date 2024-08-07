import { CheckboxProps } from "../types";
import { DefaultCheckboxDiv } from "./CheckboxType/DefaultCheckbox";

/**
 * JTC Checkbox Component
 */
export default function Checkbox({
  id,
  icon,
  onChange,
  disabled = false,
  checked = false,
}: CheckboxProps) {
  const inputClassName = "jtc-checkbox-input";
  const labelClassName = "jtc-checkbox-label";
  const spanClassName = "jtc-checkbox-span";

  return (
    <DefaultCheckboxDiv>
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
            <div className="jtc-checkbox-img">{icon}</div>
          ) : (
            <svg
              className="jtc-checkbox-svg"
              width="14"
              height="11"
              viewBox="0 0 14 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 10.42L0 5.42L1.41 4.01L5 7.59L12.59 0L14 1.42L5 10.42Z"
                fill="#323232"
              />
            </svg>
          )}
        </span>
      </label>
    </DefaultCheckboxDiv>
  );
}
