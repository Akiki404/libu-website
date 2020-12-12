import React from 'react'
import { Activity } from '../../components'
import { FaAngleRight } from 'react-icons/fa'

import { Container } from '../../globalStyles'

import {
    DramaSection,
    DramaHeader,
    Title,
    SubTitle, 
    ActivitiesSection,
    ActivityLinks,
    Button,
    DramaContainer
} from './styles'

import {
    activityData1,
    activityData2,
    activityData3,
    activityData4,
    activityData5,
    activityData6
} from './Data'

const Drama = () => {
    return (
        <>
            <DramaSection>
                <Container>
                <DramaHeader>
                    <Title>Big Dream Africa Drama Group</Title>
                    <SubTitle>
                            In the Drama Group, we are standing on the shoulders of those who came before us.
                             The pioneers of this awesome family.
                            Setting a path for the coming generations will have a long-lasting impact on their 
                            lives and the community.                        
                    </SubTitle>
                </DramaHeader>

                    <ActivitiesSection>
                        <ActivityLinks>
                            <Button>Indoors<FaAngleRight /></Button>
                            <Button>Academics<FaAngleRight /></Button>
                            <Button>Community<FaAngleRight /></Button>
                        </ActivityLinks>
                    </ActivitiesSection>    

                    <DramaContainer>
                        <Activity {...activityData1} />
                        <Activity {...activityData2} />
                        <Activity {...activityData3} />
                        <Activity {...activityData4} />
                        <Activity {...activityData5} />
                        <Activity { ...activityData6 } />
                    </DramaContainer>
                </Container>
            </DramaSection>            
        </>
    )
}

export default Drama
