import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavlink = styled(Link)`
    font-size: 20px;
    text-decoration: none;
    padding: 10px;
    background-color: #434343;
    color: #ffffff;
    width: 100%;
    text-align: center;
    &:hover {
        background-color: #ffffff;
        color: #434343;
    }
`;

export default StyledNavlink;