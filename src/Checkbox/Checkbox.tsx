import { CheckboxProps } from "../types";
import { BounceCheckboxDiv } from "./CheckboxType/\bBounceCheckbox";
import { DefaultCheckboxDiv } from "./CheckboxType/DefaultCheckbox";
import { WaveCheckboxDiv } from "./CheckboxType/WaveCheckbox";

/**
 * JTC Checkbox Component
 */
export default function Checkbox({
  id,
  type,
  icon,
  width = "15px",
  height = "15px",
  color = "#727272",
  onChange,
  disabled = false,
  checked = false,
}: CheckboxProps) {
  const inputClassName = type
    ? `jtc-checkbox-input-${type}`
    : "jtc-checkbox-input";
  const labelClassName = type
    ? `jtc-checkbox-label-${type}`
    : "jtc-checkbox-label";
  const spanClassName = type
    ? `jtc-checkbox-span-${type}`
    : "jtc-checkbox-span";

  if (type === "bounce") {
    return (
      <BounceCheckboxDiv width={width} height={height} color={color}>
        <input
          className={inputClassName}
          id={`jtc-checkbox-${id}`}
          type="checkbox"
          onChange={onChange}
          disabled={disabled}
          checked={checked}
        />
        <label className={labelClassName} htmlFor={`jtc-checkbox-${id}`}>
          <span>
            {icon ? (
              <img className="jtc-checkbox-img" src={icon} />
            ) : (
              <img className="jtc-checkbox-img" src="/public/path.svg" />
            )}
          </span>
        </label>
      </BounceCheckboxDiv>
    );
  }

  if (type === "wave") {
    return (
      <WaveCheckboxDiv width={width} height={height} color={color}>
        <input
          className={inputClassName}
          id={`jtc-checkbox-${id}`}
          type="checkbox"
          onChange={onChange}
          disabled={disabled}
          checked={checked}
        />
        <label className={labelClassName} htmlFor={`jtc-checkbox-${id}`}>
          <span>
            {icon ? (
              <img className="jtc-checkbox-img" src={icon} />
            ) : (
              <img className="jtc-checkbox-img" src="/public/path.svg" />
            )}
          </span>
        </label>
      </WaveCheckboxDiv>
    );
  }

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
