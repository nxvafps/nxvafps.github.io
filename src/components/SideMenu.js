import React from "react";
import NavButton from "./NavButton";
import styles from '../styles/components/SideMenu.module.scss';

const SideMenu = ({ isOpen, closeMenu }) => {
    return (
        <div className={`${styles.container} ${isOpen ? styles.open : ''}`}>
            <div className={styles.closeContainer}>
                <div className={styles.buttonContainer}>
                    <a href="javascript:void(0)" className={styles.closeButton} onClick={closeMenu}>&times;</a>
                </div>
            </div>
            <NavButton text='Home' href='/' onClick={closeMenu} />
            <NavButton text='Portfolio' href='/portfolio' onClick={closeMenu} />
            <NavButton text='Socials' href='/socials' onClick={closeMenu} />
            <hr className={styles.divider} onClick={closeMenu} />
            <NavButton text='Login' href='/login' onClick={closeMenu} />
            <NavButton text='Sign Up' href='/signup' onClick={closeMenu} />
        </div>
    )
}

export default SideMenu;
