import React from 'react'

import { Info, Partners } from '../../components'

import {
    infoData0,
    infoData1,
    infoData2,
    infoData3,
    infoData4,
    infoData5,
    infoData6,
    infoData7,
} from './Data'

const Home = () => {
    return (
        <>
            <Info {...infoData0} />
            <Info {...infoData1} />
            <Info {...infoData2} />
            <Info {...infoData3} />
            <Info {...infoData4} />
            <Info {...infoData5} />
            <Info {...infoData6} />
            <Partners />
        </>
    )
}

export default Home
