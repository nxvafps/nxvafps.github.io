import styled from 'styled-components';

const ProjectContainer = styled.div`
    display: grid;
    grid-template: auto 1fr / 25% 75%;
    gap: 5px;
    border: solid 1px transparent;
    transition: border-color 0.3s ease;
    cursor: pointer;
    padding: 0 5px;
    margin: 10px 0;

    &:hover {
        border-color: #FFF;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
        text-align: center;
    }
`;

const ImgContainer = styled.div`
    grid-column: 1;
    grid-row: 2;
    align-self: center;
    padding: 0 0 5px 5px;

    @media (max-width: 768px) {
        grid-column: 1;
        grid-row: 1;
        padding: 0;
    }
`;

const Img = styled.img`
    width: 125px;
    display: block;
    margin: 0;

    @media (max-width: 768px) {
        width: 100px;
        margin: 0 auto;
    }
`;

const TitleContainer = styled.div`
    padding: 5px;
    grid-column: span 2;
    grid-row: 1;

    @media (max-width: 768px) {
        grid-column: 1;
        grid-row: 2;
        padding: 0;
    }
`;

const Title = styled.h3`
    font-size: 20px;
    text-align: center;
    color: #ffffff;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

const Divider = styled.hr`
    margin: 10px 0;
`;

const DetailsContainer = styled.div`
    padding: 0 5px 5px 0;
    grid-column: 2;
    grid-row: 2;
    color: #ffffff;

    @media (max-width: 768px) {
        grid-column: 1;
        grid-row: 3;
        padding: 0;
    }
`;

const Details = styled.p`
    text-align: center;
`;

export { ProjectContainer, ImgContainer, Img, TitleContainer, Title, Divider, DetailsContainer, Details };