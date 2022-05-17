import TextInput from "./inputs/TextInput";
import "./address-form.css";

export default function AddressForm({ errors, setErrors, formState }) {
  return (
    <div className="address">
      <div className="address-line1">
        <TextInput
          label={"Address line 1"}
          {...{ errors, setErrors, formState }}
          blur={false}
        />
        <TextInput
          label={"Address line 2"}
          {...{ errors, setErrors, formState }}
          optional
          blur={false}
        />
      </div>
      <div className="address-line2">
        <div className="town-state">
          <TextInput
            label={"City/Town"}
            {...{ errors, setErrors, formState }}
          />
          <TextInput
            label={"State/County"}
            {...{ errors, setErrors, formState }}
          />
        </div>
        <div className="pc-country">
          <TextInput
            label={"Postcode"}
            {...{ errors, setErrors, formState }}
            focus
          />
          <TextInput label={"Country"} {...{ errors, setErrors, formState }} />
        </div>
      </div>
    </div>
  );
}
