import ReactToggle from "react-toggle";
import "react-toggle/style.css";

interface Props {
  checked: boolean;
  onChange: (value: boolean) => void;
}

function Toggle({
  checked,
  onChange
}: Props): JSX.Element {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined = (e): void => {
    const value = e.target.checked;
    onChange(value);
  };
  return (
    <ReactToggle checked={checked} onChange={handleChange} />
  );
}

export default Toggle;
