import React from "react";
import styles from '../../styles/views/nv1/TrackGames.module.scss';
import PageTitle from "../../components/PageTitle";

const TrackGames = ({setCurrentView, role, season, user}) => {
    return (
        <div>
            <div className={styles.titleContainer}>
                <button className={styles.backButton} onClick={() => setCurrentView('roleSelect')}>Back</button>
                <div className={styles.title}>
                    <PageTitle text='Overwatch Tools'/>
                </div>
            </div>
            <div className={styles.pageContent}>
                <h1>{role}</h1>
                <h2>{season}</h2>
                <h3>{user}</h3>
            </div>
        </div>
    )
}

export default TrackGames;