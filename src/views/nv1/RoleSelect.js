import React, { useState, useEffect } from "react";
import PageTitle from "../../components/PageTitle";
import styles from '../../styles/views/nv1/RoleSelect.module.scss';
import tank from '../../assets/images/nv1/roleIcons/Tank icon@1x.png';
import dps from '../../assets/images/nv1/roleIcons/DPS icon@1x.png';
import support from '../../assets/images/nv1/roleIcons/Support icon@1x.png';

const RoleSelect = ({setCurrentView, setRole, ranks}) => {
    const [tankRank, setTankRank] = useState('');
    const [dpsRank, setDpsRank] = useState('');
    const [supportRank, setSupportRank] = useState('');

    useEffect(() => {
        if(ranks.tank == null) {
            setTankRank('unranked');
        }
    
        if(ranks.dps == null) {
            setDpsRank('unranked');
        }
    
        if(ranks.support == null) {
            setSupportRank('unranked');
        }
    }, [ranks]);
    
    const handleRoleSelect = (role) => {
        setRole(role);
        setCurrentView('trackGames');
    };

    return (
        <div>
            <div className={styles.titleContainer}>
                <button className={styles.backButton} onClick={() => setCurrentView('home')}>Back</button>
                <div className={styles.title}>
                    <PageTitle text='Overwatch Tools'/>
                </div>
            </div>
            <div className={styles.pageContent}>
                <p className={styles.text}>Select a role you would like to track games for:</p>
                <div className={styles.roleIcons}>
                    <img src={tank} alt="tankIcon" className={styles.tankIcon} onClick={() => handleRoleSelect('tank')} />
                    <img src={dps} alt='dpsIcon' className={styles.dpsIcon} onClick={() => handleRoleSelect('dps')} />
                    <img src={support} alt='supportIcon' className={styles.supportIcon} onClick={() => handleRoleSelect('support')} />
                    <p className={styles.tankRank}>{tankRank}</p>
                    <p className={styles.dpsRank}>{dpsRank}</p>
                    <p className={styles.supportRank}>{supportRank}</p>
                </div>
            </div>
        </div>
    )
}

export default RoleSelect;