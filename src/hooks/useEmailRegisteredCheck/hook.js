import { useState, useEffect } from "react";
import { supabase } from "../../config";

const useEmailRegisteredCheck = (email) => {
  const [emailRegistered, setEmailRegistered] = useState(null);
  const [loading, setLoading] = useState(true);
  const [emailRegisteredError, setEmailRegisteredError] = useState(null);

  useEffect(() => {
    const checkEmail = async () => {
      try {
        const { data } = await supabase
          .from("usernames")
          .select("email")
          .eq("email", email)
          .single();

        if (data) {
          setEmailRegistered(data);
        } else {
          setEmailRegisteredError("This email isn't registered");
        }
      } catch (error) {
        setEmailRegisteredError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (email) {
      checkEmail();
    }
  }, [email]);

  return { emailRegistered, loading, emailRegisteredError };
};

export default useEmailRegisteredCheck;
