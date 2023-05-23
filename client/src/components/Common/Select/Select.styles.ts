import styled from "styled-components/macro";

export const Container = styled.div`
  display: grid;
  align-items: center;
  gap: 10px;
  grid-template-columns: 2fr 1fr;
`;

export const Arrows = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  svg.button {
    cursor: pointer;
    width: 24px;
    height: auto;
    * {
      stroke: #999999;
    }
  }

  svg.button:hover {
    * {
      stroke: #484848;
    }
  }

  .prev {
    transform: scaleX(-1);
  }
`;
