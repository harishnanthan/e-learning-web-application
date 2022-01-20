import { Link } from 'react-router-dom'
import { JoinForFree } from './Navigation.js'
import { ReactComponent as UnderLine } from '../../assets/image/underline.svg';
// import { ReactComponent as BigBoy } from '../../assets/image/avathar.svg';
import "../../assets/styles/_hero.scss";
import Lottie from 'react-lottie';
import hero from '../../assets/lottifies/hero.json';

function Hero() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: hero,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className='hero' >
            <div className="hero-left-side">
                <div className="hero-content">
                    <p> An interactive learning platform</p>
                    <h1>Investing in Knowledge <br /> and Your Future</h1>
                    <UnderLine />
                    <p>with the help of our system, create your own path and drive on your skills on your own achieve ehat you seek</p>
                    <Link to="/joinforfree">
                        <JoinForFree />
                    </Link>
                </div>
            </div>
            <div className="hero-right-side">
                <div className='img'>
                    <Lottie
                        options={defaultOptions}
                        height={600}
                        width={600}
                    />
                </div>
            </div>
        </div >
    )
}


export default Hero;