import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CircularProgress } from '@material-ui/core'
import { Loader } from '../../globalStyles'

import { Info, Partners } from '../../components'

import {
    infoData0,
    infoData1,
    infoData2,
    infoData3,
    infoData4,
    infoData5,
    infoData6,
} from './Data'

const Home = () => {

    const [partners, setPartners] = useState([])

    useEffect(() => {
        const fetchPartners = async () => {
            await axios.get('http://localhost:5000/partners')
                .then(response => setPartners(response.data))
        }

        fetchPartners()
    }, [partners])

    return (
        <>
            <Info {...infoData0} />
            <Info {...infoData1} />
            <Info {...infoData2} />
            <Info {...infoData3} />
            <Info {...infoData4} />
            <Info {...infoData5} />
            <Info {...infoData6} />

            {!partners.length ? <Loader><CircularProgress /></Loader> : (
               <Partners partners={ partners}/>
            )}
            
        </>
    )
}

export default Home
