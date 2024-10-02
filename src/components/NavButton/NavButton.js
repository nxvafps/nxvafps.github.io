import React from "react";
import { Link } from "react-router-dom";

//Styles
import styles from './NavButton.module.scss';


const NavButton = ({text, href, onClick}) => {
    return (
        <Link className={styles.navLink} to={href} onClick={onClick}>{text}</Link>
    );
}

export default NavButton;