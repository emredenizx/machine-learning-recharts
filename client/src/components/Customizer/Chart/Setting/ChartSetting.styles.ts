import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > .chart-setting {
    margin-left: 24px;
  }

  .react-toggle {
    width: min-content;
  }
`;
