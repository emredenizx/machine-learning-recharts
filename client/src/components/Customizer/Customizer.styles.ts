import styled from "styled-components/macro";

export const CustomizerWrapper = styled.div`
  display: flex;
  height: 100%;
  gap: 12px;
  .section-wrapper {
    background-color: #dbdbdb;
  }
`;

export const Setting = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 10px;
`;

export const Label = styled.h3`
  font-size: 14px;
  font-weight: 500;
`;
