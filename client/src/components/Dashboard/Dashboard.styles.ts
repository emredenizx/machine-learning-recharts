import { Flex } from "components/GlobalStyled/Flex";
import styled from "styled-components/macro";

interface ColumnProps {
  width?: `${number}%` | undefined;
}

export const DashboardContainer = styled(Flex)`
  align-items: flex-start;
  justify-content: flex-start;
  background-color: white;
  padding: 30px;
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;
  gap: 20px;

  .series-select {
    min-width: 300px;
  }
`;

export const Row = styled(Flex)`
  align-items: stretch;
  width: 100%;
  gap: 30px;
`;

export const Column = styled(Flex)<ColumnProps>`
  height: 100%;
  width: ${(props) => props.width || "100%"};
`;
