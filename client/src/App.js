import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import NotesItem from './NotesItem';

const App = () => {

  const [response, setResponse] = useState([])
  const [post, setPost] = useState('')
  const [edit, setEdit] = useState(false)
  const [responseToPost, setRresponseToPost] = useState('')



  const callApi = async () => {
    const res = await axios.get('/notes')
    setResponse(Object.values(res.data))
  };

  useEffect(() => {
    callApi()
  }, [edit])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('/notes', { title: post })
    setRresponseToPost(response.data);
    setPost('')
  }


  return (
    // <div className="App">
    //   <h1 style={{ textAlign: "center" }}>Black lives matter</h1>
    //   <div className="text">
    //     <ul>
    //       {
    //         response.map((elem, index) => (
    //           <li key={index}>№{elem.id} {elem.title}</li>
    //         ))
    //       }
    //     </ul>
    //   </div>
    //   <form onSubmit={handleSubmit}>
    //     <p>
    //       <strong>Post to Server:</strong>
    //     </p>
    //     <input
    //       type="text"
    //       value={post}
    //       onChange={e => { setPost(e.target.value) }}
    //     />
    //     <button type="submit">Submit</button>
    //   </form>
    //   <p>{responseToPost}</p>
    // </div>

    <div className="notes">
      <h1 className="notes__title">Notes</h1>
      <a className="create-note" href="#">
        Создать заметку
  </a>
      <ul className="notes__list">
        {response.map((item, index) => (
          <NotesItem id={index} edit={edit} setEdit={setEdit} title={item.title} text={item.text} />
        ))}

      </ul>
    </div>
  );
}

export default App;
