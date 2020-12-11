import styled from 'styled-components'

export const InfoSection = styled.div`
    color: #fff;
    padding: 160px 0;
    background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`

export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`

export const InfoColumn = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    flex: 1;
    flex-basis: 50%;
    max-width: 50%;

    @media(max-width: 768px){
        display: flex;
        justify-content: center;
        flex-basis: 100%;
        max-width: 100%;
    }
    `

export const TextWrapper = styled.div`
    max-width: 600px;
    padding: 0 0 60px 0;

    @media(max-width: 768px){
        padding-bottom: 65px;
    }
`

export const TopLine = styled.div`
    font-size: 18px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
    color: ${({ lightTopLine }) => (lightTopLine) ? '#a9b3c1' : '#4b59f7'};
    `

export const Title = styled.h1`
    margin-bottom: 24px;
    font-size: 38px;
    line-height: 1.1;
    color: ${({ lightText }) => (lightText) ? '#f7f8fa' : '#1c2237'};
    `

export const SubTitle = styled.p`
    max-width: 500px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ lightTextDesc }) => (lightTextDesc) ? '#a9b3c1' : '#1c2237'};
`

export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${({ start }) => (start) ? 'flex-start' : 'flex-end'};
`

export const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
    `
