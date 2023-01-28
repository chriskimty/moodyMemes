import { Link } from "react-router-dom";

const Warning = ({ setNonUserWarning }) => {
    return (
        <div className="modal" onClick={() => {setNonUserWarning(false)}}>
            <div className="modalContainer">
                <h3>⚠️ Alert ⚠️</h3>
                <p>You can't delete someone else's meme! If this is your meme, please make sure you're logged into your account before deleting.</p>
                <div className="controls">
                    <button
                        className="button"
                        onClick={(e) => {
                            e.preventDefault();
                            setNonUserWarning(false);
                        }}>Close
                    </button>
                    <Link to="/login" className="button">Go to Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Warning;