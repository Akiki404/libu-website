import React from 'react'

import { Container } from '../../globalStyles'
import {
    InfoSection,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Title,
    SubTitle,
    ImgWrapper,
    Img
} from './styles'

const Info = ({ 
    lightBg, 
    imgStart, 
    lightTopLine, 
    topLine, 
    lightText, 
    title, 
    lightTextDesc, 
    description, 
    start, 
    img, 
    alt
}) => {
    return (
        <>
            <InfoSection lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>

                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Title lightText={lightText}>{title}</Title>
                                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                            </TextWrapper>
                        </InfoColumn>

                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} loading="lazy" />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSection>           
        </>
    )
}

export default Info
