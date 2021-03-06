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

    const [postForm, setPostForm] = useState(false)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            await axios.get('http://localhost:5000/posts')
                .then(response => setPosts(response.data))
        }
        fetchPosts()
    }, [posts])

    const click = () => {
        setPostForm(true)
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/posts/${id}`)
        posts.filter((post) => post._id !== id)
        setPosts(posts)
    }

    return (
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
                            {!posts.length ? <Loader> <CircularProgress /> </Loader> : (
                                <BlogContainer>
                                    {posts.map((post) =>
                                        <Post post={post} handleDelete={handleDelete} />
                                    )}
                                </BlogContainer>
                            )}
                        </Container>
                    </BlogSection>
            }
        </>
        
    )
}

export default Blog
