import React, { useContext } from "react";
import PageTitle from "../../components/PageTitle";
import styles from '../../styles/views/nv1/Home.module.scss';
import Nv1Context from "../../context/Nv1Context";

const Home = () => {
    const { setCurrentView } = useContext(Nv1Context);
    return (
        <div>
            <PageTitle text='Overwatch Tools'/>
            <div className={styles.pageContent}>
                <p className={styles.text}>Press the track games button to track a new game</p>
                <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={() => setCurrentView('roleSelect')}>Track game</button>
                </div>
            </div>
        </div>
    )
}

export default Home;