import { Link } from "react-router-dom";
import brittPhoto from "../assets/brittsPic.jpg";
import brittGif from "../assets/excitedGirlGif.webp";
import chrisPhoto from "../assets/chrisPic.jpg";
import chrisGifFinal from "../assets/chrisGifFinal.gif";
import danielGif from "../assets/danielGif.gif";
import kwamePic from "../assets/kwame.jpeg";
import KwameGif from "../assets/kwameGif.gif";
import danielPic from "../assets/daniel.jpg";

const MeetTheDevs = () => {
  return (
    <section className="meetTheDevs">
      <div className="wrapper meetDevsContent">
        <div className="linkBox">
          <Link className="backLink" to="/home">
            <i class="fa-solid fa-hand-point-left"></i>Back
          </Link>
        </div>
        <h2>Meet The Team</h2>
        <ul className="bioContainer">
          <div className="topRow">
            <li className="bio">
              <div className="picContainer">
                <img
                  className="profile"
                  src={brittPhoto}
                  alt="person holding up a peace sign"
                />
                <img
                  className="overlayGif"
                  src={brittGif}
                  alt="excited girl eating cotton candy gif"
                />
              </div>
              <h3>Brittany Freitas (she/her)</h3>
              <p>
                Brittany is a Toronto-based web developer with a
                love for bringing ideas to life through beautiful web design and
                clean code. She is a career switcher with a background in social
                work and enjoys taking on projects that make a social impact.
                Outside of work, you can find her rock climbing, hiking, or
                binge watching interior design content on Youtube.
              </p>

              <div className="socials">
                <a
                  href="https://www.linkedin.com/in/brittany-freitas/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  class="link"
                  href="https://github.com/BrittFreitas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  class="link"
                  href="https://www.brittanyfreitas.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-laptop"></i>
                </a>
              </div>
            </li>

            <li className="bio">
              <div className="picContainer">
                <img
                  className="profile"
                  src={chrisPhoto}
                  alt="person smiling with a cat beside them"
                />
                <img
                  className="overlayGif"
                  clasName="overlay"
                  src={chrisGifFinal}
                  alt="dog typing on computer while laying down"
                />
              </div>
              <h3>Chris Taeyoung Kim (she/her)</h3>
              <p>
                Chris is a web developer passionate about writing clean,
                accessible and well-designed code. As a teacher turned
                developer, she thrives in working collaboratively in fast-paced
                environments and brings her analytic lens as a musician to find
                creative solutions to complex problems. Outside of coding, you
                can find Chris playing with her cat, at the gym, or listening to
                true crime podcasts.
              </p>
              <div className="socials">
                <a
                  href="https://www.linkedin.com/in/chris-ty-kim/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  class="link"
                  href="https://github.com/chriskimty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  class="link"
                  href="https://chriskim.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-laptop"></i>
                </a>
              </div>
            </li>
          </div>

          <div className="bottomRow">
            <li className="bio">
              <div className="picContainer">
                <img
                  className="profile"
                  src={danielPic}
                  alt="person and baby smiling"
                />
                <img
                  className="overlayGif"
                  src={danielGif}
                  alt="person throwing computer into trash can"
                />
              </div>
              <h3>Daniel Butcher (he/him)</h3>
           
                <p>
                  Daniel has always had a love for tech, from building computers
                  and electronics to now all things software. If he's not coding
                  or browsing forums for what's new in cybersecurity, don't
                  worry you can find him in the exact same place playing some
                  sort of RPG game, being the hermit that everyone has come to
                  know him to be.
                </p>
                <div className="socials">
                  <a
                    href="https://www.linkedin.com/in/daniel-butcher25/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    class="link"
                    href="https://github.com/dbutch25"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    class="link"
                    href="http://www.danielbutcher.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-laptop"></i>
                  </a>
              </div>
            </li>

            <li className="bio">
              <div className="picContainer">
                <img
                  className="profile"
                  src={kwamePic}
                  alt="person simling and throwing up a peace sign"
                />
                <img
                  className="overlayGif"
                  src={KwameGif}
                  alt="person sand boaring"
                />
              </div>
              <h3>Kwame Appiah-Kubi (he/him)</h3>
             
                <p>
                  Moving from the media world into the tech industry, Kwame has
                  an affinity for design and loves to code for the user
                  experience. Outside of coding, you can find Kwame searching
                  through dollar bins at record stores, watching a sad movie, or
                  confidently getting answers wrong at trivia night.
                </p>

                <div className="socials">
                  <a
                    className="link"
                    href="https://www.linkedin.com/in/kwameappiahkubi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a className="link" href="https://github.com/kwametsunami">
                    <i
                      className="fa-brands fa-github"
                      target="_blank"
                      rel="noopener noreferrer"
                    ></i>
                  </a>
                  <a className="link" href="https://heykwa.me/">
                    <i
                      className="fa-solid fa-laptop"
                      target="_blank"
                      rel="noopener noreferrer"
                    ></i>
                  </a>
                </div>
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default MeetTheDevs;