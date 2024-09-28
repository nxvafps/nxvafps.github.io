import React, { useContext, useEffect } from "react";
import PageTitle from "../../components/PageTitle";
import styles from '../../styles/views/nv1/RoleSelect.module.scss';
import tank from '../../assets/images/nv1/roles/tank.png';
import dps from '../../assets/images/nv1/roles/dps.png';
import support from '../../assets/images/nv1/roles/support.png';
import Nv1Context from "../../context/Nv1Context";

const RoleSelect = () => {
    const {setCurrentView, setRole, tankRank, setTankRank, dpsRank, setDpsRank, supportRank, setSupportRank} = useContext(Nv1Context);

    useEffect(() => {
        if(tankRank == null) {
            setTankRank('unranked');
        }
    
        if(dpsRank == null) {
            setDpsRank('unranked');
        }
    
        if(supportRank == null) {
            setSupportRank('unranked');
        }
    }, [tankRank, dpsRank, supportRank, setTankRank, setDpsRank, setSupportRank]);
    
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