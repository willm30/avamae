import AddressSelect from "./inputs/AddressSelect";
import PhoneForm from "./inputs/phone/PhoneForm";
import MessageInput from "./inputs/TextArea";
import TextInput from "./inputs/TextInput";
import "./core-form.css";
export default function CoreForm({
  errors,
  setErrors,
  formState,
  address,
  setAddress,
}) {
  const [formVals, setFormVals] = formState;
  return (
    <>
      <span id="errors-warn" className="error err-msg hidden">
        Remove errors from form before submitting.
      </span>
      <div className="name-email">
        <TextInput
          label="Full name"
          {...{ errors, setErrors, formState, handleChange }}
        />
        <TextInput
          label="Email address"
          {...{ errors, setErrors, formState, handleChange }}
          type="email"
        />
      </div>
      <PhoneForm {...{ errors, setErrors, formState }} />
      <MessageInput {...{ handleChange }} />
      <AddressSelect {...{ address, setAddress, formState }} />
    </>
  );

  function handleChange(e) {
    const { id, value } = e.target;
    const updatedForm = Object.assign(formVals, { [id]: value });
    setFormVals(updatedForm);
  }
}
