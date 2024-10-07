import { useState } from "react";
import supabase from "../../../config";

const useDisplayNameValidation = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const validateDisplayName = async (newDisplayName) => {
    if (newDisplayName.length < 3 || newDisplayName.length > 15) {
      setErrorMessage("Display name must be between 3 and 15 characters long");
      return false;
    }

    if (/\s/.test(newDisplayName)) {
      setErrorMessage("Display name must not contain spaces");
      return false;
    }

    const { data: displayNameExists } = await supabase
      .from("auth.users")
      .select("user_metadata->display_name")
      .eq("user_metadata->display_name", newDisplayName)
      .single();

    if (displayNameExists) {
      setErrorMessage("Display name already in use");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  return { errorMessage, validateDisplayName };
};

export default useDisplayNameValidation;
