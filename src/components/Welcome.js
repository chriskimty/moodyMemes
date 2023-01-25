import { useNavigate } from "react-router-dom";
import logo2 from "../assets/moodyMemesLogoHorizontal.png"

const Welcome = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate('/login');
  }

    return (
      <section className="welcome">
        <div className="wrapper">
          <h1><span className="visuallyHidden">moody memes</span></h1>
          <img className="logo" src={logo2} alt="" />
          <h2>Express your mood <span>in a meme✨</span></h2>
          <button onClick={handleClick} className="button">Get Started</button>
        </div>
      </section>
    )
};

export default Welcome;