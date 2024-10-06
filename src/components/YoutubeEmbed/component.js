import React from "react";
import { EmbedContainer, YtEmbed } from './styles';

const YoutubeEmbed = () => {
    return (
        <EmbedContainer>
            <YtEmbed 
                title="Youtube Embed"
                src="https://www.youtube-nocookie.com/embed?listType=playlist&list=UU71xx-BAbLPGbJsWu4WhPHQ" 
                allowFullScreen=""
            >
            </YtEmbed>
        </EmbedContainer>
    )
}

export default YoutubeEmbed;
