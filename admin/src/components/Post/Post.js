import React from 'react'
import moment from 'moment'

import { FaEdit, FaTrash } from 'react-icons/fa'

import {
    PostCard,
    Img,
    CardHeader,
    CardBody,
    CardTitle,
    PostLink,
    CardDate,
    CardDesc,
    CardFooter,
    Author,
    Cta
} from './styles'
import { CTAEdit, CTADanger } from '../../globalStyles'

const Post = ({
    image,
    title, 
    createdAt, 
    content, 
    author
}) => {
    return (
        <>
            <PostCard>
                <Img src={image} />
                <CardHeader>
                    <CardTitle>
                        <PostLink>
                            {title}
                        </PostLink>
                    </CardTitle>
                    <CardDate>{moment(createdAt).fromNow()}</CardDate>
                    </CardHeader>
                <CardBody>
                    <CardDesc>{content}</CardDesc>
                </CardBody>
                <CardFooter>
                    <Author>Author: {author}</Author>
                    <Cta>
                        <CTAEdit><FaEdit /> </CTAEdit>
                        <CTADanger><FaTrash /></CTADanger>
                    </Cta>
                </CardFooter>
            </PostCard>            
        </>
    )
}

export default Post
