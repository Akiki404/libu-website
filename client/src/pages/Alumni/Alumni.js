import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { CircularProgress } from '@material-ui/core'

import { Alumnus } from '../../components'


import { Container, Loader } from '../../globalStyles'

import {
    AlumniWrapper,
    AlumniHeader,
    Title,
    SubTitle,
    AlumniSection
} from './styles'


const Alumni = () => {

    const [alumni, setAlumni ] = useState([])

    useEffect(() => {
        const fetchAlumni = async () => {
            await axios.get('http://localhost:5000/alumni')
                .then(response => setAlumni(response.data))
        }

        fetchAlumni()
    }, [alumni])
    return (
        <>
            <AlumniWrapper>
                <Container>
                    <AlumniHeader>
                        <Title>Our Alumni</Title>
                        <SubTitle>Take a look at our Alumni soaring high</SubTitle>
                    </AlumniHeader>
                    
                    {!alumni.length ? <Loader> <CircularProgress /></Loader> : (
                        <AlumniSection>
                            {
                                alumni.map((alumnus) => 
                                    <Alumnus key={alumnus._id} {...alumnus} />
                                )
                            }
                        </AlumniSection>
                    )}
                </Container>
            </AlumniWrapper>  
        </>
    )
}

export default Alumni
