import styled from "styled-components/macro";

const INPUT_HEIGHT = "30px";

export const Wrapper = styled.div`
  .input-number {
    width: 78px;
    display: flex;
    height: ${INPUT_HEIGHT};
    align-items: center;
    justify-content: space-between;
    outline: 1px hsl(0, 0%, 80%) solid;
    border-radius: 4px;

    & > * {
      margin: 0;
      border: 0;
      padding: 0;
      height: inherit;
    }

    & button {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      width: 30px;
      color: #333;
      cursor: pointer;
      border-width: 1px;
      background: white;

      &:hover {
        color: black;
        background: #b5b5b5;
      }

      &:active {
        color: white;
        background: #b5b5b5;
      }
    }

    & button:focus,
    & input:focus {
      border: none;
      box-shadow: none;
      outline: none !important;
    }

    & input {
      background-color: #e7e7e7;
      border: 0;
      padding: 0;
      width: 30px;
      font-size: 12px;
      text-align: center;
      height: ${INPUT_HEIGHT};

      /* Chrome, Safari, Edge, Opera */
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        margin: 0;
        -webkit-appearance: none;
      }

      /* Firefox */
      &[type="number"] {
        -moz-appearance: textfield;
      }
    }
  }
`;
