import React, { useState } from 'react'

import axios from 'axios'

import { TextField, Button, Typography, Paper } from '@material-ui/core' 

import { Container } from '../../globalStyles'

import useStyles from './styles'

const AlumniForm = () => {
    const classes = useStyles()
    const [eventData, setEventData] = useState({
        title: '',
        date: '',
        content: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/events', eventData)

        setEventData({
            title: '',
            date: '',
            content: ''
        })
    }

    const clear = () => {
        setEventData({
            title: '',
            date: '',
            content: ''
        })
    }

    return (
        <>
            <Container>
                <Paper className={classes.paper}>
                    <form autoComplete="off" noValidate onSubmit={handleSubmit} className={`${classes.root} ${classes.form}`}>
                        <Typography variant="h4">Create Event</Typography>
                        <TextField 
                            name="title" 
                            variant="outlined" 
                            label="Title" 
                            fullWidth 
                            value={eventData.title} 
                            onChange={(e) => setEventData({ ...eventData, title: e.target.value })} 
                        />

                        <TextField 
                            name="content" 
                            variant="outlined" 
                            label="Content" 
                            fullWidth 
                            value={eventData.content} 
                            onChange={(e) => setEventData({ ...eventData, content: e.target.value })} 
                        />

                        <TextField 
                            name="date" 
                            variant="outlined" 
                            label="Date" 
                            fullWidth 
                            value={eventData.date} 
                            onChange={(e) => setEventData({ ...eventData, date: e.target.value })} 
                        />

                        <Button type="submit" className={classes.buttonSubmit} variant="contained" color="primary" size="large" fullWidth >Submit</Button>
                        <Button variant="contained" color="secondary" size="small" fullWidth onClick={clear}>Clear</Button>
                    </form>
                </Paper>                
            </Container>            
        </>
    )
}

export default AlumniForm
