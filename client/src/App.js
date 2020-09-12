import React, { useState, useEffect } from 'react';
import NotesItem from './components/NotesItem';
import AddNote from './components/AddNote';
import { loadNotes } from './store/api/actions';
import { connect } from 'react-redux';
import './App.css';



const App = ({ loadNotes, notes }) => {

  const [isComplete, setComplete] = useState(false)
  const [isAdd, setAdd] = useState(false)


  useEffect(() => {
    loadNotes()
  }, [loadNotes])


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
        {notes.map((item, index) => (
          <NotesItem key={index} id={item.id} title={item.title} text={item.text} />
        ))}

      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    notes: state.api.notes
  }
}

const mapDispatchToProps = {
  loadNotes
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
