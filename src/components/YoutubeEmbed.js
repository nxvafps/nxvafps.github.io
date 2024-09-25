import React from "react";
import styles from '../styles/components/YoutubeEmbed.module.scss';

const YoutubeEmbed = () => {
    return (
        <div className={styles.embedContainer}>
            <iframe 
            title="Youtube Embed"
                className={styles.ytEmbed} 
                src="https://www.youtube-nocookie.com/embed?listType=playlist&amp;list=UU71xx-BAbLPGbJsWu4WhPHQ" 
                allowFullScreen=""
            >
            </iframe>
        </div>
    )
}

export default YoutubeEmbed;