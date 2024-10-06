import React from "react";
import { useNavigate } from "react-router-dom";
import {
    ProjectContainer,
    ImgContainer,
    Img,
    TitleContainer,
    Title,
    Divider,
    DetailsContainer,
    Details
} from './styles';

const PortfolioLink = ({ project, basePath }) => {
    const logo = `${process.env.PUBLIC_URL}/${project.iconLocation}`;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${basePath}/${project.code}`);
    };

    return (
        <ProjectContainer onClick={handleClick}>
            <ImgContainer>
                <Img src={logo} alt="project logo" />
            </ImgContainer>
            <TitleContainer>
                <Title>{project.name}</Title>
                <Divider />
            </TitleContainer>
            <DetailsContainer>
                <Details>{project.details}</Details>
            </DetailsContainer>
        </ProjectContainer>
    );
};

export default PortfolioLink;
