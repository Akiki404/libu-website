import React from 'react'


import {
    EventCard,
    CardHeader,
    CardTitle,
    EventLink,
    CardDate,
    CardBody,
    CardDesc
} from './styles'


const Event = ({ event }) => {
    return (
        <>
            <EventCard>
                <CardHeader>
                    <CardTitle>
                        <EventLink>
                            {event.title}
                        </EventLink>
                    </CardTitle>
                    <CardDate>Date: {event.date.toString()}</CardDate>
                    </CardHeader>
                <CardBody>
                    <CardDesc>{event.content}</CardDesc>
                </CardBody>
            </EventCard>
        </>
    )
}

export default Event
