import styled from 'styled-components'

export const AlumniWrapper = styled.section`
    padding: 60px 0;
    background: ${({ lightBg }) => (lightBg) ? '#101522' : '#fff' };
`

export const AlumniHeader = styled.div`
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

export const AlumniSection = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    justify-content: center;

    @media(max-width: 900px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 700px){
        grid-template-columns: 1fr;
    }
`