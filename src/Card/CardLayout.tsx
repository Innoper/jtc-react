import { CardLayoutProps } from "../types";
import BlurLayout from "./CardLayoutType/BlurLayout";

interface Props extends CardLayoutProps {
  type: string;
}

/**
 * JTC CardLayout Component
 */
export default function CardLayout({
  type,
  children,
  style,
  width,
  height,
  diplay,
  flexwrap,
  justifycontents,
  gap,
}: Props) {
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
}
