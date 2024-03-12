
const poster_path = "https://image.tmdb.org/t/p/original/"

function Moviecard({movie}){

    return(
        <>
        <img className="w-[110px] md:w-[200px] rounded-md hover:border-[3px] border-gray-200 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer "  src={poster_path+movie}/>
        </>
    )
}

export default Moviecard