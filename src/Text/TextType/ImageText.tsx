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

const StyledText = styled.span<TextProps>`
  font-size: ${(props) => props.fontSize || "14px"};
  font-weight: ${(props) => props.fontWeight || 900};
  color: transparent;
  background: url(${(props) => props.imageurl}) no-repeat center/cover;
  -webkit-background-clip: text;
  background-clip: text;
  display: inline-block;
  white-space: pre;
  cursor: default;
`;

/**
 * JTC Text Component Image Type
 */
export default function ImageText({
  children,
  fontSize,
  fontWeight,
  imageurl,
}: TextProps) {
  return (
    <StyledText fontSize={fontSize} fontWeight={fontWeight} imageurl={imageurl}>
      {children}
    </StyledText>
  );
}
