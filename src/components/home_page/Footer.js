import { Logo } from "./Navigation.js";
import "../../assets/styles/_footer.scss";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
                <Logo />
            </div>
            <div className="footer-right">
                <p>© 2022 OnlineCourses, Inc. </p>
            </div>
        </div>
    )
}

export default Footer;