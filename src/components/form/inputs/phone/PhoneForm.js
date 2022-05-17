import { useState } from "react";
import AddNewPhone from "./AddNewPhone";
import PhoneInput from "./PhoneInput";

export default function PhoneForm({ errors, setErrors, formState }) {
  const [nums, setNums] = useState(1);
  return (
    <>
      <PhoneInput {...{ nums, errors, setErrors, formState }} />
      <AddNewPhone {...{ nums, setNums }} />
    </>
  );
}
