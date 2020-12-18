import React, { useState, useEffect } from 'react'
import axios from 'axios'

import AlumniForm from '../../components/Forms/AlumniForm'

import { CircularProgress } from '@material-ui/core'

import { FaPlusSquare } from 'react-icons/fa'
import { Alumnus } from '../../components'

import { Container, Loader } from '../../globalStyles'

import {
    AlumniWrapper,
    AlumniHeader,
    Title,
    AlumniAdd,
    AlumniSection
} from './styles'


const Alumni = () => {

    const [alumniForm, setAlumniForm] = useState(false)
    const [alumni, setAlumni] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/alumni/')
            .then(response => setAlumni(response.data))
            .catch((error) => console.log(error.message))
    }, [alumni])

    const click = () => {
        setAlumniForm(true)
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/alumni/${id}`)
        alumni.filter((alumnus) => alumnus._id !== id)
        setAlumni(alumni)
    }

    return (
        <>
            {
                alumniForm ? <AlumniForm /> :
                    <AlumniWrapper>
                        <Container>
                            <AlumniHeader>
                                <Title>Alumni</Title>
                                <AlumniAdd onClick={click}>
                                    <FaPlusSquare />
                                </AlumniAdd>
                            </AlumniHeader>
                            {!alumni.length ? <Loader> <CircularProgress /> </Loader> : (
                                <AlumniSection>
                                    {alumni.map((alumnus) =>
                                        <Alumnus alumnus={alumnus} handleDelete={handleDelete}/>
                                    )}
                                </AlumniSection>
                            )}
                        </Container>
                    </AlumniWrapper>
            }
        </>
    )
}
    

export default Alumni
