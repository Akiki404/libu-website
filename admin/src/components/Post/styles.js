import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PostCard = styled.div`
    border: 1px solid #f4f4f2;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`

export const ImgWrapper = styled.div`
    max-width: 550px;
`

export const PostImgWrapper = styled.div`
    width: 50%;
    margin: 1rem auto;
`

export const Img = styled.img`
    width: 100%;
    height: 150px;
    margin-bottom: 1rem;
`

export const PostImg = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
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
        font-size: 16.2px;
    }
`

export const CardBody = styled.div`
    padding: .5rem 1rem;
`

export const CardTitle = styled.h4`
    font-size: 16px;
    line-height: 1.1;
    color: #0f0f0f;
`

export const Title = styled.h4`
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
    line-height: 20px;
`

export const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1rem .5rem 1rem;
`

export const Author = styled.div`
    font-size: small;
    color: #03506f;
`

export const Cta = styled.div`
    display: flex;
`

