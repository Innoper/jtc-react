import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface TextProps {
  children: string;
  style?: React.CSSProperties;
  fontSize?: React.CSSProperties["fontSize"];
  color?: React.CSSProperties["color"];
  fontWeight?: React.CSSProperties["fontWeight"];
  transitionduration?: React.CSSProperties["transitionDuration"];
  imageurl?: string;
}

const SplitChar = styled.span<TextProps>`
  font-size: ${(props) => props.fontSize || "14px"};
  font-weight: ${(props) => props.fontWeight || 200};
  transition: font-weight ${(props) => props.transitionduration || "0.5s"} ease;
  color: ${(props) => props.color};
  cursor: default;

  &:hover {
    font-weight: 900;
    opacity: 60%;
  }

  &:hover + & {
    font-weight: 700;
    opacity: 60%;
  }

  &:hover + & + & {
    font-weight: 400;
    opacity: 60%;
  }
`;

/**
 * JTC Text Component Bubble Type
 */
export default function BubbleText({
  children,
  style,
  fontSize,
  color,
  fontWeight,
  transitionduration,
}: TextProps) {
  const [characters, setCharacters] = useState<string[]>([]);

  useEffect(() => {
    const splitText = children.split("");
    setCharacters(splitText);
  }, [children]);

  return characters.map((char, index) => (
    <SplitChar
      style={style}
      key={index}
      fontSize={fontSize}
      fontWeight={fontWeight}
      transitionduration={transitionduration}
      color={color}
    >
      {char === " " ? "\u00A0" : char}
    </SplitChar>
  ));
}
