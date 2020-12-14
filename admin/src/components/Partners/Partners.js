import React from 'react'
import Partner from './Partner/Partner'

import { partnersData1, partnersData2, partnersData3, partnersData4 } from './Data'
import { Container } from '../../globalStyles'

import {
    PartnersSection,
    PartnersHeader,
    Title,
    SubTitle,
    PartnersContainer
} from './styles'

const Partners = () => {
    return (
        <>
            <PartnersSection>
                <Container>
                    <PartnersHeader>
                        <Title>Our Sponsors & Partners</Title>
                        <SubTitle>Your support keeps us going</SubTitle>
                    </PartnersHeader>
                    <PartnersContainer>
                        <Partner {...partnersData1} />
                        <Partner {...partnersData2} />
                        <Partner {...partnersData3} />
                        <Partner {...partnersData4} />
                    </PartnersContainer>
                </Container>
            </PartnersSection>            
        </>
    )
}

export default Partners
