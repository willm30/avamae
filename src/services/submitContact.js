import axios from "axios";
import { formModel } from "../components/form/formModel";
import { contactEndpoint, root } from "../utilities/api";
import { formatErrors } from "../utilities/errors";
import { hideForm, showLoadingSpinner } from "../utilities/form";

export default async function submitContact(formState, setErrors) {
  const [formVals, setFormVals] = formState;

  try {
    showLoadingSpinner();
    await axios.post(`${root}${contactEndpoint}`, formVals);
    setFormVals(formModel);
    hideForm();
  } catch (e) {
    showLoadingSpinner(false);
    console.error(new Error(e.message));
    setErrors(formatErrors(e));
  }
}
