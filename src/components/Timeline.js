import firebaseConfig from '../firebase';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useAuth } from "../context/UserAuth";
import uuid from "react-uuid";
import navLogo2 from '../assets/moodyMemesLogoBannerHorizontal.png';
import ConfirmDelete from './ConfirmDelete';
import Warning from './Warning';

const Timeline = (props) => {
    //State to save user's gif and info object into the timeline
    const [ timeline, setTimeline ] = useState([]);
    
    const [ deleteAlert, setDeleteAlert ] = useState(false);
    const [ removeUID, setRemoveUID ] = useState('');
    const [ nonUserWarning, setNonUserWarning ] = useState(false);
    const { currentUser } = useAuth();
    
    useEffect(() => {
        const database = getDatabase(firebaseConfig);
        const databaseRef = ref(database);
        
        onValue(databaseRef, (response) => {
            const newState = [];
            const data = response.val();
            for (let key in data) {
                newState.push({ key: key, name: data[key] })
            }
            setTimeline(newState.reverse());
        })
    }, []);
    
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
                    <Link to="/home">
                        <img className="navLogo" src={navLogo2} alt="" />
                    </Link>
                </nav>
            </div>
            <div className="wrapper roundScroll">
                <h2>Moody Timeline</h2>
                <div className="timelineContainer">
                    {timeline.map((result) => {
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
                                                setRemoveUID(result.key);
                                                setDeleteAlert(true);
                                            }}>
                                                <i className="fa-regular fa-trash-can" aria-label="delete icon"></i>
                                            </button>
                                            : <button onClick={(e) => {
                                                e.preventDefault();
                                                setNonUserWarning(true);
                                            }}>
                                                <i className="fa-regular fa-trash-can" aria-label="delete icon"></i>
                                            </button>
                                        }
                                    </div>  
                                </div>
                            </div>
                        )
                    })}

                    {deleteAlert && <ConfirmDelete setDeleteAlert={setDeleteAlert} handleRemoveMeme={handleRemoveMeme} removeUID={removeUID} />}
                                
                    {nonUserWarning && <Warning setNonUserWarning={setNonUserWarning} />}
                </div>
            </div>
            <div className="wrapper">
                <div className="scrollInst">Scroll for more</div>
            </div>
        </section>
    );
};

export default Timeline;