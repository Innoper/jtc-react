import styled from "styled-components";
import { ItemProps } from "../types";

const ItemDiv = styled.div<ItemProps>`
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 0.6em;
  word-spacing: 0.025em;
  background-color: ${(props) => props.bgcolor || "white"};
  ${(props) => {
    switch (props.type) {
      case "shadow":
        return "box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);";
      case "border":
        return "border: 1px solid rgba(0, 0, 0, 0.1);";
      default:
        return "";
    }
  }}

  .jtc-item-image {
    width: 24px;
    height: 24px;
    margin: 16px;
  }
  .jtc-item-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.4em;
    overflow: hidden;

    .jtc-item-info-sub-title,
    .jtc-item-info-desc {
      font-size: 1em;
      line-height: 1.2em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }
    .jtc-item-info-desc {
      color: var(--main-gray);
    }
    .jtc-item-info-title {
      font-size: 1.2em;
      line-height: 1.2em;
    }
  }

  .jtc-item-icon {
    width: 24px;
    height: 24px;
    margin: 16px;
  }
`;

/**
 * JTC Item Components
 */
export default function Item({
  img,
  icon,
  title,
  sub,
  desc,
  bgcolor,
  type,
}: ItemProps) {
  return (
    <ItemDiv bgcolor={bgcolor} type={type}>
      {img && <img className="jtc-item-image" src={img} alt="Item image" />}
      <div className="jtc-item-info">
        {sub && <p className="jtc-item-info-sub-title">{sub}</p>}
        {title && <h5 className="jtc-item-info-title">{title}</h5>}
        {desc && <p className="jtc-item-info-desc">{desc}</p>}
      </div>
      {icon && <img className="jtc-item-icon" src={icon} alt="Item icon" />}
    </ItemDiv>
  );
}
