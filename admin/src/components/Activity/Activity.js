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

const Activity = ({ img, title, content }) => {
    return (
        <>
            <ActivityCard>
                <Img src={img} />
                <CardHeader>
                    <CardTitle>
                        <ActivityLink>
                            {title}
                        </ActivityLink>
                    </CardTitle>
                    </CardHeader>
                <CardBody>
                    <CardDesc>{content}</CardDesc>
                </CardBody>
            </ActivityCard>            
        </>
    )
}

export default Activity
