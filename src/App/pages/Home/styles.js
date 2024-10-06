import styled from 'styled-components';

const Banner = styled.img`
    width: 100%;
`;

const Intro = styled.div`
    width: 60%;
    max-width: 600px;
    color: #ffffff;
    margin: 0 auto 30px auto;
    text-align: center;
`;

const SkillShowcase = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    max-width: 700px;
    margin: auto;
`;

export { Banner, Intro, SkillShowcase };
