import React from "react";

//Styles
import StyledNavlink from './style';


const NavButton = ({text, href, onClick}) => {
    return (
        <StyledNavlink to={href} onClick={onClick}>{text}</StyledNavlink>
    );
}

export default NavButton;