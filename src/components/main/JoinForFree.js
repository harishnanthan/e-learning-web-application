import Navigation from "../home_page/Navigation.js"
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import Otp from "../model_components/Otp.js";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/styles/_joinforfree.scss";
import check from "../../api/check.api.js";
import register from "../../api/register.api.js";
import queryString from 'query-string';

function JoinForFree() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const query = queryString.parse(window.location.search);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [response, setResponse] = useState(null);
    const [username, setUsername] = useState(null);
    const [name, setName] = useState(null);
    const [emailId, setEmailId] = useState(null);
    const [password, setPassword] = useState(null);
    const [isUsernameAvailable, setIsUsernameAvailable] = useState(true);
    const [isEmailAvailable, setIsEmailAvailable] = useState(true);

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(e)
        setIsLoading(true)
        await register({
            name,
            username,
            emailId,
            password
        }).then(async (res) => {
            if(res.status === 200) {
                console.log(res)
                // startNavigation()
                startNavigation(`/is-legit/ur/${res.verificationKey}`)
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

    const startNavigation = (url) => {
        if('back-to' in query) {
            navigate(`${url}${window.location.search}`)
        } else {
            navigate(url)
        }
    }

    const checkDataAvailability = async (mode, value) => {
        let data = {};
        if(mode === 'username') {
            setUsername(value);
        } else {
            setEmailId(value);
        }
        console.log(value)
        data[mode] = value;
        await check(mode, data)
            .then((res) => {
                if(res.status === 200) {
                    if(mode === 'username') {
                        setIsUsernameAvailable(res.dataStatus);
                    } else {
                        setIsEmailAvailable(res.dataStatus);
                    }
                } else {
                    handleError(res.message)
                }
            }).catch((err) => {
                handleError(err)
            })
    }
    
    return (
        <div className="joinforfree-page">
            <Navigation />
            <div className="joinforfree-center">
                <div className="signup">
                    <div className="heading">
                        Sign up and start learning
                    </div   >
                    <div className="signup-form">
                        <form onSubmit={handleSubmit}>
                            <div className="name">
                                <span>
                                    <PersonIcon />
                                </span>
                                <input type="text" placeholder="Full Name" onChange={e => setName(e.target.value)}></input>
                            </div>
                            <div className="name">
                                <span>
                                    <PersonIcon />
                                </span>
                                <input type="text" placeholder="Username" onBlur={e => checkDataAvailability('username', e.target.value)}></input>
                            </div>
                            <div className="email">
                                <span>
                                    <EmailIcon />
                                </span>
                                <input type="email" placeholder="Email Address" onBlur={e => checkDataAvailability('emailId', e.target.value)}></input>
                            </div>
                            <div className="password">
                                <span >
                                    <LockIcon />
                                </span>
                                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
                            </div>
                            <div className="signin-button">
                                {/* <Link to=''> */}
                                    <button type="submit"> Sign Up</button>
                                {/* </Link> */}
                                <Otp show={show} onClose={() => setShow(false)}></Otp>
                            </div>
                        </form>
                        <div className="account-holder">
                            Already have an account?
                            <Link to={`/login${window.location.search}`} style={{ textDecoration: 'none' }}>
                                <p> Login </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
export default JoinForFree;