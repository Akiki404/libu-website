import styled from 'styled-components'

import { Link } from 'react-router-dom'


export const FooterSec = styled.section`
    background: #0c3b2e;
    padding: 7rem 0 2rem 0;
    color: #fff;
`
export const FooterSection = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;

    @media(max-width: 768px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`

export const Social = styled.div`
    
`

export const Title = styled.h4`
    margin-bottom: 1rem;    
    color: #fc6e20;
`

export const SocialIcons = styled.div`
    display: flex;
`

export const SocialIcon = styled(Link)`
text-decoration: none;
display: flex;
justify-content: center;
text-align: center;
align-items: center;
color: #ffba00;
font-size: 30px;

&:not(:last-child){
    margin-right: 2rem;
}


&:hover {    
    color: #045762;
    transition: .3s ease;
}
`

export const Location = styled.div`
    display: flex;
    flex-direction: column;
`

export const Text = styled.p`
    font-size: 16px;
    color: #ffba00;
`

export const SubText = styled.p`
    font-size: 14px;
    color: #ffba00;
`

export const Posts = styled.div`
    

`

export const Events = styled.div`
    

`

export const PostsBody = styled.div`
    display: flex;
    flex-direction: column;    
`

export const EventsBody = styled.div`
    display: flex;
    flex-direction: column;    
`

export const PostTitle = styled(Link)`
    color: #ffba00;
    text-decoration: none;

    &:hover {
        color: #045762;
    }

`

export const EventTitle = styled(Link)`
    color: #ffba00;
    text-decoration: none;

    &:hover {
        color: #045762;
    }

`

export const CopyRight = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
`

export const Copy = styled.p`
    font-size: 14px;
`