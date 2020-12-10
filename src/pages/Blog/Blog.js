import React from 'react'
import Post from './Post/Post'

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
    SubTitle,
    BlogContainer
} from './styles'

const Blog = () => {
    return (
        <>
            <BlogSection>
                <Container>
                    <BlogHeader>
                       <Title>From Our Blog</Title>
                        <SubTitle>Amazing articles from our writers</SubTitle>
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
        </>
    )
}

export default Blog
