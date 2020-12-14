import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CircularProgress } from '@material-ui/core'

import { Post } from '../../components'

import { Container, Loader } from '../../globalStyles'

import {
    BlogSection,
    BlogHeader,
    Title,
    SubTitle,
    BlogContainer,
} from './styles'

const Blog = () => {

    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            await axios.get('http://localhost:5000/posts')
                .then(response => setPosts(response.data))
        }

        fetchPosts()
    }, [posts])

    return (
        <>
            <BlogSection>
                <Container>
                    <BlogHeader>
                       <Title>From Our Blog</Title>
                        <SubTitle>Amazing articles from our writers</SubTitle>
                    </BlogHeader>
                    {!posts.length ? <Loader> <CircularProgress /></Loader> : (
                        <BlogContainer>
                            {
                                posts.map((post) => 
                                    <Post key={post._id} {...post} />
                                )
                            }
                                               
                        </BlogContainer>
                    )}
                </Container>
            </BlogSection>
        </>
    )
}

export default Blog
