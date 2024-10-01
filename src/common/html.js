export const html = (strings, ...values) => {
  return strings.reduce((result, string, i) => {
    return result + string + (values[i] || "");
  }, "");
};
