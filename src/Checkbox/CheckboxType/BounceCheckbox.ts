import styled, { keyframes } from "styled-components";

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

// bounce 애니메이션 정의
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-12px);
  }
  60% {
    transform: translateY(-6px);
  }
`;

/**
 * Bounce Checkbox styled-components
 */
export const BounceCheckboxDiv = styled.div<CheckboxProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;

  input[type="checkbox"] {
    display: none;
  }

  .jtc-checkbox-label-bounce {
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
        display: flex;
        justify-content: center;
        align-items: center;

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
  }

  .jtc-checkbox-input-bounce:checked
    + .jtc-checkbox-label-bounce
    span:first-child {
    border-color: ${(props) => props.color};
    background: ${(props) => props.color};
    animation: ${bounce} 0.6s ease;

    .jtc-checkbox-img {
      display: block;
    }
  }
`;
