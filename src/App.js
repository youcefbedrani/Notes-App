import { useEffect, useState } from "react";
import {nanoid} from 'nanoid';
import NotesList from "./components/Notes_Lists";
import Search from './components/Search'
import Header from './components/Header'
import Footer from './components/Footer'

const App = ()=>{
  const [notes , setNotes] = useState([
    {
    id : nanoid(),
    text : "This is my first Note",
    date : "15/14/14",
  },
]);

useEffect(() => {
  const savedNote = JSON.parse(localStorage.getItem('react-note-app-data'));
  if (savedNote) {
    setNotes(savedNote);
  }
}, []);

useEffect(() => {
  localStorage.setItem('react-note-app-data', JSON.stringify(notes));
}, [notes]);

const [searchText , setsearchText] = useState('');

const [darkmode , setdarkmode] = useState(false);

const addnote = (text)=>{
  const date = new Date();
  const newNote ={
    id : nanoid(),
    text : text ,
    date : date.toLocaleDateString(),
  }
  const newNotes = [...notes , newNote];
  setNotes(newNotes);
}
const deleteNote = (id)=>{
  const newNotes = notes.filter((note)=>note.id !== id)
  setNotes(newNotes);
}
  return (
    <div className={`${darkmode && 'dark-mode'}`}>
      <div className="container">
        <Header handletogglechange={setdarkmode}/>
        <Search handlesearchtext={setsearchText}/>
        <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} deleteNote={deleteNote} addnote={addnote}/>
        <Footer />
      </div>
    </div>
  );
};

export default App;