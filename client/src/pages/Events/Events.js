import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Event } from '../../components'

import { Container, Loader } from '../../globalStyles'

import {
    EventsSection,
    EventsHeader,
    Title,
    SubTitle,
    EventContainer,
} from './styles'

import { CircularProgress } from '@material-ui/core'

const Events = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const fetchEvents = async () => {
            await axios.get('http://localhost:5000/events')
                .then(response => setEvents(response.data))
        }
        fetchEvents()
    }, [events])

    return (
        <>
            <EventsSection>
                <Container>
                <EventsHeader>
                       <Title>Our Coming Events</Title>
                        <SubTitle>Check out our coming events</SubTitle>
                    </EventsHeader>
                    <EventContainer>
                        {!events.length ? <Loader><CircularProgress /></Loader> : (
                            events.map((event) => <Event event={event} />)                            
                        )}                       
                    </EventContainer>
                </Container>
            </EventsSection>            
        </>
    )
}

export default Events
