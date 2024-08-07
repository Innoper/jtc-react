import styled, { keyframes } from "styled-components";
import { CheckboxProps } from "../../types";

const check15 = keyframes`
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

/**
 * Wave Checkbox styled-components
 */
export const WaveCheckboxDiv = styled.div<CheckboxProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;

  input[type="checkbox"] {
    display: none;
  }

  .jtc-checkbox-label-wave {
    -webkit-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;

    span {
      display: inline-block;
      vertical-align: middle;
      transform: translate3d(0, 0, 0);

      &:first-child {
        position: relative;
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        border-radius: 50%;
        transform: scale(1);
        vertical-align: middle;
        border: 1px solid;
        border-color: ${(props) => props.color};
        transition: all 0.2s ease;

        &:before {
          content: "";
          width: 100%;
          height: 100%;
          background: ${(props) => props.color};
          display: block;
          transform: scale(0);
          opacity: 1;
          border-radius: 50%;
          transition-delay: 0.2s;
        }

        .jtc-checkbox-img {
          width: ${(props) => `calc(${props.width} / 2)`};
          height: ${(props) => `calc(${props.height} / 2)`};
          position: absolute;
          top: 25%;
          left: 25%;
          transition: all 0.3s ease;
          transition-delay: 0.1s;
          transform: translate3d(0, 0, 0);
          display: none;
        }
      }
    }

    &:hover span:first-child {
      border-color: ${(props) => props.color};
    }
  }

  .jtc-checkbox-input-wave:checked + .jtc-checkbox-label-wave span:first-child {
    border-color: ${(props) => props.color};
    background: ${(props) => props.color};
    animation: ${check15} 0.6s ease;

    .jtc-checkbox-img {
      display: block;
    }
  }

  .jtc-checkbox-input-wave:checked
    + .jtc-checkbox-label-wave
    span:first-child:before {
    transform: scale(2.2);
    opacity: 0;
    transition: all 0.6s ease;
  }

  .jtc-checkbox-input-wave:checked + .jtc-checkbox-label-wave span:last-child {
    color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }

  .jtc-checkbox-input-wave:checked
    + .jtc-checkbox-label-wave
    span:last-child:after {
    transform: scaleX(1);
    transition: all 0.3s ease;
  }
`;
