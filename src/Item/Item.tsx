import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { ItemProps } from "../types";

interface ItemComponentProps extends ItemProps {
  isdragging?: string;
}

const ItemDiv = styled.div<ItemComponentProps>`
  width: 100%;
  display: flex;

  .jtc-item {
    width: ${(props) =>
      props.isdragging === "true" ? "calc(100% - 5.5em)" : "100%"};
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 0.6em;
    word-spacing: 0.025em;
    border-radius: 12px;
    background-color: ${(props) => props.bgcolor || "white"};
    ${(props) => {
      switch (props.type) {
        case "shadow":
          return "box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);";
        case "drag":
          return "box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);";
        case "border":
          return "border: 1px solid rgba(0, 0, 0, 0.1);";
        default:
          return "";
      }
    }}
    cursor: ${(props) => (props.onClick ? "pointer" : "default")};

    transition: width 0.3s ease;
  }

  .jtc-item-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.6em;
  }

  .jtc-item-image {
    width: 24px;
    height: 24px;
    margin: 16px;
  }

  .jtc-item-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4em;
    .jtc-item-info-sub-title,
    .jtc-item-info-desc {
      font-size: 1em;
      line-height: 1.2em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
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

  .jtc-item-children {
    display: ${(props) => (props.isdragging === "true" ? "flex" : "none")};
    align-items: center;
    padding-left: 10px;
  }
`;

export default function Item({
  img,
  icon,
  title,
  sub,
  desc,
  bgcolor,
  type,
  onClick,
  children,
}: ItemProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  // 드래그 시작 핸들러
  const handleDragStart = (event: React.DragEvent | React.TouchEvent) => {
    if (type === "drag") {
      if ("clientX" in event) {
        setStartX(event.clientX);
      } else if (event.touches.length > 0) {
        setStartX(event.touches[0].clientX);
      }
    }
  };

  // 드래그 중 핸들러
  const handleDrag = (event: React.DragEvent | React.TouchEvent) => {
    if (type === "drag") {
      if (startX !== null) {
        let currentX: number;
        if ("clientX" in event) {
          currentX = event.clientX;
        } else if (event.touches.length > 0) {
          currentX = event.touches[0].clientX;
        } else {
          return;
        }

        if (currentX < startX) {
          setIsDragging(true);
        }
      }
    }
  };

  // 외부 클릭 감지 핸들러
  const handleClickOutside = (event: MouseEvent) => {
    if (itemRef.current && !itemRef.current.contains(event.target as Node)) {
      setIsDragging(false);
    }
  };

  useEffect(() => {
    if (type === "drag") {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [type]);

  return (
    <ItemDiv
      ref={itemRef}
      bgcolor={bgcolor}
      type={type}
      isdragging={`${isDragging}`}
      onClick={() => {
        if (onClick) {
          onClick();
        }
        setIsDragging(false);
      }}
      draggable
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onTouchStart={handleDragStart}
      onTouchMove={handleDrag}
    >
      <div className="jtc-item">
        <div className="jtc-item-content">
          {img && <img className="jtc-item-image" src={img} alt="Item image" />}
          <div className="jtc-item-info">
            {sub && <p className="jtc-item-info-sub-title">{sub}</p>}
            {title && <h5 className="jtc-item-info-title">{title}</h5>}
            {desc && <p className="jtc-item-info-desc">{desc}</p>}
          </div>
          {icon && <img className="jtc-item-icon" src={icon} alt="Item icon" />}
        </div>
      </div>
      {type === "drag" && <div className="jtc-item-children">{children}</div>}
    </ItemDiv>
  );
}
