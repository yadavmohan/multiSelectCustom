export const isFormValid = (...formData) => {
  return formData.some((state) => {
    if (Array.isArray(state)) {
      return state.length === 0;
    } else if (typeof state === "string") {
      return state.trim() === "";
    }
  });
};

export const numberOptions = Array.from(
  { length: 100 },
  (_, index) => index + 1
);
