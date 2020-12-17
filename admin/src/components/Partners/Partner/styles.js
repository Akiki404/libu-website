import styled from 'styled-components'

export const PartnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid lightgray;
    padding: 1rem;
    border-radius: 1rem;

    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`

export const ImgWrapper = styled.div`

`

export const Img = styled.img`
    width: 80px;
    height: 80px;
`
export const Title = styled.h5`
    font-size: 12px;
    line-height: 1.1;
    `

export const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: .5rem;

`

export const Cta = styled.div`
    display: flex;
    `