import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Event } from '../../components'

import { Container, Loader } from '../../globalStyles'

import EventForm from '../../components/Forms/EventForm'

import {
    EventsSection,
    EventsHeader,
    Title,
    EventContainer,
    EventAdd
} from './styles'
import { CircularProgress } from '@material-ui/core'
import { FaPlusSquare } from 'react-icons/fa'



const Events = () => {

    const [events, setEvents] = useState([])
    const [eventForm, setEventForm] = useState(false)

    useEffect(() => {
        const fetchEvents = async () => {
            await axios.get('http://localhost:5000/events')
                .then(response => setEvents(response.data))
        }
        fetchEvents()
    }, [events])

    const click = () => {
        setEventForm(true)
    }

    return (
        <>
            {
                eventForm ? <EventForm /> : 
                <EventsSection>
                <Container>
                <EventsHeader>
                    <Title>Our Events</Title>
                        <EventAdd>
                            <FaPlusSquare onClick={ click } />
                        </EventAdd>           
                </EventsHeader>
                    <EventContainer>
                        {!events.length ? <Loader><CircularProgress /></Loader> : (
                            events.map((event) => <Event event={event} />)
                        )}                        
                    </EventContainer>
                </Container>
            </EventsSection>            
                    
            }
        </>
    )
}

export default Events
