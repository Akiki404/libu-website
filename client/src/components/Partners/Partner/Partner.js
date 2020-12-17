import React from 'react'
import {FaAngleRight} from 'react-icons/fa'
import { Anchor } from '../../../globalStyles'

import {
    PartnerWrapper,
    ImgWrapper,
    Img,
    Title
} from './styles'

const Partner = ({partner}) => {
    return (
        <>
            <PartnerWrapper>
                <ImgWrapper>
                    <Img src={partner.logo} loading="lazy" />
                </ImgWrapper>
                <Title>
                    <Anchor href="">{partner.name}<FaAngleRight /></Anchor>
                </Title>
            </PartnerWrapper>            
        </>
    )
}

export default Partner
