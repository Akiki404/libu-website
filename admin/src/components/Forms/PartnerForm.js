import React, { useState } from 'react'
import FileBase from 'react-file-base64'

import axios from 'axios'

import { TextField, Button, Typography, Paper } from '@material-ui/core' 

import { Container } from '../../globalStyles'

import useStyles from './styles'

const AlumniForm = () => {
    const classes = useStyles()
    const [partnerData, setPartnerData] = useState({
        name: '',
        logo: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/partners', partnerData)

        setPartnerData({
            name: '',
            logo: ''
        })
    }

    const clear = () => {
        setPartnerData({
            name: '',
            logo: ''
        })
    }

    return (
        <>
            <Container>
                <Paper className={classes.paper}>
                    <form autoComplete="off" noValidate onSubmit={handleSubmit} className={`${classes.root} ${classes.form}`}>
                        <Typography variant="h4">Create Partner</Typography>
                        <TextField 
                            name="name" 
                            variant="outlined" 
                            label="Name" 
                            fullWidth 
                            value={partnerData.name} 
                            onChange={(e) => setPartnerData({ ...partnerData, name: e.target.value })} 
                        />

                        <div className={classes.fileInput}>
                            <FileBase
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) => setPartnerData({ ...partnerData, logo: base64 })}
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
