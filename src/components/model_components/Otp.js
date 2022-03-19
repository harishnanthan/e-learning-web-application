import React from "react";
import OtpIcon from "@material-ui/icons/VpnKey";
// import "./_opt.scss";

function Otp({ show, onClose }) {
    if (!show) return null;
    return (
        <div>
            <div>
                <span>
                    <OtpIcon />
                </span>

                <input type="text" placeholder="Enter your One time password"></input>
            </div>
        </div>
    )
}

export default Otp;