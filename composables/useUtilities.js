export const useUtilities = () => {
  // Capitalize the first letter of each word in a string
  const toCapitalize = (str) => {
    return str.replace(/\w\S*/g, (w) =>
      w.replace(/^\w/, (c) => c.toUpperCase())
    );
  };

  return {
    toCapitalize,
  };
};
