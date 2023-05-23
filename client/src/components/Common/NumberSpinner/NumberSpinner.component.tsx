import React, { ChangeEvent, useEffect } from "react";
import { Wrapper } from "./NumberSpinner.styles";

type NumberSpinnerProps = {
  defaultValue: number;
  min?: number;
  max?: number;
  onChangeEnd: (value: number) => void;
};

function NumberSpinner({
  defaultValue,
  min = 1,
  max = 20,
  onChangeEnd,
}: NumberSpinnerProps): JSX.Element {
  const [value, setValue] = React.useState<number>(defaultValue);
  const valueRef = React.useRef<number>(value);

  const handleChange = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    setValue((curr) => {
      if (!value) return min;
      const numeric = parseInt(value, 10);
      const maxLength = 2;

      if (value.length > maxLength) return curr;
      if (numeric >= max) return max;

      return value.length <= maxLength ? numeric : curr;
    });
  };

  const handleButtonChange = (increment: 1 | -1): void => {
    setValue((curr) => curr + increment);
  };

  useEffect(() => {
    if (valueRef.current === value) return;
    valueRef.current = value;
    const timeout = setTimeout(() => onChangeEnd(value), 100);
    return () => clearTimeout(timeout);
  }, [value, onChangeEnd]);

  return (
    <Wrapper>
      <div className="input-number">
        <button
          type="button"
          disabled={value === min}
          onMouseDown={() => handleButtonChange(-1)}
        >
          -
        </button>
        <input type="number" value={value} onChange={handleChange} />
        <button
          type="button"
          disabled={value === max}
          onMouseDown={() => handleButtonChange(1)}
        >
          +
        </button>
      </div>
    </Wrapper>
  );
}

export default NumberSpinner;
