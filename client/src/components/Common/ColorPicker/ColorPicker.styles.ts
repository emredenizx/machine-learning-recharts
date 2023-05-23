import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  position: relative;
  width: min-content;

  input {
    display: block;
    box-sizing: border-box;
    width: 90px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #fff;
    outline: none;
    font: inherit;
    text-transform: uppercase;
    text-align: center;
  }

  input:focus {
    border-color: #4298ef;
  }
`;

export const Preview = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
  border: 1px solid #4a4a4a;
`;

export const PickerWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 100%;
  bottom: 0;
  z-index: 1;
`;
