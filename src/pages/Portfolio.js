import React from "react";
import PageTitle from "../components/PageTitle";
import PortfolioLink from "../components/PortfolioLink";
import styles from '../styles/pages/Portfolio.module.scss';
import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react"

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
            <PageTitle text='Portfolio' />
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