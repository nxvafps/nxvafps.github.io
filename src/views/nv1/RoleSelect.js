import React from "react";
import PageTitle from "../../components/PageTitle";
import styles from '../../styles/views/nv1/roleSelect.module.scss';
import tank from '../../assets/images/nv1/roleIcons/Tank icon@1x.png';
import dps from '../../assets/images/nv1/roleIcons/DPS icon@1x.png';
import support from '../../assets/images/nv1/roleIcons/Support icon@1x.png';

const RoleSelect = ({setCurrentView}) => {
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
                    <img src={tank} alt="tankIcon" className={styles.tankIcon} />
                    <img src={dps} alt='dpsIcon' className={styles.dpsIcon} />
                    <img src={support} alt='supportIcon' className={styles.supportIcon} />
                </div>
            </div>
        </div>
    )
}

export default RoleSelect;