import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import { homeObjTwo } from './Data'
const Products = () => {
    return (
        <>
            
            <HeroSection {...homeObjTwo} />
            <Pricing />
            
        </>
    )
}

export default Products
