import styled from 'styled-components'

export const PartnersSection = styled.section`
    background: #fff;
    padding: 100px 0;
`

export const PartnersHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;
`

export const Title = styled.h1`
    font-size: 40px;
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