import React from "react";
import {
  Wrapper,
  TitleCss,
} from "./Section.styles";

interface SectionProps {
  children: React.ReactNode,
  name: string,
  style?: React.CSSProperties
}

function Section({
  name,
  style,
  children,
}: SectionProps): JSX.Element {
  return (
    <Wrapper direction="column" style={style} className="section-wrapper">
      <TitleCss>{name}</TitleCss>
      {children}
    </Wrapper>
  );
}

export default Section;
