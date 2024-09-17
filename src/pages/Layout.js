import React from 'react';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import supabase from '../config/supabaseClient';
import logo from '../assets/images/icons/novaLogo.png';
import NavButton from '../components/NavButton';
import styles from '../styles/Layout.module.scss';
import youtube from '../assets/images/icons/youtubeIcon.png';
import twitter from '../assets/images/icons/twitterIcon.png';
import tiktok from '../assets/images/icons/tiktokIcon.png';
import twitch from '../assets/images/icons/twitchIcon.png';
import discord from '../assets/images/icons/discordIcon.png';

const Layout = () => {
    const [session, setSession] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
            setUser(session?.user)
        })



        return () => subscription.unsubscribe()
    }, [])
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <div className={styles.headerInfo}>
                        <img className={styles.headerLogo} src={logo} alt='logo'></img>
                        <p className={styles.headerText}>novaFPS</p>
                    </div>
                    <hr className={styles.divider} />
                    <nav className={styles.headerNav}>
                        <NavButton text="Home" href="/" />
                        <NavButton text="Portfolio" href="/portfolio" />
                        <NavButton text="Socials" href="/socials" />
                    </nav>
                </div>
                {user ? (
                        <div className={styles.headerRight}>
                            <NavButton text="Account" href="/account" />
                        </div>
                    ) : (
                        <div className={styles.headerRight}>
                            <NavButton text="Sign Up" href="/signup" />
                            <NavButton text="Login" href="/login" />
                        </div>
                    )}
            </div>
            <Outlet />
            <footer className={styles.footer}>
                <a className={styles.link} href='https://www.youtube.com/@nxvafps' target='_blank' rel="noreferrer" ><img alt='Youtube Icon' className={styles.image} src={ youtube }/></a>
                <a className={styles.link} href='https://www.x.com/nxvafps' target='_blank' rel="noreferrer" ><img alt='Twitter Icon' className={styles.image} src={ twitter }/></a>
                <a className={styles.link} href='https://www.tiktok.com/@nxvafps' target='_blank' rel="noreferrer" ><img alt='Tiktik Icon' className={styles.image} src={ tiktok }/></a>
                <a className={styles.link} href='https://www.twitch.com/nxvafps' target='_blank' rel="noreferrer" ><img alt='Twitch Icon' className={styles.image} src={ twitch }/></a>
                <a className={styles.link} href='https://www.discord.gg/tSNujPdzAu' target='_blank' rel="noreferrer" ><img alt='Discord Icon' className={styles.image} src={ discord }/></a>
            </footer>
            <div className={styles.otherLinksContainer}>
                <Link className={styles.otherLinks} to={'/privacypolicy'}>Privacy Policy</Link>
                <Link className={styles.otherLinks} to={'/termsofservice'}>Terms Of Service</Link>
            </div>
        </div>
    )
};

export default Layout;