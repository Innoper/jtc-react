import styled from "styled-components";
import { CheckboxProps } from "../types";

const CheckboxDiv = styled.div`
  .jtc-checkbox-input {
    display: none;
  }

  .jtc-checkbox-span {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .jtc-checkbox-img,
  .jtc-checkbox-svg {
    width: 15px;
    height: 15px;
    display: none;
  }

  .jtc-checkbox-input:checked + .jtc-checkbox-label .jtc-checkbox-img,
  .jtc-checkbox-input:checked + .jtc-checkbox-label .jtc-checkbox-svg {
    display: block;
  }
`;

interface CheckboxComponentProps extends CheckboxProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  checked?: boolean;
}

/**
 * JTC Checkbox Component
 */
export default function Checkbox({
  icon,
  onChange,
  disabled = false,
  checked = false,
}: CheckboxComponentProps) {
  return (
    <CheckboxDiv>
      <input
        className="jtc-checkbox-input"
        id="cbx-15"
        type="checkbox"
        onChange={onChange}
        disabled={disabled}
        checked={checked}
      />
      <label className="jtc-checkbox-label" htmlFor="cbx-15">
        <span className="jtc-checkbox-span">
          {icon ? (
            <img className="jtc-checkbox-img" src={icon} />
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
    </CheckboxDiv>
  );
}
