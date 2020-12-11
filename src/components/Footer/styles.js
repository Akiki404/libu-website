import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const FooterSec = styled.section`
    background: #101522;
    padding: 8rem 0;
    color: #fff;
`
export const FooterSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const Social = styled.div`
    
`

export const Title = styled.h4`
    margin-bottom: 1rem;    
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 30px;
`

export const SocialIcon = styled(Link)`
text-decoration: none;
display: flex;
justify-content: center;
text-align: center;
align-items: center;
color: #fff;
font-size: 30px;

&::not(::first-child){
    margin-right: 1rem;
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
`

export const SubText = styled.p`
    font-size: 14px;
`