const inputRequired = string => (/.+/.test(string) ? true : `${string} is required`);

module.exports = {
  inputRequired,
};
