import styled from "styled-components";

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

/**
 * Placeholder Input styled-components
 */
export const PlaceholderInputDiv = styled.div<InputProps>`
  position: relative;

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  img {
    height: ${(props) => `calc(${props.height} * 0.6)`};
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  input {
    width: 100%;
    height: 100%;
    padding: 15px;
    border: 0.5px solid;
    border-color: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    outline: none;

    &:focus {
      border-color: ${({ bordercolor }) => bordercolor || "#007BFF"};
      box-shadow: 0 0 5px
        ${({ bordercolor }) => bordercolor || "rgba(0, 123, 255, 0.3)"};
    }

    &:focus + label,
    &:not(:placeholder-shown) + label {
      top: -12px;
      left: 12px;
      font-size: 12px;
      color: ${({ bordercolor }) => bordercolor || "#007BFF"};
      padding: 0 5px;
    }
  }

  .jtc-input-img {
    padding-left: ${(props) => props.height};
  }

  label {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    transition: all 0.3s ease;
    pointer-events: none;
    color: rgba(0, 0, 0, 0.5);
  }

  .jtc-label-img {
    left: ${(props) => props.height};
  }
`;
