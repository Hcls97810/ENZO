export function convertApiResponseToErrorString(response) {
  let errStr = "";
  /*
   * Most errors returned by DRF tend to be formed as such:
   * {
   *  "detail": error
   * }
   *
   * Validation errors returned by DRF tend to be formed as such:
   * {
   *  "fieldName": [error1, error2, ...],
   *  ...
   * }
   */
  Object.entries(response).forEach(entry => {
    if (Array.isArray(entry) && entry.length > 1) {
      const fieldName = entry[0];
      const err = entry[1];
      if (
        fieldName === "detail" &&
        (typeof err === "string" || err instanceof String)
      ) {
        // Typical errors will be a simple string mapped by the key "detail"
        errStr += `${err}\n`;
      } else if (Array.isArray(err) && err.length) {
        // Validation errors will be an array of strings mapped by a field name or the key "non_field_errors"
        for (let i = 0; i < err.length; i++) {
          errStr += `${err[i]}\n`;
        }
      }
    }
  });
  return errStr || "Oops! Something went wrong.";
}
