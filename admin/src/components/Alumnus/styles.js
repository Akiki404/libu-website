import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AlumnusCard = styled.div`
    border: 1px solid lightgray;
    border-radius: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`

export const CardImg = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
`

export const Img = styled.img`
    width: 100px;
    border-radius: 50%;    
    height: 100px;
`

export const CardBody = styled.div`
    padding: 1rem;
    text-align: center;
`

export const CardName = styled.h4`
    font-size: 14px;
`

export const CardLink = styled(Link)`
    color: #03506f;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        color: #101522;
        transition: .3s ease;
        font-size: 14.2px;
    }
`

export const CardEducation = styled.p`
    font-size: 14px;
    font-weight: bold;
`

export const CardOccupation = styled.p`
    font-size: 12px;
    font-weight: bold;
`

export const CardDesc = styled.p`
    font-size: 14px;
    line-height: 18px;
`

export const CardFooter = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 .5rem;
`

export const Cta = styled.div`
    display: flex;
`