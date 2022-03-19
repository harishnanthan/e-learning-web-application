import Navigation from "../home_page/Navigation";
import "../../assets/styles/_login.scss";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import { Link, useNavigate, useHistory, useParams } from "react-router-dom";
import React, { useState } from 'react';
import login from '../../api/login.api';
import resetPassword from "../../api/reset-password.api";
import queryString from 'query-string';

const ResetPassword = (props) => {
    const { verificationKey } = useParams()

    console.log(verificationKey)
    const navigate = useNavigate();
    const query = queryString.parse(window.location.search);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [response, setResponse] = useState(null);
    const [verificationValue, setVerificationValue] = useState(null);
    const [password, setPassword] = useState(null);

    // console.log(this.props)

    const handleSubmit = async e => {
        e.preventDefault();
        setIsLoading(true)
        await resetPassword({
            verificationModule: "forgetPassword",
            verificationKey,
            verificationValue,
            password,
        }).then(async (res) => {
            if(res.status === 200) {
                console.log(res)
                startNavigation()
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

    const startNavigation = () => {
        if('back-to' in query) {
            navigate(`/login${window.location.search}`)
        } else {
            navigate('/login')
        }
    }

    return (
        <div className="login-page">
            <Navigation />
            <div className="login-center">
                <div className="login">
                    <div className="heading">
                        Reset Your Online Course Account!
                    </div   >
                    <div className="login-form">
                        <form onSubmit={handleSubmit}>
                            <div className="name">
                                <span>
                                    <PersonIcon />
                                </span>
                                <input type="text" placeholder="OTP"  onChange={e => setVerificationValue(e.target.value)}></input>
                            </div>
                            <div className="password">
                                <span >
                                    <LockIcon />
                                </span>
                                <input type="password" placeholder="New Password" onChange={e => setPassword(e.target.value)}></input>
                            </div>
                            <div className="Login-button">
                                <button type="submit">Request Verification</button>
                            </div>
                        </form>
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

export default ResetPassword;