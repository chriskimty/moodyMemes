import { Link } from "react-router-dom";
import logo2 from "../assets/moodyMemesLogoHorizontal.png"

const Welcome = () => {
    return (
      <section className="welcome">
        <div className="wrapper">
          <h1><span className="visuallyHidden">moody memes</span></h1>
          <img className="logo" src={logo2} alt="" />
          <h2>Express your sentiments <span>with a gif✨</span></h2>
          <Link to="/Home" className="button">Get Started</Link>
        </div>
      </section>
    )
};

export default Welcome;