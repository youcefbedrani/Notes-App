import React from 'react';
import {MdSearch} from 'react-icons/md';

const Search = ({handlesearchtext})=>{

    const handleinput = (e)=>{
        handlesearchtext(e.target.value)
    }
    return(
        <div className="search">
            <MdSearch className='search-icons' size='1.3em' />
            <input type="text" onChange={handleinput} placeholder='Type to Search Note ...' />
        </div>
    );
};

export default Search;