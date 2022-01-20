// import Toy from "../../assets/image/404.svg";
import Navigation from "../home_page/Navigation";
import { Link } from "react-router-dom";
import "../../assets/styles/_page404.scss";


const Page404 = () => {
    return (
        <div className="page-error">
            <Navigation />
            <div className="page-error-content">
                <div className="page-error-head">
                    <p className="number">404</p>
                    <h1>we couldn’t find the page </h1>
                </div>
                <div className="page-error-button">
                    <p>Page is either removed or moved to a new location.</p>
                    <Link to="">
                        <button> Go to Homepage </button>
                    </Link>
                </div>
            </div>
            {/* <div className="error-page-img">
                <img src={Toy} alt="error-img" />
            </div> */}
        </div>
    )
}

export default Page404;