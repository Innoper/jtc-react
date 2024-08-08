import styled from "styled-components";

interface CheckboxProps {
  id?: number | string;
  type?: "wave" | "bounce";
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  color?: React.CSSProperties["color"];
  icon?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  checked?: boolean;
}

/**
 * Default Checkbox styled-components
 */
export const DefaultCheckboxDiv = styled.div<CheckboxProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  .jtc-checkbox-input {
    display: none;
  }

  .jtc-checkbox-span {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: 50%;
    border: 1px solid;
    border-color: ${(props) => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .jtc-checkbox-img {
    width: ${(props) => `calc(${props.width} / 2)`};
    height: ${(props) => `calc(${props.height} / 2)`};
    display: none;
  }

  .jtc-checkbox-input:checked + .jtc-checkbox-label .jtc-checkbox-span {
    background-color: ${(props) => props.color};
  }

  .jtc-checkbox-input:checked + .jtc-checkbox-label .jtc-checkbox-img {
    display: block;
  }
`;
