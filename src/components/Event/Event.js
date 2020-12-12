import React from 'react'
import moment from 'moment'

import { FaAngleRight } from 'react-icons/fa'

import {
    EventCard,
    CardHeader,
    CardTitle,
    EventLink,
    CardDate,
    CardBody,
    CardDesc
} from './styles'


const Event = ({ title, date, content }) => {
    return (
        <>
            <EventCard>
                <CardHeader>
                    <CardTitle>
                        <EventLink>
                            {title}<FaAngleRight />
                        </EventLink>
                    </CardTitle>
                    <CardDate>Date: {date.toString()}</CardDate>
                    </CardHeader>
                <CardBody>
                    <CardDesc>{content}</CardDesc>
                </CardBody>
            </EventCard>
        </>
    )
}

export default Event
