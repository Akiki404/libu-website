import React, { useState, useEffect } from 'react'
import Partner from './Partner/Partner'
import PartnerForm from '../../components/Forms/PartnerForm'

import { FaPlusSquare } from 'react-icons/fa'

import { Container, Loader } from '../../globalStyles'

import {
    PartnersSection,
    PartnersHeader,
    Title,
    PartnersContainer, 
    PartnerAdd
} from './styles'
import axios from 'axios'
import { CircularProgress } from '@material-ui/core'

const Partners = () => {

    const [partners, setPartners] = useState([])
    const [partnerForm, setPartnerForm] = useState(false)

    const click = () => {
        setPartnerForm(true)
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/partners/${id}`)
        partners.filter((partner) => partner._id !== id)
        setPartners(partners)
    }

    useEffect(() => {
        const fetchPartners = async () => {
            await axios.get('http://localhost:5000/partners')
                .then(response => setPartners(response.data))
        }

        fetchPartners()
    }, [partners])

    return (
        <>
            {partnerForm ? <PartnerForm /> : (
                <PartnersSection>
                <Container>
                    <PartnersHeader>
                        <Title>Sponsors & Partners</Title>
                        <PartnerAdd onClick={click}>
                            <FaPlusSquare />
                        </PartnerAdd>
                        </PartnersHeader>    
                        {
                            !partners.length ? <Loader><CircularProgress /></Loader> : (
                                <PartnersContainer>
                                    {partners.map((partner) => <Partner handleDelete={handleDelete} partner={ partner } />)}                            
                        </PartnersContainer>                                
                           ) 
                        }    
                                                  
                </Container>               
            </PartnersSection>

            )}
                        
        </>
    )
}

export default Partners
