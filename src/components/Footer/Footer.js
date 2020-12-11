import React from 'react'
import { FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa'
import { Container } from '../../globalStyles'

import {
    FooterSec,
    FooterSection,
    Social,
    Title,
    SocialIcons,
    SocialIcon,
    Location,
    Text,
    SubText
} from './styles'

const Footer = () => {
    return (
        <>
            <FooterSec>
                <Container>
                    <FooterSection>
                        <Social>
                            <Title>Social media</Title>
                        <SocialIcons>
                            <SocialIcon>
                                <FaFacebook />
                            </SocialIcon>
                            <SocialIcon>
                                <FaInstagram />
                            </SocialIcon>
                            <SocialIcon>
                                <FaYoutube />
                            </SocialIcon>
                        </SocialIcons>
                        </Social>
                        
                        <Location>
                            <Title>Our Location</Title>
                            <Text>Mathare North Area 4,</Text>
                            <SubText>Off Thika Road</SubText>
                        </Location>
                    </FooterSection>                                        
                </Container>
            </FooterSec>            
        </>
    )
}

export default Footer
