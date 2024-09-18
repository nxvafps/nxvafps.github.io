import React, { useState, useEffect } from 'react';
import styles from '../styles/MobileNavigation.module.scss';
import logo from '../assets/images/icons/novaLogo.png';
import supabase from '../config/supabaseClient';
import SideMenu from './SideMenu';

const MobileNavigation = () => {
    const [session, setSession] = useState(null);
    const [user, setUser] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setUser(session?.user);
        });

        return () => subscription.unsubscribe();
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <img className={styles.headerLogo} src={logo} alt='logo'></img>
                <p className={styles.headerText}>novaFPS</p>
            </div>
            <div className={styles.headerRight}>
                <button className={styles.hamburger} onClick={toggleMenu}>
                    {isMenuOpen ? '✖' : '☰'}
                </button>
            </div>
            {isMenuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
            <SideMenu isOpen={isMenuOpen} closeMenu={closeMenu} />
        </div>
    );
};

export default MobileNavigation;
