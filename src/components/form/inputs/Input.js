import { addSpace, isError } from "../../../utilities/errors";
import "./input.css";

export default function Input({
  label,
  type,
  onChange,
  id,
  className = "text-input",
  errors,
  optional,
  maxLength,
  minLength,
  onBlur,
  onFocus,
}) {
  const error = isError(errors, id);
  return (
    <label className={`label ${type == "checkbox" ? "checkbox" : ""}`}>
      <span>
        {label}
        {optional && <span className="optional">- optional </span>}
        {error && <span className="err-msg">{addSpace(error[id])}</span>}
      </span>
      <input
        {...{ type, onChange, id, maxLength, minLength, onBlur, onFocus }}
        required={optional ? false : true}
        className={`${className} ${error ? "error" : ""}`}
      />
    </label>
  );
}
