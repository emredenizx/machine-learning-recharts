/* eslint-disable indent */
import styled, { css } from "styled-components";

interface Props {
  direction?: "column" | "row";
}

export const Flex = styled.div<Props>`
  ${({
  direction = "row"
}) => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: center;
    align-items: center;
  `}
`;
