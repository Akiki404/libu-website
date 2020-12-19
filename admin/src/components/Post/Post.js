import React from 'react'
import moment from 'moment'
import Truncate from 'react-truncate'

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

const Post = ({ post, handleDelete }) => {

    return (
        <>
            <PostCard>
                <Img src={post.image} />
                <CardHeader>
                    <CardTitle>
                        <PostLink to={
                            {
                                pathname: "/post",
                                state: post._id
                            }
                        }>
                            {post.title}
                        </PostLink>
                    </CardTitle>
                    <CardDate>{moment(post.createdAt).fromNow()}</CardDate>
                    </CardHeader>
                <CardBody>
                    <CardDesc><Truncate lines="2">{post.content}</Truncate>...</CardDesc>
                </CardBody>
                <CardFooter>
                    <Author>Author: {post.author}</Author>
                    <Cta>
                        <CTAEdit><FaEdit /> </CTAEdit>
                        <CTADanger onClick={() => handleDelete(post._id)}><FaTrash /></CTADanger>
                    </Cta>
                </CardFooter>
            </PostCard>        
        </>
    )
}

export default Post
