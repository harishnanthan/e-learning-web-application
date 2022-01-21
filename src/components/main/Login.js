import Navigation from "../home_page/Navigation";
import "../../assets/styles/_login.scss";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import login from '../../api/login.api';
import verify from '../../api/verify.api';

const Login = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [response, setResponse] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();
        setIsLoading(true)
        await login({
            username,
            password
        }).then(async (res) => {
            if(res.status === 200) {
                console.log(res)
                startNavigation()
            } else {
                handleError(res.message)
            }
        }).catch((err) => {
            console.log(err)
            handleError("Oops! Error Occurred")
        })
        return false
    }

    const handleError = (error) => {
        setIsLoading(false)
        setError(true)
        setErrorMessage(error)
        // toast.error(error)
    }

    const startNavigation = () => {
        // navigate('/')
    }

    const sendReq = async (e) => {
        console.log(e)
        await verify();
    }

    return (
        <div className="login-page">
            <Navigation />
            <div className="login-center">
                <div className="login">
                    <div className="heading">
                        Log In to Your Online Course Account!
                    </div   >
                    <div className="login-form">
                        <form onSubmit={handleSubmit}>
                            <div className="name">
                                <span>
                                    <PersonIcon />
                                </span>
                                <input type="text" placeholder="Full Name"  onChange={e => setUsername(e.target.value)}></input>
                            </div>
                            <div className="password">
                                <span >
                                    <LockIcon />
                                </span>
                                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
                            </div>
                            <div className="Login-button">
                                <button type="submit">Login</button>
                            </div>
                        </form>
                        <button onClick={e => sendReq(e)}>Login</button>
                        <div className="account-holder">
                            Don't have an account?
                            <Link to="/join-for-free" style={{ textDecoration: 'none' }}>
                                <p> Sing up </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;