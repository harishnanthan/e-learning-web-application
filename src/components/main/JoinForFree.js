import Navigation from "../home_page/Navigation.js"
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import Otp from "../model_components/Otp.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../../assets/styles/_joinforfree.scss";

function JoinForFree() {
    const [show, setShow] = useState(false);
    return (
        <div className="joinforfree-page">
            <Navigation />
            <div className="joinforfree-center">
                <div className="signup">
                    <div className="heading">
                        Sign up and start learning
                    </div   >
                    <div className="signup-form">
                        <form>
                            <div className="name">
                                <span>
                                    <PersonIcon />
                                </span>
                                <input type="text" placeholder="Full Name"></input>
                            </div>
                            <div className="email">
                                <span>
                                    <EmailIcon />
                                </span>
                                <input type="email" placeholder="Email Address"></input>
                            </div>
                            <div className="password">
                                <span >
                                    <LockIcon />
                                </span>
                                <input type="password" placeholder="Password"></input>
                            </div>
                            <div className="signin-button">
                                <Link to=''>
                                    <button type="submit" onClick={() => setShow(true)}> Sign Up</button>
                                </Link>
                                <Otp show={show} onClose={() => setShow(false)}></Otp>
                            </div>
                        </form>
                        <div className="account-holder">
                            Already have an account?
                            <Link to="/login" style={{ textDecoration: 'none' }}>
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