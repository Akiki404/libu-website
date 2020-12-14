import React from 'react'
import {FaAngleRight} from 'react-icons/fa'
import { Anchor } from '../../../globalStyles'

import {
    PartnerWrapper,
    ImgWrapper,
    Img,
    Title
} from './styles'

const Partner = ({ img, name }) => {
    return (
        <>
            <PartnerWrapper>
                <ImgWrapper>
                    <Img src={img} />
                </ImgWrapper>
                <Title>
                    <Anchor href="">{name}<FaAngleRight /></Anchor>
                </Title>
            </PartnerWrapper>            
        </>
    )
}

export default Partner
