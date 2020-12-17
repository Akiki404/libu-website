import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CircularProgress } from '@material-ui/core'

import { Activity } from '../../components'
import { FaAngleRight } from 'react-icons/fa'

import { Loader, Container } from '../../globalStyles'

import {
    DramaSection,
    DramaHeader,
    Title,
    SubTitle, 
    ActivitiesSection,
    ActivitiesHeader,
    Heading,
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

    const [activities, setActivities] = useState([])

    useEffect(() => {
        const fetchActivities = async () => {
            await axios.get('http://localhost:5000/drama-group')
                .then(response => setActivities(response.data))
        }
        fetchActivities()
    }, [activities])

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
                        <ActivitiesHeader>
                            <Heading>Our Activities</Heading>
                        </ActivitiesHeader>
                        <ActivityLinks>
                            <Button>All<FaAngleRight /></Button>
                            <Button>Indoors<FaAngleRight /></Button>
                            <Button>Academics<FaAngleRight /></Button>
                            <Button>Community<FaAngleRight /></Button>
                        </ActivityLinks>
                    </ActivitiesSection>    

                    {!activities.length ? <Loader><CircularProgress /></Loader> : (
                        <DramaContainer>   
                            {activities.map((activity) => <Activity activity={ activity } />)}
                        </DramaContainer>
                    )}
                    
                </Container>
            </DramaSection>            
        </>
    )
}

export default Drama
