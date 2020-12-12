import React from 'react'
import { Event } from '../../components'

import { Container } from '../../globalStyles'

import {
    EventsSection,
    EventsHeader,
    Title,
    SubTitle,
    EventContainer,
} from './styles'

import {
    eventData1,
    eventData2,
    eventData3,
    eventData4,
    eventData5,
    eventData6
} from './Data'

const Events = () => {
    return (
        <>
            <EventsSection>
                <Container>
                <EventsHeader>
                       <Title>Our Coming Events</Title>
                        <SubTitle>Check out our coming events</SubTitle>
                    </EventsHeader>
                    <EventContainer>
                        <Event {...eventData1} />
                        <Event {...eventData2} />
                        <Event {...eventData3} />
                        <Event {...eventData4} />
                        <Event {...eventData5} />
                        <Event {...eventData6} />
                    </EventContainer>
                </Container>
            </EventsSection>            
        </>
    )
}

export default Events
