import { useState, useEffect } from "react";
import { useAuth } from "../../../stores/contexts";

const useFetchUserData = () => {
  const { user } = useAuth();
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        setDisplayName(user.user_metadata.display_name || "");
      }
      setLoading(false);
    };

    fetchUserData();
  }, [user]);

  return { displayName, loading };
};

export default useFetchUserData;
