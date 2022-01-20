import Courses from "../home_page/Courses";
import Features from "../home_page/Features";
import Footer from "../home_page/Footer";
import Hero from "../home_page/Hero";
import Instractor from "../home_page/Instructor";
import Navigation from "../home_page/Navigation";
import Sponser from "../home_page/Sponser";
import "../../assets/styles/_homepage.scss";

function Homepage() {
  return (
    <div className="home-page">
      <Navigation />
      <Hero />
      <Sponser />
      <Courses />
      <Instractor />
      <Features />
      <Footer />
    </div>
  );
}
export default Homepage;