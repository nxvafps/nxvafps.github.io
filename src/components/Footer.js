import React from "react";
import { Link } from "react-router-dom";
import youtube from '../assets/images/icons/youtubeIcon.png';
import twitter from '../assets/images/icons/twitterIcon.png';
import tiktok from '../assets/images/icons/tiktokIcon.png';
import twitch from '../assets/images/icons/twitchIcon.png';
import discord from '../assets/images/icons/discordIcon.png';
import styles from '../styles/Footer.module.scss'

const Footer = () => {
    return (
        <>
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
        </>
    )
}

export default Footer;