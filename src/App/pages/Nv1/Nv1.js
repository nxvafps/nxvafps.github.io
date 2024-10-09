import React, { useContext, useState, useEffect, useMemo } from "react";

//Components
import { Title, NavButton } from "../../components";

//Configs
import supabase from "../../config";

//Contexts
import AuthContext from "../../contexts";
import Nv1Context from "../../contexts/Nv1Context";

//Styles
import { ButtonContainer } from "./styles";

//Views
import { Home, RankSelect, RoleSelect, TrackGames } from "./Views";

const Nv1 = () => {
  const season = process.env.REACT_APP_COMPETETIVE_SEASON;
  const { user } = useContext(AuthContext);
  const [currentView, setCurrentView] = useState("home");
  const [role, setRole] = useState("");
  const [userId, setUserId] = useState(null);
  const [tankRank, setTankRank] = useState("");
  const [dpsRank, setDpsRank] = useState("");
  const [supportRank, setSupportRank] = useState("");

  useEffect(() => {
    const fetchUserId = async () => {
      if (user) {
        setUserId(user.id);
        if (user.id) {
          await onRanksTable(user.id);
        }
      }
    };

    const onRanksTable = async (userId) => {
      try {
        const { data: onRankTable } = await supabase
          .from("user_ranks")
          .select("user_id")
          .eq("user_id", userId);

        if (onRankTable.length > 0) {
          const { data: ranks } = await supabase
            .from("user_ranks")
            .select("*")
            .eq("user_id", userId);
          setTankRank(ranks[0].tank);
          setDpsRank(ranks[0].dps);
          setSupportRank(ranks[0].support);
        } else {
          await supabase.from("user_ranks").insert({ user_id: userId });
        }
      } catch (error) {
        console.error("Error fetching ranks:", error);
      }
    };

    fetchUserId();
  }, [user]);

  const contextValue = useMemo(
    () => ({
      setCurrentView,
      userId,
      season,
      role,
      setRole,
      tankRank,
      setTankRank,
      dpsRank,
      setDpsRank,
      supportRank,
      setSupportRank,
    }),
    [userId, season, role, tankRank, dpsRank, supportRank]
  );

  if (!user) {
    return (
      <div>
        <Title text="You need to sign in to access this project" />
        <ButtonContainer>
          <NavButton text="Sign Up" href="/signUp" />
          <NavButton text="Login" href="/login" />
        </ButtonContainer>
      </div>
    );
  }

  return (
    <Nv1Context.Provider value={contextValue}>
      {currentView === "home" && <Home />}
      {currentView === "roleSelect" && <RoleSelect />}
      {currentView === "rankSelect" && <RankSelect />}
      {currentView === "trackGames" && <TrackGames />}
    </Nv1Context.Provider>
  );
};

export default Nv1;
