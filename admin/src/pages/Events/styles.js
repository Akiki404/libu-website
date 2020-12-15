import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const EventsSection = styled.section`
    padding: 60px 0;
`

export const EventsHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

export const EventAdd = styled.div`
    font-size: 20px;
    cursor: pointer;
    font-size: 30px;
    color: #101522;    

    &:hover {
        color: #ffba00;
    }
`

export const Title = styled.h1`
    margin-bottom: 24px;
    font-size: 30px;
    line-height: 1.1;
    color: ${({ lightText }) => (lightText) ? '#f7f8fa' : '#1c2237'};
`

export const SubTitle = styled.p`
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ lightTextDesc }) => (lightTextDesc) ? '#a9b3c1' : '#1c2237'};
`

export const EventContainer = styled.div`
    

    @media(max-width: 900px){
        
    }

    @media(max-width: 700px){
        
    }
`
