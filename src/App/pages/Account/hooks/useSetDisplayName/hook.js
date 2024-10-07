import { useState } from "react";
import supabase from "../../../config";

const useSetDisplayName = (setDisplayName) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleSetDisplayName = async (newDisplayName, validateDisplayName) => {
    const isValid = await validateDisplayName(newDisplayName);
    if (!isValid) return;

    const { error } = await supabase.auth.updateUser({
      data: { display_name: newDisplayName },
    });

    if (error) {
      setErrorMessage("There was an issue setting the display name");
    } else {
      setDisplayName(newDisplayName);
      setErrorMessage("");
    }
  };

  return { errorMessage, handleSetDisplayName };
};

export default useSetDisplayName;
