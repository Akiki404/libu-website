import React, { useState } from 'react'
import FileBase from 'react-file-base64'

import axios from 'axios'

import { TextField, Button, Typography, Paper } from '@material-ui/core' 

import { Container } from '../../globalStyles'

import useStyles from './styles'

const AlumniForm = () => {
    const classes = useStyles()
    const [activityData, setActivityData] = useState({
        title: '',
        category: '',
        image: '',
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/drama-group', activityData)

        setActivityData({
            title: '',
            category: '',
            image: '',
            description: ''
        })
    }

    const clear = () => {
        setActivityData({
            title: '',
            category: '',
            image: '',
            description: ''
        })
    }

    return (
        <>
            <Container>
                <Paper className={classes.paper}>
                    <form autoComplete="off" noValidate onSubmit={handleSubmit} className={`${classes.root} ${classes.form}`}>
                        <Typography variant="h4">Create Activity</Typography>
                        <TextField 
                            name="title" 
                            variant="outlined" 
                            label="Title" 
                            fullWidth 
                            value={activityData.title} 
                            onChange={(e) => setActivityData({ ...activityData, title: e.target.value })} 
                        />

                        <TextField 
                            name="category" 
                            variant="outlined" 
                            label="Category" 
                            fullWidth 
                            value={activityData.category} 
                            onChange={(e) => setActivityData({ ...activityData, category: e.target.value })} 
                        />

                        <TextField 
                            name="description" 
                            variant="outlined" 
                            label="Description" 
                            fullWidth 
                            multiline
                            rows={10}
                            value={activityData.description} 
                            onChange={(e) => setActivityData({ ...activityData, description: e.target.value })} 
                        />

                        <div className={classes.fileInput}>
                            <FileBase
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) => setActivityData({ ...activityData, image: base64 })}
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

export default AlumniForm

