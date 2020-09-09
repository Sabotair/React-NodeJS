import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import NotesItem from './NotesItem';
import AddNote from './AddNote';

const App = () => {

  const [response, setResponse] = useState([])
  const [isComplete, setComplete] = useState(false)
  const [isAdd, setAdd] = useState(false)



  const callApi = async () => {
    try {
      const res = await axios.get('/notes')
      setResponse(Object.values(res.data))
    } catch (error) {
      console.error(error)
    }

  }

  useEffect(() => {
    callApi()
  }, [isComplete])


  const handleAddNote = () => {
    setAdd(!isAdd)
  }

  return (

    <div className="notes">
      <h1 className="notes__title">Notes</h1>
      <button onClick={handleAddNote} className="create-note" type='button'>
        Добавить заметку
  </button>
      {
        isAdd ? <AddNote isComplete={isComplete} setComplete={setComplete} /> : null
      }

      <ul className="notes__list">
        {response.map((item, index) => (
          <NotesItem key={index} id={item.id} isComplete={isComplete} setComplete={setComplete} title={item.title} text={item.text} />
        ))}

      </ul>
    </div>
  );
}

export default App;
