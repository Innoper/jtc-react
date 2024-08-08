import React from "react";
import BlurLayout from "./CardLayoutType/BlurLayout";

interface CardLayoutProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  diplay?: React.CSSProperties["display"];
  flexwrap?: React.CSSProperties["flexWrap"];
  justifycontents?: React.CSSProperties["justifyContent"];
  gap?: React.CSSProperties["gap"];
}

interface Props extends CardLayoutProps {
  type: string;
}

/**
 * JTC CardLayout Component
 */
const CardLayout: React.FC<Props> = ({
  type,
  children,
  style,
  width,
  height,
  diplay,
  flexwrap,
  justifycontents,
  gap,
}) => {
  if (type === "blur") {
    return (
      <BlurLayout
        style={style}
        width={width}
        height={height}
        diplay={diplay}
        flexwrap={flexwrap}
        justifycontents={justifycontents}
        gap={gap}
      >
        {children}
      </BlurLayout>
    );
  }

  return <div>{children}</div>;
};

export default CardLayout;
