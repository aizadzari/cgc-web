import React from 'react'
import { Avatar, Button, Typography } from '@material-ui/core'

const Navbar = (props) => {
    const logout = () => {
        localStorage.clear()
        props.history.push('/login')
    }
    return (
        <React.Fragment>
            <div className='navbar'>
                <div className='left-side-navbar'>
                    <Avatar alt='logo' className='margin-r-xs'>
                        {!JSON.parse(localStorage.getItem('authUser')) ? '' : JSON.parse(localStorage.getItem('authUser')).name[0].toUpperCase()}
                    </Avatar>
                    <Typography className='nav-title' component="div" key='h5' variant='h5'>{!JSON.parse(localStorage.getItem('authUser')) ? '' : `Hi, ${JSON.parse(localStorage.getItem('authUser')).name}`}</Typography>
                </div>
                <div className='right-side-navbar'>
                    <Button onClick={() => logout()}>Logout</Button>
                </div>
            </div>
        </React.Fragment >
    )
}

export default Navbar
