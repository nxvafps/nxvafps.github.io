import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    height: 80px;
    width: 80%;
    margin: 40px auto 0 auto;
    gap: 20px;
`;

const Image = styled.img`
    height: 60px;
`;

const LinkStyled = styled.a`
    &:hover {
        background-color: #7b7777;
    }
`;

const OtherLinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin: auto;
`;

const OtherLink = styled(Link)`
    color: #ffffff;
    margin: 0 0 30px 0;

    &:hover {
        color: #434343;
    }

`;

export { FooterContainer, Image, LinkStyled, OtherLinksContainer, OtherLink};