const validateDisplayName = (newDisplayName) => {
  if (newDisplayName.length < 3 || newDisplayName.length > 15) {
    return "Display name must be between 3 and 15 characters long";
  }

  if (/\s/.test(newDisplayName)) {
    return "Display name must not contain spaces";
  }

  return "";
};

export default validateDisplayName;
