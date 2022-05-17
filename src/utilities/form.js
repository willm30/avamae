export function validateName(e, errors, setErrors) {
  const { value, id } = e.target;
  const nums = value.match(/[0-9]+/);
  const msg = { [id]: "Field should not contain numbers." };
  if (nums) errors ? setErrors([...errors, msg]) : setErrors([msg]);
  else {
    const updatedErrs = errors ? errors.filter((e) => !e[id]) : [];
    setErrors(updatedErrs);
  }
}

export function validateTel(e, n, errors, setErrors) {
  const { value } = e.target;
  const chars = value.match(/[a-zA-Z]+/);
  const key = `PhoneNumbers[${n}]`;
  const msg = { [key]: "Phone number should not contain letters." };
  if (chars) errors ? setErrors([...errors, msg]) : setErrors([msg]);
  else {
    const updatedErrs = errors ? errors.filter((e) => !e[key]) : [];
    setErrors(updatedErrs);
  }
}

export function removeErrMsg(e, errors, setErrors) {
  const { id } = e.target;
  const updatedErrs = errors ? errors.filter((e) => !e[id]) : [];
  setErrors(updatedErrs);
}

export function labelToId(label) {
  let arr;
  if (label.includes(" ")) arr = label.split(" ");
  else if (label.includes("/")) arr = label.split("/");
  else return label;
  const capitalised = arr.map((w) => w.slice(0, 1).toUpperCase() + w.slice(1));
  return capitalised.join("");
}

export function showLoadingSpinner(reveal = true) {
  const submitBtn = document.getElementsByClassName("unsubmitted")[0];
  const spinner = document.getElementsByClassName("loading")[0];

  if (reveal) {
    spinner.className = spinner.className.replace("hidden", "");
    submitBtn.className += " " + "hidden";
  } else {
    spinner.className += " " + "hidden";
    submitBtn.className = submitBtn.className.replace("hidden", "");
  }
}

export function hideForm() {
  const contactForm = document.getElementsByClassName("contact-form")[0];
  const successMsg = document.getElementsByClassName("success-msg")[0];
  contactForm.className += " " + "hidden";
  successMsg.className = successMsg.className.replace("hidden", "");
}
