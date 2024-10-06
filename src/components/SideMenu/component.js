import React, { useContext } from "react";

//Components
import NavButton from "../NavButton/NavButton";

//Contexts
import AuthContext from "../../contexts/AuthContext";

//Styles
import styles from './SideMenu.module.scss';


const SideMenu = ({ isOpen, closeMenu }) => {
    const { user } = useContext(AuthContext);

    return (
        <div className={`${styles.container} ${isOpen ? styles.open : ''}`}>
            <div className={styles.closeContainer}>
                <div className={styles.buttonContainer}>
                    <a href="" className={styles.closeButton} onClick={closeMenu}>&times;</a>
                </div>
            </div>
            <NavButton text='Home' href='/' onClick={closeMenu} />
            <NavButton text='Portfolio' href='/portfolio' onClick={closeMenu} />
            <NavButton text='Socials' href='/socials' onClick={closeMenu} />
            <hr className={styles.divider} onClick={closeMenu} />
            {user ? (
                <NavButton text='Account' href='/account' onClick={closeMenu} />
            ) : (
                <>
                    <NavButton text='Login' href='/login' onClick={closeMenu} />
                    <NavButton text='Sign Up' href='/signup' onClick={closeMenu} />
                </>
            )}
            
        </div>
    )
}

export default SideMenu;
