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
    SubText,
    Posts,
    PostTitle,
    PostsBody,
    Events, 
    EventsBody, 
    EventTitle,
    CopyRight,
    Copy
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

                        <Posts>
                            <Title>Latest Posts</Title>
                            <PostsBody>
                                <PostTitle>Read Books</PostTitle>
                                <PostTitle>Read Books</PostTitle>
                                <PostTitle>Read Books</PostTitle>
                                <PostTitle>Read Books</PostTitle>
                            </PostsBody>                            
                        </Posts>

                        <Events>
                            <Title>Coming Events</Title>
                            <EventsBody>
                                <EventTitle>End year party</EventTitle>
                                <EventTitle>End year party</EventTitle>
                                <EventTitle>End year party</EventTitle>
                                <EventTitle>End year party</EventTitle>
                            </EventsBody>
                        </Events>
                    </FooterSection> 
                    
                    <CopyRight>
                        <Copy>&copy; MYSA Mathare North Library 2020</Copy>
                    </CopyRight>
                </Container>
            </FooterSec>            
        </>
    )
}

export default Footer
