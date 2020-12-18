import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CircularProgress } from '@material-ui/core'
import { Activity } from '../../components'
import ActivityForm from '../../components/Forms/ActivityForm'

import { FaAngleRight, FaPlusSquare } from 'react-icons/fa'

import { Container, Loader } from '../../globalStyles'

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
    DramaContainer,
    ActivityAdd
} from './styles'


const Drama = () => {

    const [activities, setActivities] = useState([])
    const [activityForm, setActivityForm] = useState(false)

    const click = () => {
        setActivityForm(true)
    }

    
    useEffect(() => {
        const fetchActivities = async () => {
            await axios.get('http://localhost:5000/drama-group')
                .then(response => setActivities(response.data))
        }
        fetchActivities()
    }, [activities])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/drama-group/${id}`)
        activities.filter((activity) => activity._id !== id)
        setActivities(activities)
    }

    return (
        <>
            {activityForm ? <ActivityForm /> : (
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
                            <ActivityAdd onClick={click}>
                                <FaPlusSquare />
                            </ActivityAdd>
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
                            {activities.map((activity) => <Activity handleDelete={handleDelete} activity={activity} />)}
                        </DramaContainer>

                    )}
                    
                </Container>
            </DramaSection>
            )}            
        </>
    )
}

export default Drama
