import React, { useState } from 'react'
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import "./CreateNote.css";

const CretaeNote = ({ addnote }) => {
  const [isExpanded, setisExpandedd] = useState(false);
  const [note, setNote] = useState({
    title: '',
    content: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote({ ...note, [name]: value })
  }
 
  const expand = () => {
    setisExpandedd(true)
  }

  const submitNote = (event) => {
    event.preventDefault();
    addnote(note);
    setNote({
      title: '',
      content: ''
    })
    setisExpandedd(false)
  }



  return (

    <div>
      <form className='create-note'>
        {isExpanded &&
          <input name='title' placeholder='Title' value={note.title} type='text' onChange={handleChange} ></input>}
        <textarea name='content' placeholder='Take a note...' value={note.content} rows={isExpanded ? 3 : 1} onChange={handleChange} onClick={expand} />
        <Zoom in={isExpanded} >
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  )
}

export default CretaeNote