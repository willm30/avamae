import Input from "./Input";

export default function AddressSelect({ address, setAddress, formState }) {
  const [formVals, setFormVals] = formState;
  return (
    <Input
      label="Add address details"
      type="checkbox"
      className="check"
      optional
      onChange={handleAddressSelect}
    />
  );
  function handleAddressSelect() {
    setAddress(!address);
    const updatedForm = Object.assign(formVals, {
      bIncludeAddressDetails: !address,
    });
    setFormVals(updatedForm);
  }
}
