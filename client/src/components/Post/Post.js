import React from 'react'
import moment from 'moment'

import Truncate from 'react-truncate'

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
    _id,
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
                        <PostLink to={
                            {
                                pathname: '/post',
                                state: _id
                            }
                        }>
                            {title}
                        </PostLink>
                    </CardTitle>
                    <CardDate>{moment(createdAt).fromNow()}</CardDate>
                    </CardHeader>
                <CardBody>
                    <CardDesc><Truncate lines="2">{content}</Truncate>...</CardDesc>
                </CardBody>
                <CardFooter>
                    <Author>Author: { author }</Author>
                </CardFooter>
            </PostCard>            
        </>
    )
}

export default Post
