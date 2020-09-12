import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import "../App.css";
import { putNoteId } from "../store/api/actions";



const ModalWindow = ({ content, setData }) => {

    const dispatch = useDispatch()

    const handleClose = (e) => {
        setData(false)
        dispatch(putNoteId({}))
    }
    return (
        <Fragment>
            <div className="modal">
                <div className="modal-content">
                    <h1>{content.title}</h1>
                    <p>{content.text}</p>
                    <button onClick={handleClose} className="btn">Close</button>
                </div>
            </div>

        </Fragment>
    );
}


export default ModalWindow