// types
import { IInputProps } from "../../types";

// styles
import "./Input.css";

export default function Input({
  type,
  name,
  id,
  checked,
  placeholder,
  icon,
  handleChange,
}: IInputProps) {
  return (
    <div className={"inputSection"}>
      {icon && <div className={"inputSection__icon"}>{icon}</div>}
      <input
        type={type}
        name={name}
        id={id}
        checked={checked}
        placeholder={placeholder}
        onChange={(e) => handleChange && handleChange(e)}
        className={`inputSection__input ${
          !icon ? "inputSection__input_isIcon" : ""
        }`}
      />
    </div>
  );
}
