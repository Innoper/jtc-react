import React from "react";

export interface TextProps {
  children: string;
  style?: React.CSSProperties;
  fontSize?: React.CSSProperties["fontSize"];
  color?: React.CSSProperties["color"];
  fontWeight?: React.CSSProperties["fontWeight"];
  transitionduration?: React.CSSProperties["transitionDuration"];
  imageurl?: string;
}

export interface CardLayoutProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  diplay?: React.CSSProperties["display"];
  flexwrap?: React.CSSProperties["flexWrap"];
  justifycontents?: React.CSSProperties["justifyContent"];
  gap?: React.CSSProperties["gap"];
}

export interface ItemProps {
  img?: string;
  icon?: string;
  title?: string;
  sub?: string;
  desc?: string;
  bgcolor?: React.CSSProperties["color"];
  type?: "shadow" | "border" | "drag";
  children?: React.ReactNode;
  onClick?: () => void;
}
