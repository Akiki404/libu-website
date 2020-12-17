import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PartnersSection = styled.section`
    background: #fff;
    margin-top: 2rem;
`

export const PartnersHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin-bottom: 1rem;
`

export const PartnerAdd = styled(Link)`
    color: #03506f;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;

    &:hover {
        color: #101522;
        transition: .3s ease;
    }
`

export const Title = styled.h1`
    font-size: 30px;
`

export const SubTitle = styled.h3`
    font-size: 20px;
`

export const PartnersContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;

    @media(max-width: 700px){
        grid-template-columns: repeat(3, 1fr);
    } 

    @media(max-width: 500px){
        grid-template-columns: repeat(2, 1fr);
    } 
`