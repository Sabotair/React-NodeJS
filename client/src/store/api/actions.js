import axios from "axios";

export const PUT_ALL_NOTES = 'PUT_ALL_NOTES'
export const PUT_NOTE_ID = 'PUT_NOTE_ID'



export const putNotes = (notes) => ({
    type: PUT_ALL_NOTES,
    payload: notes
})
export const putNoteId = (note) => ({
    type: PUT_NOTE_ID,
    payload: note
})

export const loadNotes = () => async (dispatch, getState) => {
    const res = await axios.get('/notes')
    dispatch(putNotes(res.data))
}


export const addNotes = (title, text) => async (dispatch, getState) => {
    const res = await axios.post('/notes', { title, text })
    dispatch(putNotes(res.data))
}

export const editNotes = (id, title, text) => async (dispatch, getState) => {
    const res = await axios.put(`/notes/${id}`, { title, text })
    dispatch(putNotes(res.data))
}
export const deleteNotes = (id) => async (dispatch, getState) => {
    const res = await axios.delete(`/notes/${id}`)
    dispatch(putNotes(res.data))
}
export const getNoteById = (id) => async (dispatch, getState) => {
    const res = await axios.get(`/notes/${id}`)
    dispatch(putNoteId(res.data[0]))
}


