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
 * Default Input styled-components
 */
export const DefaultInputDiv = styled.div<InputProps>`
  position: relative;
  display: inline-block;

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  img {
    height: ${(props) => `calc(${props.height} / 2)`};
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    content: ${(props) => `'${props.icon}'`};
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
  }

  .jtc-input-img {
    padding-left: ${(props) => props.height};
  }
`;
