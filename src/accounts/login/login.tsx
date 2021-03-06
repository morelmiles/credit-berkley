import React, { useState } from 'react';
import {
    Button,
    Grid,
    InputBase,
    makeStyles,
    createStyles,
    Typography,
} from '@material-ui/core';
import { BrowserRouter, Link } from 'react-router-dom';
import { useFormik } from 'formik';

import logo from '../../assets/bc-logo.jpg';

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            background: '#ECF3FD 0% 0% no-repeat padding-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            margin: '0 auto',
            flexDirection: 'row',
        },

        boxContainer: {
            width: '537px',
            height: '611px',
            margin: '100px 30px',
            boxShadow:
                '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
            opacity: '1',
            textAlign: 'center',
            paddingBottom: '80px',
            [theme.breakpoints.down('sm')]: {
                height: 'auto',
                width: '340px',
                margin: '50px 15px',
            },
        },

        logoContainer: {
            margin: '50px 0',
            [theme.breakpoints.down('sm')]: {
                margin: '25px 0',
            },
        },

        header: {
            textTransform: 'uppercase',
            color: '#29A475',
            margin: '50px 15px',
            fontSize: '20px',
            fontWeight: 'bold',
            [theme.breakpoints.down('sm')]: {
                margin: '25px 0',
            },
        },

        descText: {
            fontSize: '17px',
            letterSpacing: 0,
            color: '#282728',
            opacity: 1,
        },

        inputField: {
            width: '335px',
            fontSize: '1rem',
            height: '69px',
            borderRadius: '7px',
            boxShadow:
                'inset 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
            marginTop: '15px',
            padding: ' 0 0 0 40px ',
            color: '#707070',
            [theme.breakpoints.down('sm')]: {
                width: '280px',
            },
        },

        btnLogin: {
            width: '335px',
            height: '66px',
            background: '#ECF3FD 0% 0% no-repeat padding-box',
            boxShadow:
                '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
            borderRadius: '10px',
            color: '#1D9F6EA2',
            fontSize: '1rem',
            marginTop: '60px',
            opacity: 1,
            fontWeight: 'bolder',
            textTransform: 'capitalize',
            [theme.breakpoints.down('sm')]: {
                width: '280px',
                marginTop: '30px',
            },
        },

        btnCreateAccount: {
            width: '335px',
            height: '66px',
            background: '#ECF3FD 0% 0% no-repeat padding-box',
            boxShadow:
                '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
            borderRadius: '10px',
            color: '#1D9F6EA2',
            fontSize: '1rem',
            opacity: 1,
            textTransform: 'capitalize',
            [theme.breakpoints.down('sm')]: {
                width: '280px',
            },
        },

        mainContainer: {
            background: '#ECF3FD 0% 0% no-repeat padding-box',
            top: '0px',
            display: 'flex',
            flexDirection: 'row',
            [theme.breakpoints.down('xs')]: {
                margin: '0 auto',
            },
        },

        form: {
            [theme.breakpoints.down('sm')]: {
                padding: '10px',
            },
        },
    }),
);
export default function UserLogin() {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disable, setDisable] = useState('');

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const emailValidation = (email: string) => {
        const regexPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexPattern.test(String(email).toLowerCase());
    };

    const handleLogIn = async (event: React.FormEvent) => {
        event.preventDefault();
    };

    return (
        <div className={classes.mainContainer}>
            <Grid container className={classes.container}>
                <Grid item className={classes.logoContainer}>
                    <img src={logo} alt="Credit Berkley" />
                </Grid>

                <Grid item className={classes.boxContainer}>
                    <Typography component="p" className={classes.header}>
                        Log In
                    </Typography>

                    <form onSubmit={handleLogIn} className={classes.form}>
                        <InputBase
                            className={classes.inputField}
                            autoComplete="email"
                            required
                            type="text"
                            placeholder="Username or Email"
                            onChange={(event) => setEmail(event.target.value)}
                        />

                        <InputBase
                            className={classes.inputField}
                            autoComplete="current-password"
                            type="password"
                            placeholder="Password"
                            required
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                        />

                        <Button fullWidth className={classes.btnLogin}>
                            Log In
                        </Button>
                    </form>
                    <Typography
                        component="p"
                        style={{ margin: '1.5rem 0 1.5rem 0' }}
                    >
                        Don't have an account?
                        <BrowserRouter>
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                }}
                                to="/create-account"
                            >
                                <b>{'  '}Create Now!</b>
                            </Link>
                        </BrowserRouter>
                    </Typography>
                    <Button fullWidth className={classes.btnCreateAccount}>
                        <BrowserRouter>
                            <Link
                                to="/create-account"
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                }}
                            >
                                <b>Create Account</b>
                            </Link>
                        </BrowserRouter>
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
