import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { CTADanger, CTAEdit} from '../../globalStyles'

import {
    AlumnusCard,
    CardImg,
    Img,
    CardBody,
    CardName,
    CardLink,
    CardEducation,
    CardOccupation,
    CardDesc,
    CardFooter,
    Cta
} from './styles'

const Alumnus = ({alumnus, handleDelete}) => {
    return (
        <>
            <AlumnusCard>
                <CardImg>
                <Img src={alumnus.image} />
                </CardImg>
                <CardBody>
                    <CardName>
                        <CardLink>{alumnus.name}</CardLink>
                    </CardName>
                    <CardEducation>{alumnus.certificate}</CardEducation>
                    <CardOccupation>{alumnus.occupation}</CardOccupation>
                    <CardDesc>{alumnus.tagline}</CardDesc>
                </CardBody>
                <CardFooter>
                    <Cta>
                        <CTAEdit><FaEdit /> </CTAEdit>
                        <CTADanger onClick={() => { handleDelete(alumnus._id) }}><FaTrash/></CTADanger>
                    </Cta>
                </CardFooter>
            </AlumnusCard>    
        </>

    )
}

export default Alumnus
