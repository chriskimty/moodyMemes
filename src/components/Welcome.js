// import { Link } from "react-router-dom";
import { useState } from "react";
import logo2 from "../assets/moodyMemesLogoHorizontal.png"
import Login from "./Login";

const Welcome = () => {

  const [isClicked, setIsClicked] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(true);
  }

    return (
      <section className="welcome">
        <div className="wrapper">
          <h1><span className="visuallyHidden">moody memes</span></h1>
          <img className="logo" src={logo2} alt="" />
          <h2>Express your mood <span>in a meme✨</span></h2>
          {/* <Link to="/home" className="button">Get Started</Link> */}
          <button onClick={handleClick} className="button">Get Started</button>
          {isClicked ? <Login/> : null}
        </div>
      </section>
    )
};

export default Welcome;