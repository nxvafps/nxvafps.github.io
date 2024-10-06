import React from "react";
import { Link } from "react-router-dom";

//Assets
import * as icons from './assets';

//Styles
import { FooterContainer, Image, LinkStyled, OtherLinksContainer, OtherLink } from "./styles";


const Footer = () => {
    return (
        <>
            <FooterContainer>

                <LinkStyled href='https://www.youtube.com/@nxvafps' target='_blank' rel="noreferrer"> 
                    <Image alt='Youtube Icon' src={ icons.youtube }/> 
                </LinkStyled>

                <LinkStyled href='https://www.x.com/nxvafps' target='_blank' rel="noreferrer">
                    <Image alt='Twitter Icon' src={ icons.twitter }/>
                </LinkStyled>

                <LinkStyled href='https://www.tiktok.com/@nxvafps' target='_blank' rel="noreferrer">
                    <Image alt='Tiktik Icon' src={ icons.tiktok }/>
                </LinkStyled>

                <LinkStyled href='https://www.twitch.com/nxvafps' target='_blank' rel="noreferrer">
                    <Image alt='Twitch Icon' src={ icons.twitch }/>
                </LinkStyled>

                <LinkStyled href='https://www.discord.gg/tSNujPdzAu' target='_blank' rel="noreferrer">
                    <Image alt='Discord Icon' src={ icons.discord }/>
                </LinkStyled>

            </FooterContainer>
            
            <OtherLinksContainer>
                <OtherLink to={'/privacypolicy'}>Privacy Policy</OtherLink>
                <OtherLink to={'/termsofservice'}>Terms Of Service</OtherLink>
            </OtherLinksContainer>
        </>
    )
}

export default Footer;