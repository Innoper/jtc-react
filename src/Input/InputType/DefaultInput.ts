import styled from "styled-components";
import { InputProps } from "../../types";

/**
 * Default Input styled-components
 */
export const DefaultInputDiv = styled.div<InputProps>`
  position: relative;
  display: inline-block;

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
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: 15px;
    border: 0.5px solid;
    border-color: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    outline: none;

    &:focus {
      border-color: ${({ focusBorderColor }) => focusBorderColor || "#007BFF"};
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
  }

  .jtc-input-img {
    padding-left: ${(props) => props.height};
  }
`;
