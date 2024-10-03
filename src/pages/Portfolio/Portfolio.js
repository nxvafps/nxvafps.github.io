import React, { useEffect, useState } from "react";

//Components
import { Title } from "../../components/Titles/Titles";
import PortfolioLink from "../../components/PortfolioLink/PortfolioLink";

//Config
import supabase from "../../config/supabaseClient";

//Styles
import styles from './Portfolio.module.scss';


const Portfolio = () => {
    const [fetchError, setFetchError] = useState(null);
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            const { data, error } = await supabase
                .from('projects')
                .select('*')

            if (error) {
                setFetchError('Could not fetch projects');
                setProjects(null);
                console.log(error);
            }
            if (data) {
                setProjects(data);
                setFetchError(null);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div>
            <Title text='Portfolio' />
            {fetchError && (<p>{fetchError}</p>)}
            {projects && (
                <div className={styles.projectContainer}>
                    {projects.map(project => (
                        <PortfolioLink key={project.id} project={project} basePath={""} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Portfolio;