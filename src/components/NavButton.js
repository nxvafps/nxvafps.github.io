import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/NavButton.module.scss'

const NavButton = ({text, href, onCLick}) => {
    return (
        <Link className={styles.navLink} to={href} onClick={onCLick}>{text}</Link>
    );
}

export default NavButton;