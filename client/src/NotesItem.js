import React, { Fragment, useState } from 'react'
import axios from 'axios'

const NotesItem = ({ id, edit, setEdit, title, text }) => {

    const [titleEdit, setTitleEdit] = useState(title)
    const [textEdit, setTextEdit] = useState(text)

    const handleChangeClass = (e) => {
        e.preventDefault();
        setEdit(!edit)
        if (edit) {
            axios.put(`/notes/${id + 1}`, { title: titleEdit, text: textEdit })
        }
    }
    const handleDelete = (e) => {
        e.preventDefault();

    }
    return (
        <Fragment>

            <li className="notes__list-item">
                <button onClick={handleDelete} type="button" className="delete-note-btn btn">
                    x
      </button>
                <button onClick={handleChangeClass} type="button" className="edit-note-btn btn">
                    edit
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
        </Fragment>
    )
}

export default NotesItem
