import React, { Fragment } from "react";
import "./App.css";




const ModalWindow = ({ content, setData }) => {

    return (
        <Fragment>
            <div className="modal">
                <div className="modal-content">
                    <h1>{content.title}</h1>
                    <p>{content.text}</p>
                    <button onClick={(e) => { setData(false) }} className="btn">Close</button>
                </div>
            </div>

        </Fragment>
    );
}


export default ModalWindow