import { TextProps } from "../types";
import BubbleText from "./TextType/BubbleText";
import ImageText from "./TextType/ImageText";

interface Props extends TextProps {
  type?: "bubble" | "image";
}

/**
 * JTC Text Component
 */
export default function Text({
  type,
  children,
  style,
  fontSize,
  color,
  fontWeight,
  transitionduration,
  imageurl,
}: Props) {
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
}
