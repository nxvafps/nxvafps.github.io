import React, { useContext } from "react";

//Assets
import tank from '../../../../assets/images/nv1/roles/tank.png';
import dps from '../../../../assets/images/nv1/roles/dps.png';
import support from '../../../../assets/images/nv1/roles/support.png';

//Components
import PageTitle from "../../../../components/PageTitle/PageTitle";
import RankDisplay from "../../../../components/nv1/RankDisplay/RankDisplay";

//Contexts
import Nv1Context from "../../../../contexts/Nv1Context";

//Styles
import styles from './RoleSelect.module.scss';


const RoleSelect = () => {
    const {setCurrentView, setRole, tankRank, dpsRank, supportRank } = useContext(Nv1Context);
    
    const handleRoleSelect = (role, rank) => {
        setRole(role);
        if (rank == null) {
            setCurrentView('rankSelect');
        } else {
            setCurrentView('trackGames');
        }
    };

    const handleChangeRank = (role) => {
        setRole(role);
        setCurrentView('rankSelect');
    }
    

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
                    <div className={styles.tank}>
                        <div className={styles.tankButton} onClick={() => handleRoleSelect('tank', tankRank)}>
                            <img src={tank} alt="tankIcon" />
                            <RankDisplay value={tankRank} />
                        </div>
                        <button className={styles.changeRank} onClick={() => handleChangeRank('tank')}>Change Rank</button>
                    </div>

                    <div className={styles.dps}>
                        <div className={styles.dpsButton} onClick={() => handleRoleSelect('dps', dpsRank)}>
                            <img src={dps} alt='dpsIcon' />
                            <RankDisplay value={dpsRank} />
                        </div>
                        <button className={styles.changeRank} onClick={() => handleChangeRank('dps')}>Change Rank</button>
                    </div>
                    <div className={styles.support}>
                        <div className={styles.supportButton} onClick={() => handleRoleSelect('support', supportRank)}>
                            <img src={support} alt='supportIcon' />
                            <RankDisplay value={supportRank} />
                        </div>
                        <button className={styles.changeRank} onClick={() => handleChangeRank('support')}>Change Rank</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoleSelect;