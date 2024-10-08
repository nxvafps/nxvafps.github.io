import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../config";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const session = supabase.auth.session();
    setUser(session?.user ?? null);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  const signIn = async (email, password) => {
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) {
      setErrorMessage("Failed to sign in");
      throw error;
    }
    setUser(user);
    navigate("/account");
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      navigate("/");
    } catch (error) {
      setErrorMessage("Failed to sign out");
      throw error; // Re-throw the error to handle it in the component
    }
  };

  const signUp = async (email, password) => {
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setErrorMessage("Failed to sign up");
      throw error;
    }
    setUser(user);
    navigate("/account");
  };

  const resetPassword = async (email) => {
    try {
      await supabase.auth.api.resetPasswordForEmail(email);
    } catch (error) {
      setErrorMessage("Failed to reset password");
      throw error;
    }
  };

  const signInWithOtp = async (email) => {
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          shouldCreateUser: false,
          emailRedirectTo: "https://novafps.com",
        },
      });
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      setErrorMessage(error.message);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        signUp,
        resetPassword,
        signInWithOtp,
        errorMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
