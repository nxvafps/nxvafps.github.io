import React, { useContext } from 'react';
import styles from '../styles/components/DesktopNavigation.module.scss';
import NavButton from "./NavButton";
import logo from '../assets/images/icons/novaLogo.png';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import AuthContext from '../context/AuthContext';

const DesktopNavigation = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <img className={styles.headerLogo} src={logo} alt='logo'></img>
                    <p className={styles.headerText}>novaFPS</p>    
                    <hr className={styles.divider} />
                    <nav className={styles.headerNav}>
                        <div className={styles.buttonContainer}>
                            <NavButton text="Home" href="/" />
                        </div>
                        <div className={styles.buttonContainer}>
                            <NavButton text="Portfolio" href="/portfolio" />
                        </div>
                        <div className={styles.buttonContainer}>
                            <NavButton text="Socials" href="/socials" />
                        </div>
                    </nav>
                </div>
                <div className={styles.headerRight}>
                    {user ? (
                        <div className={styles.buttonContainer}>
                            <NavButton text="Account" href="/account" />
                        </div>
                    ) : (
                        <>
                            <div className={styles.buttonContainer}>
                                <NavButton text="Sign Up" href="/signup" />
                            </div>
                            <div className={styles.buttonContainer}>
                                <NavButton text="Login" href="/login" />
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className={styles.mainContent}>
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default DesktopNavigation;