import React, { useState } from 'react';

// Material Component
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Card } from '@material-ui/core';
import { postLogin } from '../store/Helpers'
import CircularProgress from '@material-ui/core/CircularProgress';

export const UseStyles = makeStyles((theme) => ({
    container: {
        height: "100vh",
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e9e9e9"
    },
    paper: {
        margin: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    card: {
        margin: window.innerWidth < 400 ? 40 : 0,
        borderRadius: 12,
    },
    input: {
        borderRadius: 8
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = (props) => {
    const classes = UseStyles();
    const [formLogin, setFormLogin] = useState({
        name: "",
        apiKey: ""
    })
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        // let data = {
        //     "name": "John Doe",
        //     "apiKey": "b10ce6bf7468a1f1"
        // }

        let data = formLogin;

        const response = await postLogin('login', data);
        if (response !== undefined || response !== null) {
            localStorage.setItem("authUser", JSON.stringify(response));
            localStorage.setItem("accesstoken", JSON.stringify(response.token.token));
            props.history.push('/')
        }
        setLoading(false)
    }
    return (
        <React.Fragment>
            <div className={classes.container}>
                <Card className={classes.card}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={classes.paper}>
                            <Typography component="h1" variant="h5">Login</Typography>

                            <form className={classes.form} onSubmit={handleSubmit}>
                                <TextField
                                    className={classes.input}
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
                                    onChange={e => setFormLogin({ ...formLogin, name: e.target.value })}
                                />
                                <TextField
                                    className={classes.input}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    value={formLogin.apiKey}
                                    autoComplete="current-password"
                                    onChange={e => setFormLogin({ ...formLogin, apiKey: e.target.value })}
                                />

                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    // onClick={handleSubmit}
                                    className={classes.submit}
                                >{loading && <CircularProgress disableShrink style={{ marginRight: 8, color: "#ffffff" }} size={20} />} Login</Button>
                            </form>
                        </div>
                    </Container>
                </Card>
            </div>
        </React.Fragment>
    )
}

export default Login
