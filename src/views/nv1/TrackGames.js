import React, { useContext, useEffect, useState } from "react";
import styles from '../../styles/views/nv1/TrackGames.module.scss';
import PageTitle from "../../components/PageTitle";
import Nv1Context from "../../context/Nv1Context";

const TrackGames = () => {
    const [roleRank, setRoleRank] = useState('');
    const { setCurrentView, role, season, userId, tankRank, setTankRank, dpsRank, setDpsRank, supportRank, setSupportRank } = useContext(Nv1Context);
    useEffect(() => {
        switch (role) {
            case 'tank':
                setRoleRank(tankRank);
                break;
            case 'dps':
                setRoleRank(dpsRank);
                break;
            case 'support':
                setRoleRank(supportRank);
                break;
            default:
                setRoleRank('');
        }
    }, [tankRank, setTankRank, dpsRank, setDpsRank, supportRank, setSupportRank])
    

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
                <h3>{userId}</h3>
                <h4>{roleRank}</h4>
            </div>
        </div>
    )
}

export default TrackGames;