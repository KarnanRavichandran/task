import React,{useNotes, useState} from 'react'
import Header from './components/Header/Header';
import CretaeNote from './components/CreateNote/CretaeNote';
import Note from "./components/Note/Note";
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [notes,setNotes] = useState([])


  const addnote = (newNote)=>{
    setNotes((prevNotes)=>{
      return[...prevNotes,newNote]
    })
  }
  console.log('notes',notes)
  return (
    <>
      <div className='app'>
        <Header />
        <CretaeNote addnote ={addnote} />
       {notes.map((note)=>{
        return(
          <Note title ={note.title} content ={note.content} />
        )
       })}
        <Footer />
      </div>
    </>
  );
}

export default App;
