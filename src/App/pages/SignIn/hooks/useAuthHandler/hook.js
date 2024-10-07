import { useState } from "react";
import { useAuth } from "../../../../../stores/contexts";
import supabase from "../../../../../config";

const useAuthHandler = () => {
  const [identifierError, setIdentifierError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { signIn } = useAuth();

  const Login = async (identifier, password) => {
    setIdentifierError("");
    setPasswordError("");
    setErrorMessage("");

    if (!identifier || !password) {
      setErrorMessage("Please enter a Username/Email and a password.");
      if (!identifier) setIdentifierError("Please enter a Username/Email.");
      if (!password) setPasswordError("Please enter a password.");
      return;
    }

    try {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailPattern.test(identifier)) {
        await signIn(identifier, password);
      } else {
        const { data: usernameCheck, error: checkUsernameError } =
          await supabase
            .from("usernames")
            .select("email")
            .eq("displayName", identifier);

        if (checkUsernameError) {
          setErrorMessage("There was an issue checking your details.");
          return;
        } else if (usernameCheck.length === 0) {
          setIdentifierError("This username does not exist.");
          return;
        } else {
          await signIn(usernameCheck[0].email, password);
        }
      }
    } catch (error) {
      setErrorMessage("Failed to sign in.");
      console.error("Sign-in error:", error);
    }
  };

  return {
    identifierError,
    passwordError,
    errorMessage,
    Login,
  };
};

export default useAuthHandler;
