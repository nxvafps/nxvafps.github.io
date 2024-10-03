import React, { useEffect, useState } from "react";

//Assets
import banner from '../../assets/icons/novaBanner.png';

//Components
import { Title, Subtitle } from "../../components/Titles/Titles";
import YoutubeEmbed from "../../components/YoutubeEmbed/YoutubeEmbed";
import PortfolioLink from "../../components/PortfolioLink/PortfolioLink";

//Config
import supabase from "../../config/supabaseClient";

//Styles
import styles from './Home.module.scss';


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
            <Title text='Welcome' />
            <div className={styles.intro}>
                Here you'll find my web development portfolio showcasing the projects I have completed, along with the ones I'm currently working on!
                But that's not all! I am also using this space to celebrate my love of gaming. Explore my content from youtube, twitter, and tiktok and join me on my adventures!
                tay a while, explore, and let’s create something amazing together!
            </div>
            <div className={styles.skillShowcase}>
                <Subtitle textAlign="left" text='Current Project' underline />
                {fetchError && (<p>{fetchError}</p>)}
                {projects && (
                    <div className="projectContainer">
                        {projects.map(project => (
                            <PortfolioLink key={project.id} project={project} basePath={""}/>
                        ))}
                    </div>
                )}
                <Subtitle textAlign="left" text='Latest Upload' underline />
                <YoutubeEmbed />
            </div>
        </>
    );
};

export default Home;