import styled from "styled-components";

/**
 * Default Checkbox styled-components
 */
export const DefaultCheckboxDiv = styled.div`
  width: 25px;
  height: 25px;

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
    width: 12px;
    height: 12px;
    display: none;
  }

  .jtc-checkbox-input:checked + .jtc-checkbox-label .jtc-checkbox-img,
  .jtc-checkbox-input:checked + .jtc-checkbox-label .jtc-checkbox-svg {
    display: block;
  }
`;
