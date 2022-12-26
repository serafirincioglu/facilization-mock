import React from 'react'
import { Button, Grid } from '@mui/material';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MuiAlert from '@mui/material/Alert';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { useState } from 'react';
import TextBox from '../../components/GlobalComponents/TextBox';
import PageWrapper from '../../components/GlobalComponents/PageWrapper';
import IconButton from '@mui/material/IconButton';
import './style.css'
import { useNavigate } from 'react-router-dom';
import FormHelperText from '@mui/material/FormHelperText';


function Login() {

    const [showPassword, setShowPassword] = React.useState(false);
    //Login
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }


    const handleChange = event => {
        if (!isValidEmail(event.target.value)) {
            setError('Email is invalid');
        } else {
            setError(null);
        }

        setEmail(event.target.value);
    };

    const submit = (e) => {
        if (!error) {

            e.preventDefault();
            dispatch(login({
                name: name,
                email: email,
                password: password,
                loggedIn: true,
            }))

            navigate('/');
        }
        else {
            alert("Something went wrong!")
        }
    }

    return (
        <section id="login">
            <PageWrapper>
                <TextBox title="Sign Up" text={

                    <form onSubmit={(e) => submit(e)} style={{ padding: '0 4rem' }}>
                        <div className="login-form">
                            <FormControl required variant="outlined" fullWidth sx={{ m: 2 }}>
                                <InputLabel htmlFor="name">Name</InputLabel>
                                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" endAdornment={<InputAdornment position="end"></InputAdornment>} label="Name" />
                            </FormControl>

                            <FormControl required variant="outlined" fullWidth sx={{ m: 2 }}>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input
                                    type="email"
                                    error={error}
                                    value={email} onChange={handleChange} id="email" endAdornment={<InputAdornment position="end"></InputAdornment>} label="Email" />
                                <FormHelperText id="component-error-text">{error ? "Please enter a valid email" : ""}</FormHelperText>
                            </FormControl>

                            <FormControl required variant="outlined" fullWidth sx={{ m: 2 }}>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </div>

                        <div className="button-group">
                            <Button type="submit">Sign Up</Button>
                        </div>
                    </form>
                } />
            </PageWrapper>
        </section>
    )
}

export default Login