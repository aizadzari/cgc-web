import React, { useState } from 'react';

// Material Component
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Card } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const Login = (props) => {
    const [loading, setLoading] = useState(false)
    const [formLogin, setFormLogin] = useState({
        name: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        // cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
        e.preventDefault()

        // set loading to true before submmiting or push to api request
        setLoading(true)

        // giving a 'payload' as a new variable to hold the form data
        let payload = formLogin;

        // using settimeout just to make it loading appear for 1s since we are not requesting response from API.
        setTimeout(() => {
            localStorage.setItem("authUser", JSON.stringify(payload));;
            props.history.push('/')
            setLoading(true)
        }, 1000);
    }
    return (
        <React.Fragment>
            <div className="container">
                <Card className="card-radius">
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className="form-body">
                            <Typography component="h1" variant="h5">Login</Typography>

                            <form className="" onSubmit={handleSubmit}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={formLogin.name}
                                    className="margin-sm"
                                    onChange={e => {
                                        // call 'setFormLogin' to overwrite the state value;
                                        setFormLogin(prev => {
                                            return {
                                                ...prev,
                                                name: e.target.value
                                            }
                                        })
                                    }}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    value={formLogin.password}
                                    autoComplete="current-password"
                                    onChange={e => {
                                        // call 'setFormLogin' to overwrite the state value;
                                        setFormLogin(prev => {
                                            return {
                                                ...prev,
                                                password: e.target.value
                                            }
                                        })
                                    }}
                                />

                                <Button
                                    className="margin-b-sm margin-t-xs"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >{loading && <CircularProgress color='inherit' disableShrink className='margin-r-xs' size={20} />} Login</Button>
                            </form>
                        </div>
                    </Container>
                </Card>
            </div>
        </React.Fragment>
    )
}

export default Login
