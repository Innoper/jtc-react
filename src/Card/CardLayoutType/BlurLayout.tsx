import styled from "styled-components";
import { CardLayoutProps } from "../../types";

const BlurLayoutDiv = styled.div<CardLayoutProps>`
  width: ${(props) => props.width || "min-content"};
  display: ${(props) => props.diplay || "block"};
  justify-content: ${(props) => props.justifycontents};
  gap: ${(props) => props.gap};
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  div {
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
      z-index: 1;
      filter: none;
    }

    &:not(:hover) {
      transform: scale(1);
      filter: none;
    }
  }

  &:hover div:not(:hover) {
    filter: blur(10px);
    transform: scale(0.9);
  }
`;

/**
 * JTC CardLayout Component Blur Type
 */
export default function BlurLayout({
  children,
  style,
  width,
  height,
  diplay,
  flexwrap,
  justifycontents,
  gap,
}: CardLayoutProps) {
  return (
    <BlurLayoutDiv
      style={style}
      width={width}
      height={height}
      diplay={diplay}
      flexwrap={flexwrap}
      justifycontents={justifycontents}
      gap={gap}
    >
      {children}
    </BlurLayoutDiv>
  );
}
