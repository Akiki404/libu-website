import React from 'react'
import {FaAngleRight, FaEdit, FaTrash } from 'react-icons/fa'
import { Anchor, CTADanger, CTAEdit } from '../../../globalStyles'

import {
    PartnerWrapper,
    ImgWrapper,
    Img,
    Title,
    CardFooter,
    Cta
} from './styles'

const Partner = ({partner, handleDelete}) => {
    return (
        <>
            <PartnerWrapper>
                <ImgWrapper>
                    <Img src={partner.logo} />
                </ImgWrapper>
                <Title>
                    <Anchor href="">{partner.name}<FaAngleRight /></Anchor>
                </Title>
                <CardFooter>
                    <Cta>
                        <CTAEdit><FaEdit /> </CTAEdit>
                        <CTADanger onClick={() => handleDelete(partner._id)}><FaTrash /></CTADanger>
                    </Cta>
                </CardFooter>
            </PartnerWrapper>            
        </>
    )
}

export default Partner
