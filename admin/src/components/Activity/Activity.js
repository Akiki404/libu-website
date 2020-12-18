import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

import { CTAEdit, CTADanger } from '../../globalStyles'

import {
    ActivityCard,
    Img, 
    CardHeader,
    CardTitle,
    ActivityLink,
    CardBody,
    CardDesc,
    CardFooter,
    Cta
} from './styles'

const Activity = ({activity, handleDelete}) => {
    return (
        <>
            <ActivityCard>
                <Img src={activity.image} />
                <CardHeader>
                    <CardTitle>
                        <ActivityLink>
                            {activity.title}
                        </ActivityLink>
                    </CardTitle>
                    </CardHeader>
                <CardBody>
                    <CardDesc>{activity.description}</CardDesc>
                </CardBody>
                <CardFooter>
                    <Cta>
                        <CTAEdit><FaEdit /> </CTAEdit>
                        <CTADanger onClick={() => handleDelete(activity._id)}><FaTrash /></CTADanger>
                    </Cta>
                </CardFooter>
            </ActivityCard>            
        </>
    )
}

export default Activity
