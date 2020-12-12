import React from 'react'
import moment from 'moment'

import { FaAngleRight } from 'react-icons/fa'

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
    Author
} from './styles'

const Post = ({
    img,
    title, 
    date, 
    content, 
    author
}) => {
    return (
        <>
            <PostCard>
                <Img src={img} />
                <CardHeader>
                    <CardTitle>
                        <PostLink>
                            {title}<FaAngleRight />
                        </PostLink>
                    </CardTitle>
                    <CardDate>{moment(date).fromNow()}</CardDate>
                    </CardHeader>
                <CardBody>
                    <CardDesc>{content}</CardDesc>
                </CardBody>
                <CardFooter>
                    <Author>Author: { author }</Author>
                </CardFooter>
            </PostCard>            
        </>
    )
}

export default Post
