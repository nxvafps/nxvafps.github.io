import React from "react";
import PageTitle from "../components/PageTitle";
import PageSubtitle from "../components/PageSubtitle";
import YoutubeEmbed from "../components/YoutubeEmbed";
import PortfolioLink from "../components/PortfolioLink";
import banner from '../assets/images/icons/novaBanner.png';
import styles from '../styles/pages/Home.module.scss';
import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";

const Home = () => {
    const [fetchError, setFetchError] = useState(null);
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .eq('current', 'y')
                .limit(1);

            if (error) {
                setFetchError('Could not fetch projects')
                setProjects(null)
                console.log(error)
            }
            if (data) {
                setProjects(data)
                setFetchError(null)
            }
        };

        fetchProjects();

    }, []);

    return (
        <>
            <img className={styles.banner} src={banner} alt="nova banner" />
            <PageTitle text='Welcome' />
            <div className={styles.intro}>
                Here you'll find my web development portfolio showcasing the projects I have completed, along with the ones I'm currently working on!
                But that's not all! I am also using this space to celebrate my love of gaming. Explore my content from youtube, twitter, and tiktok and join me on my adventures!
                tay a while, explore, and let’s create something amazing together!
            </div>
            <div className={styles.skillShowcase}>
                <PageSubtitle textAlign="left" text='Current Project' underline />
                {fetchError && (<p>{fetchError}</p>)}
                {projects && (
                    <div className="projectContainer">
                        {projects.map(project => (
                            <PortfolioLink key={project.id} project={project} basePath={""}/>
                        ))}
                    </div>
                )}
                <PageSubtitle textAlign="left" text='Latest Upload' underline />
                <YoutubeEmbed />
            </div>
        </>
    );
};

export default Home;