import React, { useState } from 'react'
import { Post, PostForm } from '../../components'

import { FaPlusSquare } from 'react-icons/fa'

import { Container } from '../../globalStyles'

import {
    postData1,
    postData2,
    postData3,
    postData4,
    postData5,
    postData6
} from './Data'

import {
    BlogSection,
    BlogHeader,
    Title,    
    BlogContainer,
    PostAdd
} from './styles'



const Blog = () => {

    const click = () => {
        setPostForm(true)
    }

    const [postForm, setPostForm] = useState(false)

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
                            <BlogContainer>
                                <Post {...postData1} />
                                <Post {...postData2} />
                                <Post {...postData3} />
                                <Post {...postData4} />
                                <Post {...postData5} />
                                <Post {...postData6} />
                            </BlogContainer>
                        </Container>
                    </BlogSection>
            }
        </>
    )
}

export default Blog
