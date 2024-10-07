import { useState } from "react";
import supabase from "../../../../config";

const useResendEmail = (email) => {
  const [resendError, setErrorMessage] = useState("");

  const resendEmail = async () => {
    setErrorMessage("");
    const { error } = await supabase.auth.resend({
      type: "signup",
      email: `${email}`,
      options: {
        emailRedirectTo: "https://novafps.com/login",
      },
    });
    if (error) {
      setErrorMessage(
        "Error resending verification email, please wait 60 seconds and then try again"
      );
    }
  };

  return { resendEmail, resendError };
};

export default useResendEmail;
