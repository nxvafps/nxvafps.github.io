import React from "react";
import PageTitle from "../components/PageTitle";
import supabase from "../config/supabaseClient";
import { useState, useEffect } from 'react';
import NavButton from "../components/NavButton";
import styles from '../styles/Nv1.module.scss';
import dps from '../assets/images/nv1/roleIcons/DPS icon@1x.png';
import support from '../assets/images/nv1/roleIcons/Support icon@1x.png';
import tank from '../assets/images/nv1/roleIcons/Tank icon@1x.png';

const Nv1 = () => {
    const [session, setSession] = useState(null);
    const [trackGames, setTrackGames] = useState(false);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [])

    const trackGame = () => {
        setTrackGames(true);
    }

    const trackGameBack = () => {
        setTrackGames(false);
    }

    if(!session) {
        return (
            <div>
                <PageTitle text='You need to sign in to access this project' />
                <div className={styles.buttonContainer}>
                    <NavButton text="Sign Up" href="/signUp" />
                    <NavButton text="Login" href="/login" />
                </div>
            </div>
        )
    } else if (!trackGames) {
        return (
            <div>
                <PageTitle text='Overwatch Tools'/>
                <div className={styles.pageContent}>
                    <p className={styles.text}>Press the track games button to track a new game</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button} onClick={trackGame}>Track game</button>
                    </div>
                </div>
            </div>
        )
    } else if (trackGames){
        return (
            <div>
                <div className={styles.titleContainer}>
                    <button className={styles.backButton} onClick={trackGameBack}>Back</button>
                    <div className={styles.title}>
                        <PageTitle text='Overwatch Tools'/>
                    </div>
                </div>
                <div className={styles.pageContent}>
                    <p className={styles.text}>Select a role you would like to track games for:</p>
                    <div className={styles.roleIcons}>
                        <img src={tank} alt="tankIcon" className={styles.tankIcon} />
                        <img src={dps} alt='dpsIcon' className={styles.dpsIcon} />
                        <img src={support} alt='supportIcon' className={styles.supportIcon} />
                    </div>
                </div>
            </div>
        )
    }
};

export default Nv1;
