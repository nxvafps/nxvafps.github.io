import React, { useContext } from "react";

//Assets
import { tank, dps, support } from "../../Assets";

//Components
import { Title, Button } from "../../../../components";
import RankDisplay from "../../components";

//Contexts
import Nv1Context from "../../../../contexts/Nv1Context";

//Styles
import {
  Header,
  TitleContainer,
  PageContent,
  Text,
  Tank,
  Dps,
  Support,
  TankRole,
  DpsRole,
  SupportRole,
  TankButton,
  DpsButton,
  SupportButton,
  RoleIcons,
} from "./styles";

const RoleSelect = () => {
  const { setCurrentView, setRole, tankRank, dpsRank, supportRank } =
    useContext(Nv1Context);

  const handleRoleSelect = (role, rank) => {
    setRole(role);
    if (rank == null) {
      setCurrentView("rankSelect");
    } else {
      setCurrentView("trackGames");
    }
  };

  const handleChangeRank = (role) => {
    setRole(role);
    setCurrentView("rankSelect");
  };

  return (
    <div>
      <Header>
        <Button
          margin="20px 0 0 0"
          text="Back"
          onClick={() => setCurrentView("home")}
        />
        <TitleContainer>
          <Title text="Role Select" />
        </TitleContainer>
      </Header>
      <PageContent>
        <Text>Select a role you would like to track games for:</Text>
        <RoleIcons>
          <Tank>
            <TankButton onClick={() => handleRoleSelect("tank", tankRank)}>
              <img src={tank} alt="tankIcon" />
              <RankDisplay value={tankRank} />
            </TankButton>
            <Button
              margin="5px 0 0 0"
              fontSize="15px"
              text="Change Rank"
              onClick={() => handleChangeRank("tank")}
            />
          </Tank>

          <Dps>
            <DpsButton onClick={() => handleRoleSelect("dps", dpsRank)}>
              <img src={dps} alt="dpsIcon" />
              <RankDisplay value={dpsRank} />
            </DpsButton>
            <Button
              margin="5px 0 0 0"
              fontSize="15px"
              text="Change Rank"
              onClick={() => handleChangeRank("dps")}
            />
          </Dps>

          <Support>
            <SupportButton
              onClick={() => handleRoleSelect("support", supportRank)}
            >
              <img src={support} alt="supportIcon" />
              <RankDisplay value={supportRank} />
            </SupportButton>
            <Button
              margin="5px 0 0 0"
              fontSize="15px"
              text="Change Rank"
              onClick={() => handleChangeRank("support")}
            />
          </Support>
        </RoleIcons>
      </PageContent>
    </div>
  );
};

export default RoleSelect;
