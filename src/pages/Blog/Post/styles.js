import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PostCard = styled.div`
    border: 1px solid #f4f4f2;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`

export const Img = styled.img`
    width: 100%;
    height: 150px;
`

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
`

export const PostLink = styled(Link)`
    color: #03506f;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        color: #101522;
        transition: .3s ease;
    }
`

export const CardBody = styled.div`
    padding: 1rem;
`

export const CardTitle = styled.h4`
    font-size: 16px;
    line-height: 1.1;
    color: #0f0f0f;
`

export const CardDate = styled.p`
    font-size: small;
    font-size: 12px;
    color: #03506f;
`
export const CardDesc = styled.p`
    font-size: 14px;
    line-height: 24px;
`