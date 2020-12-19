import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import { useLocation } from 'react-router-dom'

import { Container, CTADanger, CTAEdit } from '../../globalStyles'
import { FaEdit, FaTrash } from 'react-icons/fa'

import {
    PostImgWrapper,
    PostImg,
    Title,
    Author,  
    CardHeader,
    CardBody,
    CardDate,
    CardDesc,
    CardFooter,
} from './styles'

const PostDetail = () => {
    
    const { state } = useLocation();

    const [post, setPost] = useState([])

    useEffect(() => {
        const fetchPost = async () => {
            await axios.get(`http://localhost:5000/posts/${state}`)
                .then(response => setPost(response.data))
        }
        fetchPost()
    }, [state])
    
    
    return (
        <>
            <Container>
                    <PostImgWrapper>
                        <PostImg src={post.image} />
                    </PostImgWrapper> 
                        <CardHeader>
                            <Title>{post.title}</Title>
                            <CardDate>{moment(post.createdAt).fromNow()}</CardDate>
                        </CardHeader>  
                        <CardBody>
                            <CardDesc>{post.content}</CardDesc>
                        </CardBody>
                        <CardFooter>
                            <Author>By: {post.author}</Author>
                        </CardFooter>
            </Container>
                                    
        </>
    )
}

export default PostDetail
