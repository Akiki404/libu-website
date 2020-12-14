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
    img, 
    name, 
    education, 
    occupation,
    desc
}) => {
    return (
        <>
            <AlumnusCard>
                <CardImg>
                <Img src={img} />
                </CardImg>
                <CardBody>
                    <CardName>
                        <CardLink>{name}<FaAngleRight /></CardLink>
                    </CardName>
                    <CardEducation>{education}</CardEducation>
                    <CardOccupation>{occupation}</CardOccupation>
                    <CardDesc>{desc}</CardDesc>
                </CardBody>
            </AlumnusCard>    
        </>

    )
}

export default Alumnus
