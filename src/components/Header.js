const Header = ({handletogglechange})=>{
    const handleTogglechange = ()=>{
        handletogglechange((previosDarkMode)=> !previosDarkMode);
    }
    return(
        <div className="header">
            <h1>Notes</h1>
            <button className="save" onClick={handleTogglechange}>Toggle Mode</button>
        </div>
    );
};
export default Header;