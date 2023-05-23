import { useCallback, useMemo } from "react";
import ReactSelect, { MenuPlacement } from "react-select";
import { ReactComponent as ArrowSvg } from "images/arrow-circle.svg";
import { Container, Arrows } from "./Select.styles";

interface Option<T> {
  value: T;
  label: T;
}

interface SelectProps<T> {
  selectedValue: T;
  onChange: (value: T) => void;
  options: Option<T>[];
  menuPlacement?: MenuPlacement;
}

function Select<T>({
  selectedValue,
  onChange,
  options,
  menuPlacement = "bottom"
}: SelectProps<T>): JSX.Element {
  const value = useMemo(() => options.find((option) => option.value === selectedValue), [options, selectedValue]);

  const handleChange = useCallback((option: Option<T> | null): void => {
    if (option) onChange(option.value);
  }, [onChange]);

  const onNavigate = useCallback((direction: "next" | "prev") => {
    const currIndex = options.findIndex((option) => option.value === selectedValue);
    if (currIndex === -1) return;

    let nextIndex = 0;
    if (direction === "next") {
      nextIndex = currIndex + 1;
      if (nextIndex >= options.length) nextIndex = 0;
    } else if (direction === "prev") {
      nextIndex = currIndex - 1;
      if (nextIndex < 0) nextIndex = options.length - 1;
    }

    onChange(options[nextIndex].value);
  }, [onChange, options, selectedValue]);

  return (
    <Container>
      <ReactSelect
        value={value}
        onChange={handleChange}
        options={options}
        className="react-select"
        menuPlacement={menuPlacement}
      />
      {
        selectedValue && (
          <Arrows>
            <ArrowSvg onClick={() => onNavigate("prev")} role="button" className="button prev" />
            <ArrowSvg onClick={() => onNavigate("next")} role="button" className="button" />
          </Arrows>
        )
      }
    </Container>
  );
}

export default Select;
