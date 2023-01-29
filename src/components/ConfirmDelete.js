const ConfirmDelete = ({setDeleteAlert, handleRemoveMeme, removeUID}) => {
    return (
        <div className="modal" onClick={() => {setDeleteAlert(false)}}>
            <div className="modalContainer">
                <h3>⚠️ Are you Sure? ⚠️</h3>
                <p>This will delete your moody meme. Are you sure you want to proceed?</p>
                <div className="controls">
                    <button
                        className="cancel button"
                        onClick={(e) => {
                        e.preventDefault();
                        setDeleteAlert(false);
                        }}>Nope</button>
                    <button
                        className="delete button"
                        onClick={(e) => {
                        e.preventDefault();
                        handleRemoveMeme(removeUID);
                        }}>Yup
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmDelete;