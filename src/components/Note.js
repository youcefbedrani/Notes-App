import { MdDeleteForever } from 'react-icons/md';

const Note = ({id , text , date , deleteNote})=>{
    const deleteClick = ()=>{
        deleteNote(id);
    }
    return (
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever className='delete-note' size='1.3em' onClick={deleteClick}/>
            </div>
        </div>
    );
};

export default Note;