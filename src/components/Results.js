import firebaseConfig from "../firebase";
import { getDatabase, ref, push } from "firebase/database";
import { Link } from "react-router-dom";
import { useContext, createContext } from "react";
import { ChoiceContext } from "./GiphyData";
import { useAuth } from "../context/UserAuth";

export const LikesContext = createContext();

const Results = (props) => {
  // Set variable for 'userChoice' from GiphyData (useContext)
  const userChoice = useContext(ChoiceContext);
  const { currentUser } = useAuth();

  // Variables to set date info
  const date = new Date();
  const month = date.toLocaleString("en-US", {
    month: "long",
  });
  const day = date.getDate();
  const year = date.getFullYear();

  const refreshPage = () => {
    window.location.reload();
  };

  // Object with user's gif, mood and date to be pushed to firebase
  const result = {
    mood: userChoice,
    image: props.finalGif,
    date: `${month} ${day}, ${year}`,
    uid: currentUser.uid,
  };

  // Variables to set database and databaseRef for firebase; call the push function into firebase
  const sendToTimeline = () => {
    const database = getDatabase(firebaseConfig);
    const databaseRef = ref(database);
    console.log(databaseRef, result)
    push(databaseRef, result);
  };

  return (
    <section className="results">
      <div className="resultsContent">
        <p ref={props.resultRef}>{userChoice}</p>
        <img
          src={props.finalGif}
          alt={`user's selected gif that represents the mood of ${userChoice}`}
        />
      </div>

      <div className="buttonWrap">
        <Link className="button" to="/Home" onClick={refreshPage}>
          Try Again
        </Link>
        <Link
            className="button"
            onClick={sendToTimeline}
            to="/Timeline"
            state={{ result: result }}
          >
            Save to Timeline
          </Link>
      </div>
    </section>
  );
};

export default Results;
