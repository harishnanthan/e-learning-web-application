import Navigation from "../home_page/Navigation";
import "../../assets/styles/_login.scss";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import { Link } from "react-router-dom";
// import { useState } from "react";


const Login = () => {
    return (
        <div className="login-page">
            <Navigation />
            <div className="login-center">
                <div className="login">
                    <div className="heading">
                        Log In to Your Online Course Account!
                    </div   >
                    <div className="login-form">
                        <form>
                            <div className="name">
                                <span>
                                    <PersonIcon />
                                </span>
                                <input type="text" placeholder="Full Name"></input>
                            </div>
                            <div className="password">
                                <span >
                                    <LockIcon />
                                </span>
                                <input type="password" placeholder="Password"></input>
                            </div>
                            <div className="Login-button">
                                <button type="submit">Login</button>
                            </div>
                        </form>
                        <div className="forgot-password">
                            {/* <a onClick={() => setShow(true)}>Forgot Password?</a> */}
                        </div>
                        <div className="account-holder">
                            Don't have an account?
                            <Link to="/joinforfree" style={{ textDecoration: 'none' }}>
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