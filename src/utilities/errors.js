// Format errors received from server.
export function formatErrors(e) {
  return e.response.data.Errors.reduce((p, c) => {
    const field = c.FieldName;
    const replacedField = field.replace("AddressDetails.", "");
    return [...p, { [replacedField]: c.MessageCode }];
  }, []);
}

// If error in errors array with id, return error
export function isError(errors, id) {
  if (errors) {
    return errors.filter((o) => {
      return Object.keys(o)[0] == id;
    })[0];
  }
}

export function addSpace(str) {
  return str.replace(/_/g, " ");
}
