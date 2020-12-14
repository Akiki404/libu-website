import React, { useState } from 'react'
import FileBase from 'react-file-base64'

import axios from 'axios'

import { TextField, Button, Typography, Paper } from '@material-ui/core' 

import { Container } from '../../globalStyles'

import useStyles from './styles'

const PostForm = () => {
    const classes = useStyles()
    const [postData, setPostData] = useState({
        title: '',
        content: '',
        image: '',
        author: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/posts', postData)

        setPostData({
            title: '',
            content: '',
            image: '',
            author: ''
        })
    }

    const clear = () => {
        setPostData({
            title: '',
            content: '',
            image: '',
            author: ''
        })
    }

    return (
        <>
            <Container>
                <Paper className={classes.paper}>
                    <form autoComplete="off" noValidate onSubmit={handleSubmit} className={`${classes.root} ${classes.form}`}>
                        <Typography variant="h4">Create a post</Typography>
                        <TextField 
                            name="title" 
                            variant="outlined" 
                            label="Title" 
                            fullWidth 
                            value={postData.title} 
                            onChange={(e) => setPostData({ ...postData, title: e.target.value })} 
                        />

                        <TextField 
                            name="author" 
                            variant="outlined" 
                            label="Author" 
                            fullWidth 
                            value={postData.author} 
                            onChange={(e) => setPostData({ ...postData, author: e.target.value })} 
                        />

                        <TextField 
                            name="content" 
                            variant="outlined" 
                            label="Content" 
                            fullWidth 
                            className={classes.content}
                            value={postData.content} 
                            onChange={(e) => setPostData({ ...postData, content: e.target.value })} 
                        />

                        <div className={classes.fileInput}>
                            <FileBase
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) => setPostData({ ...postData, image: base64 })}
                            />
                        </div>

                        <Button type="submit" className={classes.buttonSubmit} variant="contained" color="primary" size="large" fullWidth >Submit</Button>
                        <Button variant="contained" color="secondary" size="small" fullWidth onClick={clear}>Clear</Button>
                    </form>
                </Paper>                
            </Container>            
        </>
    )
}

export default PostForm
