import React, { Fragment, useState } from 'react'
import ModalWindow from './ModalWindow';
import { useDispatch, useSelector } from 'react-redux'
import { editNotes, deleteNotes, getNoteById } from '../store/api/actions';



const NotesItem = ({ id, title, text }) => {

    const [titleEdit, setTitleEdit] = useState(title)
    const [textEdit, setTextEdit] = useState(text)
    const [edit, setEdit] = useState(false)
    const [isData, setData] = useState(false)

    const note = useSelector(state => state.api.note)
    const dispatch = useDispatch()

    const handleEditChange = async (e) => {
        setEdit(!edit)
        if (edit) {
            dispatch(editNotes(id, titleEdit, textEdit))
        }
    }
    const handleDelete = (e) => {
        dispatch(deleteNotes(id))
    }
    const handleModelWindow = async (e) => {
        dispatch(getNoteById(id))
        setData(!isData)
    }

    return (
        <Fragment>
            <li className="notes__list-item" >
                <button onClick={handleDelete} type="button" className="delete-note-btn btn">
                    Delete
                </button>
                <button onClick={handleEditChange} type="button" className="edit-note-btn btn">
                    Edit
                </button>
                <button onClick={handleModelWindow} type="button" className="show-note-btn btn">
                    Show
                </button>
                <div className={edit ? 'edit' : 'view'}>
                    <div className="note__title">
                        <input type="text" className="edit" value={titleEdit}
                            onChange={e => setTitleEdit(e.target.value)} />
                        <h3>{title}</h3>
                    </div>
                    <div className="note__text">
                        <input
                            type="text"
                            className="edit"
                            value={textEdit}
                            onChange={e => setTextEdit(e.target.value)}
                        />
                        <p>{text}</p>
                    </div>
                </div>
            </li>
            {isData ? <ModalWindow content={note} setData={setData} /> : ''}
        </Fragment>
    )
}

export default NotesItem 
