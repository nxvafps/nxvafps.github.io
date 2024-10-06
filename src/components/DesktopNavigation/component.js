import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';

//Assets
import logo from '../../assets/icons/novaLogo.png';

//Components
import Footer from '../Footer/Footer';
import NavButton from "../NavButton/NavButton";

//Contexts
import AuthContext from '../../contexts/AuthContext';

//Styles
import styles from './DesktopNavigation.module.scss';


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