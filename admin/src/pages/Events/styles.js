import styled from 'styled-components'

export const EventsSection = styled.section`
    padding: 60px 0;
`

export const EventsHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const Title = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
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