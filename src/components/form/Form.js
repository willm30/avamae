import { useState } from "react";
import { formModel } from "./formModel";
import submitContact from "../../services/submitContact";
import Spacer from "../Spacer";
import { SubmitButton } from "./SubmitButton";
import AddressForm from "./AddressForm";
import CoreForm from "./CoreForm";
import Success from "./SuccessMsg";

export default function Form() {
  const formState = useState(formModel);
  const [errors, setErrors] = useState([]);
  const [address, setAddress] = useState(false);

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <CoreForm {...{ errors, setErrors, formState, address, setAddress }} />
        {address && <AddressForm {...{ errors, setErrors, formState }} />}
        <SubmitButton />
        {window.innerWidth > 390 && <Spacer />}
      </form>
      <Success />
    </>
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (!errors.length) submitContact(formState, setErrors);
    else {
      const errMsg = document.getElementById("errors-warn");
      errMsg.className = errMsg.className.replace("hidden", "");
    }
  }
}
