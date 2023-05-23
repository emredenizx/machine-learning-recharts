import { HexColorPicker, HexColorInput } from "react-colorful";
import { useCallback, useRef, useState } from "react";
import { useClickOutside } from "hooks";
import { Wrapper, Preview, PickerWrapper } from "./ColorPicker.styles";

interface Props {
  defaultColor: string | undefined;
  onColorPick: (color: string) => void;
}

function ColorPicker({
  defaultColor = "#000",
  onColorPick = () => undefined
}: Props): JSX.Element {
  const [showPicker, setShowPicker] = useState(false);
  const [color, setColor] = useState(defaultColor);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const hidePicker = useCallback(() => setShowPicker(false), []);
  useClickOutside(ref.current, hidePicker);

  const handleSetColor = (color: string): void => {
    setColor(color);
    clearTimeout(timeoutRef.current as number);
    timeoutRef.current = window.setTimeout(() => onColorPick(color), 300);
  };

  return (
    <Wrapper ref={ref}>
      <Preview color={color} onClick={() => setShowPicker((s) => !s)} />
      <HexColorInput color={color} onChange={handleSetColor} />
      {
        showPicker && (
          <PickerWrapper>
            <HexColorPicker color={color} onChange={handleSetColor} />
          </PickerWrapper>
        )
      }
    </Wrapper>
  );
}

export default ColorPicker;
