import Note from './Note';

import AddNote from './AddNote';
const NotesList = ({ notes , addnote , deleteNote })=>{
    return(
        <div className="noteslist">
            {notes.map((note)=>(
                <Note id={note.id} text={note.text} date={note.date} deleteNote={deleteNote} />
            ))}
            <AddNote addnote={addnote}/>
        </div>
    );
};

export default NotesList;