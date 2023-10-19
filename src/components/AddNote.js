import { useState } from "react";

const AddNote = ({addnote})=>{
    const [notetext , setnotetext] = useState('');
    const characterLimit = 200;
    const handlechange = (e)=>{
        if(characterLimit - e.target.value.length >= 0){
        setnotetext(e.target.value);
        }
    }
    const handleSaveChnge = ()=>{
        if(notetext.trim().length > 0){
            addnote(notetext)
            setnotetext('');
        }
    }
    return(
        <div className="note new">
            <textarea  cols="8" rows="10" placeholder="Type to add a note .... " onChange={handlechange} value={notetext}></textarea>
            <div className="note-footer">
                <small>{characterLimit - notetext.length} Remaining</small>
                <button className="save" onClick={handleSaveChnge}>Save</button>
            </div>
        </div>
    );
};

export default AddNote;