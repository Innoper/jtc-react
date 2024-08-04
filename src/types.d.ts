import React from "react";

export interface TextProps {
  children: string;
  style?: React.CSSProperties;
  fontSize?: React.CSSProperties["fontSize"];
  color?: React.CSSProperties["color"];
  fontWeight?: React.CSSProperties["fontWeight"];
  transitionduration?: React.CSSProperties["transitionDuration"];
}
