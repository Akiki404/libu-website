import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const DramaSection = styled.section`
    padding: 60px 0;
`

export const DramaHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const Title = styled.h1`
    margin-bottom: 24px;
    font-size: 40px;
    line-height: 1.1;
    color: ${({ lightText }) => (lightText) ? '#f7f8fa' : '#1c2237'};
`

export const SubTitle = styled.p`
    margin-bottom: 35px;
    font-size: 16px;
    line-height: 24px;
    color: ${({ lightTextDesc }) => (lightTextDesc) ? '#a9b3c1' : '#1c2237'};
`

export const ActivitiesSection = styled.section`

`

export const ActivityLinks = styled.div`
    display: flex;
    justify-content: center;
`

export const Button = styled(Link)`
    display: flex;
    align-items: center;
    padding: .4rem .8rem;
    background-color: #101522;
    color: #fff;
    text-decoration: none;
    transition: .3s ease;

    &:not(:last-child){
        margin-right: 1rem;
    }

    &:hover {
        color: #045762;
        background-color: #000;
    }
`

export const DramaContainer = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    
    @media(max-width: 900px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 700px){
        grid-template-columns: 1fr;
    }
`

export const ActivitiesHeader = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`

export const Heading = styled.h3`
    font-size: 30px;
    margin: 1rem 0;
`