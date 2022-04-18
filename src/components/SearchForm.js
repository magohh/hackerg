const SearchForm = () =>{

    // const handleClick =(e)=>{
    //     e.stopPropagation();
    //     alert('Helloo input')
    // }
    const handleEvent =(e)=>{
       if(e.key === "a" || e.key === "e" || e.key === "i" || e.key === "o" || e.key === "u" )e.preventDefault();
        console.log(e.key)

    }
    return(
        <>
        {/* <input onClick={handleClick}/> */}
        <input onKeyDown={handleEvent}/>
        <button>Buscar</button>
        </>
    )
}
export default SearchForm