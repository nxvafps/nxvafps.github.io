import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/NavButton.module.scss'

const NavButton = ({text, href}) => {
    return (
        <Link className={styles.navLink} to={href}>{text}</Link>
    );
}

export default NavButton;