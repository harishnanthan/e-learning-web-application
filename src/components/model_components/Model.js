import React from 'react';
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
// import { Link } from "react-router-dom";
import "./_model.scss";

function Model({ show, onClose }) {
    if (!show) return null;
    return (
        <div className='model'>
            <div className='model-content' >
                <div className="signup">
                    <div className="heading">
                        Become a Udemy Instructor!
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
                                <button type="submit"> Sign Up</button>
                            </div>
                        </form>
                        <hr />
                        <div className="account-holder">
                            <button onClick={onClose}>close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model;
