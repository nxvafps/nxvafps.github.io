import React, { useContext } from "react";

//Components
import { Title, Button } from "../../../../components";

//Contexts
import Nv1Context from "../../../../contexts";

//Styles
import { PageContent, Text, ButtonContainer } from "./style";

const Home = () => {
  const { setCurrentView } = useContext(Nv1Context);
  return (
    <div>
      <Title text="Overwatch Tools" />
      <PageContent>
        <Text>Press the track games button to track a new game</Text>
        <ButtonContainer>
          <Button
            width="300px"
            text="Track Games"
            onClick={() => setCurrentView("roleSelect")}
          />
        </ButtonContainer>
      </PageContent>
    </div>
  );
};

export default Home;
