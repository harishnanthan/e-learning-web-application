import Navigation from "../home_page/Navigation";
import "../../assets/styles/_login.scss";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import login from '../../api/login.api';
import forgetPassword from "../../api/forget-password.api";
import queryString from 'query-string';

const ForgetPassword = () => {
    const navigate = useNavigate();
    const query = queryString.parse(window.location.search);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLinkSent, setIsLinkSent] = useState(false);
    const [nextPage, setNextpage] = useState('');
    const [response, setResponse] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();
        setIsLoading(true)
        await forgetPassword({
            username,
        }).then(async (res) => {
            if(res.status === 200) {
                console.log(res)
                setIsLinkSent(true)
                // setNavigation('/reset-password/ur/' + res.verificationKey)
                startNavigation('/reset-password/ur/' + res.verificationKey)
            } else {
                console.log(res.message)
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

    const startNavigation = (url) => {
        if('back-to' in query) {
            navigate(`${url}${window.location.search}`)
        } else {
            navigate(url)
        }
    }

    return (
        <div className="login-page">
            <Navigation />
            <div className="login-center">
                <div className="login">
                    <div className="heading">
                        Verify Your Online Course Account!
                    </div   >
                    <div className="login-form">
                        {
                            !isLinkSent &&
                                <div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="name">
                                            <span>
                                                <PersonIcon />
                                            </span>
                                            <input type="text" placeholder="Full Name"  onChange={e => setUsername(e.target.value)}></input>
                                        </div>
                                        <div className="Login-button">
                                            <button type="submit">Request Verification</button>
                                        </div>
                                    </form>
                                    <div className="account-holder">
                                        Remember the password?
                                        <Link to={"/login" + window.location.search} style={{ textDecoration: 'none' }}>
                                            <p> Login </p>
                                        </Link>
                                    </div>
                                </div>
                        }
                        {
                            isLinkSent &&
                                <span>Password reset link has been sent to your emailId</span>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword;