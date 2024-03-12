
import GeneralList from "../constants/GeneralList"

import Movieslist from "./MovieList";

function Generamovielist(){

    return(
        <div >
    {GeneralList.genere.map((ele,index)=>index<=5 && (
        <div className="p-8 px-8 md:px-16" key={index}>
            <h2 className="text-white text-[20px] font-bold">{ele.name}</h2>
            <Movieslist  genereId={ele.id}/>
        </div>
    ) )}
        </div>
    )
}

export default Generamovielist;