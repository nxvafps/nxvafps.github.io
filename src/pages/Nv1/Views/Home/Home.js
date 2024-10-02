import React, { useContext } from "react";

//Components
import PageTitle from "../../../../components/PageTitle/PageTitle";

//Contexts
import Nv1Context from "../../../../contexts/Nv1Context";

//Styles
import styles from './Home.module.scss';


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