import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

import {
    AlumnusCard,
    CardImg,
    Img,
    CardBody,
    CardName,
    CardLink,
    CardEducation,
    CardOccupation,
    CardDesc
} from './styles'

const Alumnus = ({
    image, 
    name, 
    certificate, 
    occupation,
    tagline
}) => {
    return (
        <>
            <AlumnusCard>
                <CardImg>
                <Img src={image} />
                </CardImg>
                <CardBody>
                    <CardName>
                        <CardLink>{name}<FaAngleRight /></CardLink>
                    </CardName>
                    <CardEducation>{certificate}</CardEducation>
                    <CardOccupation>{occupation}</CardOccupation>
                    <CardDesc>{tagline}</CardDesc>
                </CardBody>
            </AlumnusCard>    
        </>

    )
}

export default Alumnus
