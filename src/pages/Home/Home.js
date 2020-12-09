import React from 'react'

import { Info } from '../../components'

import {
    infoData1,
    infoData2,
    infoData3,
    infoData4,
    infoData5,
    infoData6
} from './Data'

const Home = () => {
    return (
        <>
            <Info {...infoData1} />
            <Info {...infoData2} />
            <Info {...infoData3} />
            <Info {...infoData4} />
            <Info {...infoData5} />
            <Info {...infoData6} />            
        </>
    )
}

export default Home
