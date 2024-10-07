import React from "react";

// Components
import { Title, PortfolioLink } from "../../../components";

// Styles
import { ProjectContainer } from "./styles";

// Custom Hook
import useFetchProjects from "./hooks";

const Portfolio = () => {
  const { fetchError, projects } = useFetchProjects();

  return (
    <div>
      <Title text="Portfolio" />
      {fetchError && <p>{fetchError}</p>}
      {projects && (
        <ProjectContainer>
          {projects.map((project) => (
            <PortfolioLink key={project.id} project={project} basePath={""} />
          ))}
        </ProjectContainer>
      )}
    </div>
  );
};

export default Portfolio;
