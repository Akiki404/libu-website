import React, { useState, useEffect } from 'react'
import { Post, PostForm } from '../../components'

import { CircularProgress } from '@material-ui/core'

import axios from 'axios'

import { FaPlusSquare } from 'react-icons/fa'

import { Container, Loader } from '../../globalStyles'

import {
    BlogSection,
    BlogHeader,
    Title,    
    BlogContainer,
    PostAdd,
} from './styles'


const Blog = () => {

    const click = () => {
        setPostForm(true)
    }

    const [postForm, setPostForm] = useState(false)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/posts/')
            .then(response => setPosts(response.data))
            .catch((error) => console.log(error.message))
    }, [posts])

    return (
        !posts.length ? <Loader> <CircularProgress /> </Loader> : (
        <>
            {
                postForm ? <PostForm /> :
                    <BlogSection>
                        <Container>
                            <BlogHeader>
                                <Title>Posts</Title>
                                <PostAdd onClick={click}>
                                    <FaPlusSquare />
                                </PostAdd>
                            </BlogHeader>
                            <BlogContainer>
                                {posts.map((post) =>
                                    <Post {...post} />
                                )}                                
                            </BlogContainer>
                        </Container>
                    </BlogSection>
            }
        </>
        )
    )
}

export default Blog
