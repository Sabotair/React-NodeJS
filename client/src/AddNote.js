import React, { Fragment, useState } from 'react'
import './App.css'
import axios from 'axios'

const AddNote = ({ isComplete, setComplete }) => {

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const handlePostNotes = () => {
        try {
            axios.post('/notes', { title: title, text: text })
            setComplete(!isComplete)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Fragment>
            <div className="container">

                <div className="add__note">
                    <div className="add__input">
                        <p>Title:</p>
                        <input type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)} />
                        <p>Text:</p>
                        <input type="text"
                            value={text}
                            onChange={e => setText(e.target.value)}
                        />
                        <button type="submit" onClick={handlePostNotes} className="btn-submit">Submit</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AddNote  
