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
`

export const Button = styled(Link)`
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
`