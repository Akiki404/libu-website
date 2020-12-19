import React, { useState } from 'react'

import axios from 'axios'

import { TextField, Button, Typography, Paper } from '@material-ui/core' 
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

import { Container } from '../../globalStyles'

import useStyles from './styles'

const EventUpdate = ({event}) => {
    const classes = useStyles()
    const [eventData, setEventData] = useState({
        title: '',
        date: new Date(),
        content: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/events', eventData)

        setEventData({
            title: '',
            date: new Date(),
            content: ''
        })
    }

    const clear = () => {
        setEventData({
            title: '',
            date: new Date(),
            content: ''
        })
    }

    return (
        <>
            <Container>
                <Paper className={classes.paper}>
                    <form autoComplete="off" noValidate onSubmit={handleSubmit} className={`${classes.root} ${classes.form}`}>
                        <Typography variant="h4">Update Event</Typography>
                        <TextField 
                            name="title" 
                            variant="outlined" 
                            label="Title" 
                            fullWidth 
                            value={event.title} 
                            onChange={(e) => setEventData({ ...eventData, title: e.target.value })} 
                        />

                        <TextField 
                            name="content" 
                            variant="outlined" 
                            label="Content" 
                            multiline
                            rows={7}
                            fullWidth 
                            value={event.content} 
                            onChange={(e) => setEventData({ ...eventData, content: e.target.value })} 
                        />

                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker 
                                name="date"
                                variant="outlined"
                                label="Date"
                                fullWidth
                                value={event.date}
                                selected={event.date}
                                onChange={date => setEventData({...eventData, date})} 
                            />
                        </MuiPickersUtilsProvider>
                        

                        <Button type="submit" className={classes.buttonSubmit} variant="contained" color="primary" size="large" fullWidth >Update</Button>
                        <Button variant="contained" color="secondary" size="small" fullWidth onClick={clear}>Clear</Button>
                    </form>
                </Paper>                
            </Container>            
        </>
    )
}

export default EventUpdate
