import firebaseConfig from '../firebase';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import uuid from "react-uuid";
import navLogo2 from '../assets/moodyMemesLogoBannerHorizontal.png';
import { useAuth } from "../context/UserAuth";
import ConfirmDelete from './ConfirmDelete';

const Timeline = (props) => {
    //State to save user's gif and info object into the timeline
    const [ timeline, setTimeline ] = useState([]);
    const { currentUser } = useAuth();
    const [ deleteAlert, setDeleteAlert ] = useState(false);
    const [removeUID, setRemoveUID] = useState('');
    
    useEffect(() => {
        const database = getDatabase(firebaseConfig);
        const databaseRef = ref(database);
        
        onValue(databaseRef, (response) => {
            const newState = [];
            const data = response.val();
            for (let key in data) {
                newState.push({ key: key, name: data[key] })
            }
            setTimeline(newState);
        })
    }, []);
    
    // 1. Only allow delete (func in Timeline) when uid of result matches the user uid that's logged in - DONE
    // 2. Create a pop-up confirmation modal to verify delete - DONE
    // 3. If user's uid doesn't match (i.e. user didn't create that result object), create a pop-up alert (use a library?) that tells them to log in to the correct account to delete - create another modal/component for this (style in the same way as confirmdelete)
    // 3. Display brief text instructions in results object that tells the anon user that if they want to delete from timeline, they must sign up with an email account
    const handleRemoveMeme = (memeKey) => {
        const database = getDatabase(firebaseConfig);
        const databaseRef = ref(database, `/${memeKey}`);
        remove(databaseRef);
        setRemoveUID('');
    }

    return (
        <section className="timeline">
            <div className="wrapper">
                <nav>
                    <Link to="/Home">
                        <img className="navLogo" src={navLogo2} alt="" />
                    </Link>
                </nav>
            </div>
            <div className="wrapper roundScroll">
                <h2>Moody Timeline</h2>
                <div className="timelineContainer">
                    {timeline.reverse().map((result) => {
                        return (
                            <div className="timelineItems"
                                key={uuid()}>
                                <div className="dateContent">
                                    <h3>{result.name.date}</h3>
                                </div>
                                <div className="inner"></div>
                                <div className="moodCard">
                                    <i className="fa-solid fa-caret-down"></i>
                                    <h4>Today's moody meme: <span>{result.name.mood}</span></h4>
                                    <img
                                        src={result.name.image}
                                        alt={`user selected gif to show the mood of ${result.name.mood}`}
                                    />
                                    <div className="timelineControls">
                                        {result.name.uid === currentUser.uid
                                            ? <button onClick={(e) => {
                                                e.preventDefault();
                                                //figure out why the two below result in timeline re-rendering with un-reversed method of the map
                                                setRemoveUID(result.key);
                                                setDeleteAlert(true);
                                            }}>
                                                <i className="fa-regular fa-trash-can" aria-label="delete icon"></i>
                                            </button>
                                            : <button onClick={() => 
                                                alert('You cannot delete memes of other users!')
                                            }>
                                                
                                                <i className="fa-regular fa-trash-can" aria-label="delete icon"></i>
                                            </button>
                                        }
                                    </div>  
                                </div>
                                {deleteAlert && <ConfirmDelete setDeleteAlert={setDeleteAlert} handleRemoveMeme={handleRemoveMeme} removeUID={removeUID}/>}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="wrapper">
                <div className="scrollInst">Scroll for more</div>
            </div>
        </section>
    );
};

export default Timeline;