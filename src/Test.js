import React from 'react'
import {Link} from 'react-router-dom'


const Test = () => {
    return (
        <>
           <Link to="/">Home</Link>&nbsp;
           <Link to="./second">Second component</Link>
           <Link to="/hello">Third component</Link> 
        </>
    )
}

export default Test
