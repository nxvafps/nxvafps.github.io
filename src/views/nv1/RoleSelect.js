import React, { useContext } from "react";
import PageTitle from "../../components/PageTitle";
import styles from '../../styles/views/nv1/RoleSelect.module.scss';
import tank from '../../assets/images/nv1/roles/tank.png';
import dps from '../../assets/images/nv1/roles/dps.png';
import support from '../../assets/images/nv1/roles/support.png';
import Nv1Context from "../../context/Nv1Context";
import RankDisplay from "../../components/nv1/RankDisplay";

const RoleSelect = () => {
    const {setCurrentView, setRole, tankRank, setTankRank, dpsRank, setDpsRank, supportRank, setSupportRank} = useContext(Nv1Context);
    
    const handleRoleSelect = (role, rank) => {
        setRole(role);
        if (rank == null) {
            setCurrentView('rankSelect');
        } else {
            setCurrentView('trackGames');
        }
    };
    console.log(dpsRank);

    return (
        <div>
            <div className={styles.titleContainer}>
                <button className={styles.backButton} onClick={() => setCurrentView('home')}>Back</button>
                <div className={styles.title}>
                    <PageTitle text='Role Select'/>
                </div>
            </div>
            <div className={styles.pageContent}>
                <p className={styles.text}>Select a role you would like to track games for:</p>
                <div className={styles.roleIcons}>
                    <div className={styles.tankIcon}>
                        <img src={tank} alt="tankIcon" onClick={() => handleRoleSelect('tank', tankRank)} />
                        <RankDisplay value={tankRank} />
                    </div>
                    <div className={styles.dpsIcon}>
                        <img src={dps} alt='dpsIcon' onClick={() => handleRoleSelect('dps', dpsRank)} />
                        <RankDisplay value={dpsRank} />
                    </div>
                    <div className={styles.supportIcon}>
                        <img src={support} alt='supportIcon' onClick={() => handleRoleSelect('support', supportRank)} />
                        <RankDisplay value={supportRank} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoleSelect;