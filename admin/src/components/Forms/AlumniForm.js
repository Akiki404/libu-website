import React, { useState } from 'react'
import FileBase from 'react-file-base64'

import axios from 'axios'

import { TextField, Button, Typography, Paper } from '@material-ui/core' 

import { Container } from '../../globalStyles'

import useStyles from './styles'

const AlumniForm = () => {
    const classes = useStyles()
    const [alumniData, setAlumniData] = useState({
        name: '',
        tagline: '',
        image: '',
        certificate: '',
        occupation: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/alumni', alumniData)

        setAlumniData({
            name: '',
            tagline: '',
            image: '',
            certificate: '',
            occupation: ''
        })
    }

    const clear = () => {
        setAlumniData({
            name: '',
            tagline: '',
            image: '',
            certificate: '',
            occupation: ''
        })
    }

    return (
        <>
            <Container>
                <Paper className={classes.paper}>
                    <form autoComplete="off" noValidate onSubmit={handleSubmit} className={`${classes.root} ${classes.form}`}>
                        <Typography variant="h4">Create Alumnus</Typography>
                        <TextField 
                            name="name" 
                            variant="outlined" 
                            label="Name" 
                            fullWidth 
                            value={alumniData.name} 
                            onChange={(e) => setAlumniData({ ...alumniData, name: e.target.value })} 
                        />

                        <TextField 
                            name="certificate" 
                            variant="outlined" 
                            label="Certificate" 
                            fullWidth 
                            value={alumniData.certificate} 
                            onChange={(e) => setAlumniData({ ...alumniData, certificate: e.target.value })} 
                        />

                        <TextField 
                            name="occupation" 
                            variant="outlined" 
                            label="Occupation" 
                            fullWidth 
                            value={alumniData.occupation} 
                            onChange={(e) => setAlumniData({ ...alumniData, occupation: e.target.value })} 
                        />

                        <TextField 
                            name="tagline" 
                            variant="outlined" 
                            label="Tagline" 
                            fullWidth 
                            className={classes.tagline}
                            value={alumniData.tagline} 
                            onChange={(e) => setAlumniData({ ...alumniData, tagline: e.target.value })} 
                        />

                        <div className={classes.fileInput}>
                            <FileBase
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) => setAlumniData({ ...alumniData, image: base64 })}
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
