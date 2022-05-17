import { validateTel } from "../../../../utilities/form";
import Input from "../Input";

export default function PhoneInput({ nums, errors, setErrors, formState }) {
  const [formVals, setFormVals] = formState;

  return [...Array(nums).keys()].map((n) => {
    const num = n < 9 ? `0${n + 1}` : n + 1;
    return (
      <Input
        key={`pn${n}`}
        id={`PhoneNumbers[${n}]`}
        label={`Phone number ${num}`}
        type="tel"
        maxLength={20}
        minLength={5}
        optional
        errors={errors}
        onChange={handlePhoneChange}
        onBlur={(e) => validateTel(e, n, errors, setErrors)}
      />
    );
  });

  function handlePhoneChange(e) {
    const { id, value } = e.target;
    const num = Number(id.match(/[0-9]+/)[0]);
    let newArr = formVals["PhoneNumbers"];
    if (value === "")
      newArr = [...newArr.slice(0, num - 1), ...newArr.slice(num - 1)];
    else newArr[num] = value;
    const updatedForm = Object.assign(formVals, {
      PhoneNumbers: newArr,
    });
    setFormVals(updatedForm);
  }
}
