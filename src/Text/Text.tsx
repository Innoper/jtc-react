import React from "react";
import BubbleText from "./TextType/BubbleText";
import ImageText from "./TextType/ImageText";

interface TextProps {
  children: string;
  style?: React.CSSProperties;
  fontSize?: React.CSSProperties["fontSize"];
  color?: React.CSSProperties["color"];
  fontWeight?: React.CSSProperties["fontWeight"];
  transitionduration?: React.CSSProperties["transitionDuration"];
  imageurl?: string;
}

interface Props extends TextProps {
  type?: "bubble" | "image";
}

/**
 * JTC Text Component
 */
const Text: React.FC<Props> = ({
  type,
  children,
  style,
  fontSize,
  color,
  fontWeight,
  transitionduration,
  imageurl,
}) => {
  if (type === "bubble") {
    return (
      <BubbleText
        children={children}
        style={style}
        fontSize={fontSize}
        color={color}
        fontWeight={fontWeight}
        transitionduration={transitionduration}
      />
    );
  }

  if (type === "image") {
    return (
      <ImageText
        children={children}
        style={style}
        fontSize={fontSize}
        fontWeight={fontWeight}
        imageurl={imageurl}
      />
    );
  }
  return <span>{children}</span>;
};

export default Text;
