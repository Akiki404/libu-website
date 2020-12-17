import React from 'react'

import {
    ActivityCard,
    Img, 
    CardHeader,
    CardTitle,
    ActivityLink,
    CardBody,
    CardDesc
} from './styles'

const Activity = ({activity}) => {
    return (
        <>
            <ActivityCard>
                <Img src={activity.image} loading="lazy" />
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
            </ActivityCard>            
        </>
    )
}

export default Activity
