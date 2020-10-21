import React from 'react'
import Pricing from '../../Pricing'
import HeroSection from '../../HeroSection'
import {homeObjFour} from './Data'
const Services = () => {
    return (
        <>
            <HeroSection {...homeObjFour} />
            <Pricing />
        </>
    )
}

export default Services