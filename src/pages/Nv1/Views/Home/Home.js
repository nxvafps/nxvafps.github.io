import React, { useContext } from "react";

//Components
import { Title } from "../../../../components/Titles/Titles";
import { Button } from '../../../../components/Inputs/Inputs';

//Contexts
import Nv1Context from "../../../../contexts/Nv1Context";

//Styles
import styles from './Home.module.scss';


const Home = () => {
    const { setCurrentView } = useContext(Nv1Context);
    return (
        <div>
            <Title text='Overwatch Tools'/>
            <div className={styles.pageContent}>
                <p className={styles.text}>Press the track games button to track a new game</p>
                <div className={styles.buttonContainer}>
                    <Button width="300px" text='Track Games' onClick={() => setCurrentView('roleSelect')} />
                </div>
            </div>
        </div>
    )
}

export default Home;