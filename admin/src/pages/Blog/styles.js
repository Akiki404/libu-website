import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const BlogSection = styled.section`
    padding: 60px 0;
`

export const BlogHeader = styled.div`
    display: flex;
    justify-content: space-between;    
`

export const Title = styled.h1`
    margin-bottom: 24px;
    font-size: 30px;
    line-height: 1.1;
    color: ${({ lightText }) => (lightText) ? '#f7f8fa' : '#1c2237'};
`

export const BlogContainer = styled.div`
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
export const PostAdd = styled(Link)`
    font-size: 30px;
    color: #101522;    

    &:hover {
        color: #ffba00;
    }
`
