import React from 'react'
import '../App.css'
import Navbar from './TopNav/Navbar'
const home = () => {
    const handlelogout = () => {

    }
    return (
        <React.Fragment>
            <Navbar logout={handlelogout} />
        </React.Fragment>
    )
}

export default home