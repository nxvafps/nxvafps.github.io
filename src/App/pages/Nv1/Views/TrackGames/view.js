import React, { useContext, useEffect, useState } from "react";

//Components
import { Title, Button } from "../../../../components";
import RankDisplay from "../../../../components/RankDisplay";

//Config
import supabase from "../../../../config";

//Contexts
import Nv1Context from "../../../../contexts/Nv1Context";

//Styles
import {
  Header,
  TitleContainer,
  PageContent,
  StartingRank,
  StartingRankText,
  Info,
  Text,
} from "./styles";

const TrackGames = () => {
  const [roleRank, setRoleRank] = useState("");
  const {
    setCurrentView,
    role,
    season,
    userId,
    tankRank,
    setTankRank,
    dpsRank,
    setDpsRank,
    supportRank,
    setSupportRank,
  } = useContext(Nv1Context);
  //const [map, setMap] = useState('');
  //const [mode, setMode] = useState('');
  const [formData, setFormData] = useState({
    userId: "",
    competitiveSeason: "",
    role: "",
    gameNumber: "",
    date: "",
    rankBeforeGame: "",
    myScore: "",
    enemyScore: "",
    result: "",
    srChange: "",
    rankAfterGame: "",
  });

  useEffect(() => {
    const setBaseFormData = () => {
      setFormData({
        userId: userId,
        competitiveSeason: season,
        role: role,
        gameNumber: "",
        date: "",
        rankBeforeGame: "",
        myScore: "",
        enemyScore: "",
        result: "",
        srChange: "",
        rankAfterGame: "",
      });
    };

    setBaseFormData();
    switch (role) {
      case "tank":
        setRoleRank(tankRank);
        break;
      case "dps":
        setRoleRank(dpsRank);
        break;
      case "support":
        setRoleRank(supportRank);
        break;
      default:
        setRoleRank("");
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      rankBeforeGame: roleRank,
    }));
  }, [
    season,
    userId,
    role,
    roleRank,
    tankRank,
    setTankRank,
    dpsRank,
    setDpsRank,
    supportRank,
    setSupportRank,
  ]);

  useEffect(() => {
    const now = new Date();
    const formattedDateTime = `${now
      .getFullYear()
      .toString()
      .slice(-2)}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(
      now.getDate()
    ).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}`;
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: formattedDateTime,
    }));
  }, []);

  useEffect(() => {
    const fetchGamesPlayed = async () => {
      const { data: gamesPlayed, error } = await supabase
        .from("games")
        .select("*")
        .eq("user_id", userId)
        .eq("competitive_season", season)
        .eq("role", role);

      if (error) {
        console.error("Error fetching games:", error);
        return;
      }

      setFormData((prevFormData) => ({
        ...prevFormData,
        gameNumber: gamesPlayed.length + 1,
      }));
    };

    fetchGamesPlayed();
  }, [userId, season, role]);

  return (
    <div>
      <Header>
        <Button
          margin="20px 0 0 0"
          text="Back"
          onClick={() => setCurrentView("roleSelect")}
        />
        <TitleContainer>
          <Title text="Track Game" />
        </TitleContainer>
      </Header>
      <PageContent>
        <Info>
          <Text>Season: {season},</Text>
          <Text>Role: {role},</Text>
          <Text>Game Number: {formData.gameNumber}</Text>
        </Info>
        <StartingRank>
          <StartingRankText>Starting Rank: </StartingRankText>
          <RankDisplay value={roleRank} />
        </StartingRank>
      </PageContent>
    </div>
  );
};

export default TrackGames;
