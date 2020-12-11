import React from 'react'

import { Alumnus } from '../../components'
import {
    alumnusData1,
    alumnusData2,
    alumnusData3,
    alumnusData4,
    alumnusData5,
    alumnusData6,
    alumnusData7,
    alumnusData8
} from './Data'

import { Container } from '../../globalStyles'

import {
    AlumniWrapper,
    AlumniHeader,
    Title,
    SubTitle,
    AlumniSection
} from './styles'


const Alumni = () => {
    return (
        <>
            <AlumniWrapper>
                <Container>
                    <AlumniHeader>
                        <Title>Our Alumni</Title>
                        <SubTitle>Take a look at our Alumni soaring high</SubTitle>
                    </AlumniHeader>
                    
                    <AlumniSection>
                        <Alumnus {...alumnusData1} />
                        <Alumnus {...alumnusData2} />
                        <Alumnus {...alumnusData3} />
                        <Alumnus {...alumnusData4} />
                        <Alumnus {...alumnusData5} />
                        <Alumnus {...alumnusData6} />
                        <Alumnus {...alumnusData7} />
                        <Alumnus {...alumnusData8} />
                    </AlumniSection>
                </Container>
            </AlumniWrapper>  
        </>
    )
}

export default Alumni
