import { labelToId, validateName, removeErrMsg } from "../../../utilities/form";
import Input from "./Input";

export default function TextInput({
  label,
  errors,
  setErrors,
  formState,
  optional = false,
  blur = true,
  focus = false,
  handleChange = null,
  type = "text",
}) {
  const id = labelToId(label);
  const [formVals, setFormVals] = formState;
  if (focus || type == "email") blur = false;
  focus = true;

  return (
    <Input
      {...{ label, type, id, errors, optional }}
      onChange={handleChange ? handleChange : handleAddressChange}
      onBlur={blur ? (e) => validateName(e, errors, setErrors) : null}
      onFocus={focus ? (e) => removeErrMsg(e, errors, setErrors) : null}
    />
  );

  function handleAddressChange(e) {
    const { id, value } = e.target;
    const updatedForm = Object.assign(formVals, {
      AddressDetails: Object.assign(formVals.AddressDetails, {
        [id]: value,
      }),
    });
    setFormVals(updatedForm);
  }
}
