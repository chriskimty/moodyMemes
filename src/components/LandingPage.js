import { useState, createContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import navLogo2 from '../assets/moodyMemesLogoBannerHorizontal.png'
import { useAuth } from "../context/UserAuth";

// Import components
import GiphyData from "./GiphyData";

// Exporting context
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
   
    return (
        <section className="landingPage">
            <div className="wrapper">
                <nav>
                    <Link to="/">
                        <img className="navLogo" src={navLogo2} alt="" />
                    </Link>
                    {user.email !== null
                        ?
                        <div className="userDash">
                            <p>Logged in as {user.email}</p>
                            <button onClick={handleLogOut}>Logout</button>
                            {error && <p>{error}</p>}
                        </div>
                        : <Link to ='/login'>Login</Link>
                    }
                    <Link to="/timeline">Timeline</Link>
                </nav>
                <GifContext.Provider value={gif}>
                    <GiphyData setGif={setGif} />
                </GifContext.Provider>     
            </div>
        </section>
    );
};

export default LandingPage;