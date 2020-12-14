import React from 'react'
import moment from 'moment'

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
                    <Author>Author: { author }</Author>
                </CardFooter>
            </PostCard>            
        </>
    )
}

export default Post
