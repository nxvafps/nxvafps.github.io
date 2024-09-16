import React from "react";
import { useNavigate } from "react-router-dom";
import styles from '../styles/PortfolioLink.module.scss'

const PortfolioLink = ({project, basePath}) => {
    const logo = `${process.env.PUBLIC_URL}/${project.iconLocation}`;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${basePath}/${project.code}`);
    };

    return (
        <div className={styles.projectContainer} onClick={handleClick}>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={logo} alt="project logo"/>
            </div>
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>{project.name}</h3>
                <hr />
            </div>
            <div className={styles.detailsContainer}>
                <p className={styles.details}>{project.details}</p>
            </div>
        </div>    
    )
}

export default PortfolioLink;