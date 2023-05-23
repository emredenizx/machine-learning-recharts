import { Flex } from "components/GlobalStyled/Flex";
import styled from "styled-components/macro";

export const Wrapper = styled(Flex)`
  align-items: normal;
  justify-content: normal;
  gap: 14px;
  height: 100%;
  width: 100%;
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  padding: 20px;
`;

export const TitleCss = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding: 5px 0;
  border-bottom: 2px solid #f1f1f1;
`;
