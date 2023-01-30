import { useState, createContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import navLogo2 from '../assets/moodyMemesLogoBannerHorizontal.png'
import { useAuth } from "../context/UserAuth";
import GiphyData from "./GiphyData";

export const GifContext = createContext();

const LandingPage = () => {
    //State to store data from Giphy API
    const [gif, setGif] = useState([]);
    const { user, logOut } = useAuth();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    async function handleLogOut() {
    setError('')
        try { 
        await logOut()
            navigate('/')
        } catch {
            setError('Failed to log out')
        }
    }
   
    const [showEmail, setShowEmail] = useState(false);
    const handleMouseEnter = (e) => {
        e.preventDefault();
        setShowEmail(true);
    }

    const handleMouseLeave = (e) => {
        e.preventDefault();
        setShowEmail(false);
    }

    return (
        <section className="landingPage">
            <div className="wrapper">
                <nav>
                    <div className="logo">
                        <Link to="/">
                            <img className="navLogo" src={navLogo2} alt="" />
                        </Link>
                    </div>
                    <div className="links">
                        {user.email !== null
                            ?
                            <div className="dashboard loggedIn">
                                <p className="userInfo"><i className="fa-solid fa-user"></i>{user.email}</p>
                                <i className="fa-solid fa-user hiddenUntilMobile"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                ></i>
                                <button onClick={handleLogOut} className="altColorForMQ">Logout</button>
                                {error && <p>{error}</p>}
                            </div>
                            : <div className="dashboard">
                                <Link to='/login' className="altColorForMQ">Login</Link>
                            </div>
                        }
                        <Link to="/timeline" className="altColorForMQ">Timeline</Link>
                    </div>
                    <div className="hiddenEmail">
                        {showEmail && <p>Logged in as {user.email}</p>}
                    </div>
                </nav>
                <GifContext.Provider value={gif}>
                    <GiphyData setGif={setGif} />
                </GifContext.Provider>     
            </div>
        </section>
    );
};

export default LandingPage;