import React, { Fragment, useState } from 'react'
import axios from 'axios'

const NotesItem = ({ id, isComplete, setComplete, title, text }) => {

    const [titleEdit, setTitleEdit] = useState(title)
    const [textEdit, setTextEdit] = useState(text)
    const [edit, setEdit] = useState(false)

    const handleChangeClass = (e) => {
        setEdit(!edit)
        try {
            if (edit) {
                axios.put(`/notes/${id}`, { title: titleEdit, text: textEdit })
            }
            setComplete(!isComplete)
        } catch (error) {
            console.error(error)
        }

    }
    const handleDelete = async (e) => {
        try {
            await axios.delete(`/notes/${id}`)
            setComplete(!isComplete)
        } catch (error) {
            console.error(error)
        }

    }
    return (
        <Fragment>

            <li className="notes__list-item">
                <button onClick={handleDelete} type="button" className="delete-note-btn btn">
                    Delete</button>
                <button onClick={handleChangeClass} type="button" className="edit-note-btn btn">
                    Edit</button>

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
        </Fragment>
    )
}

export default NotesItem
