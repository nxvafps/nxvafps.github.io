import React from "react";
import { Link } from "react-router-dom";

//Styles
import styles from './style';


const NavButton = ({text, href, onClick}) => {
    return (
        <Link className={styles.navButton} to={href} onClick={onClick}>{text}</Link>
    );
}

export default NavButton;