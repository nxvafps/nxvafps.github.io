import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from '../styles/components/MobileNavigation.module.scss';
import logo from '../assets/images/icons/novaLogo.png';
import SideMenu from './SideMenu';
import Footer from './Footer';

const MobileNavigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.header} ${isMenuOpen ? styles.menuOpen : ''}`}>
                <div className={styles.headerLeft}>
                    <img className={styles.headerLogo} src={logo} alt='logo'></img>
                    <p className={styles.headerText}>novaFPS</p>
                </div>
                <div className={styles.headerRight}>
                <button className={`${styles.hamburgerMenu} ${isMenuOpen ? 'styles.open' : ''}`} onClick={toggleMenu}>&#9776;</button>
                </div>
            </div>
            <SideMenu isOpen={isMenuOpen} closeMenu={closeMenu} />
            <div className={`${styles.mainContent} ${isMenuOpen ? styles.menuOpen : ''}`} onClick={closeMenu}>
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default MobileNavigation;
