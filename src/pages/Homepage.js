import React from 'react'
import Carousel from '../components/Carousel'
import Card from '../components/Card'

import Nav from '../components/Nav'
import Trending from '../components/Trending'
import Footer from '../components/Footer'

const Homepage = () => {
    return (
        <>
           <Nav/> 
           <Carousel/>
           <Card/>
           <Trending/>
           <Footer/>
           
            
        </>
    )
}

export default Homepage
