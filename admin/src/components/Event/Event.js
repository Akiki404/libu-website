import React from 'react'



import { FaEdit, FaTrash } from 'react-icons/fa'

import { CTAEdit, CTADanger } from '../../globalStyles'



import {
    EventCard,
    CardHeader,
    CardTitle,
    EventLink,
    CardDate,
    CardBody,
    CardDesc, 
    CardFooter,
    Cta
} from './styles'

const Event = ({ event, handleDelete }) => {   
    return (
        <>
            <EventCard>
                <CardHeader>
                    <CardTitle>
                        <EventLink>
                            {event.title}
                        </EventLink>
                    </CardTitle>
                    <CardDate>Date: {event.date.substring(0, 10)}</CardDate>
                    </CardHeader>
                <CardBody>
                    <CardDesc>{event.content}</CardDesc>
                </CardBody>
                <CardFooter>
                    <Cta>
                        <CTAEdit><FaEdit /> </CTAEdit>
                        <CTADanger onClick={() => { handleDelete(event._id) }}><FaTrash/></CTADanger>
                    </Cta>
                </CardFooter>
            </EventCard>
        </>
    )
}

export default Event
