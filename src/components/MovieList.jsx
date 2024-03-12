import { useEffect, useState,useRef } from "react";
import GlobalApi from "../services/GlobalApi"
import Moviecard from "./MovieCard";
import { HiChevronLeft,HiChevronRight } from "react-icons/hi";
const screen = window.innerWidth

function Movieslist({genereId}){
    const slideref = useRef()
        const [movieslist,setmovielist] = useState([]);
    const getmoviebygenereid = ()=>{
        GlobalApi.getmoviesbygener(genereId).then(res=>{
            // console.log(res.data.results);
            setmovielist(res.data.results)
        })
    
    }
    function  slideleft(ele){
        ele.scrollLeft -= screen -330;
    }
    function  slideRight(ele){
        ele.scrollLeft += screen -330;
    }
    useEffect(()=>{
        getmoviebygenereid()
    },[])
    return(
        <>
                    <HiChevronLeft className="hidden md:block text-white text-[30px] absolute mx-6 mt-[150px] cursor-pointer left-0" onClick={()=>{slideleft(slideref.current)}}/>
    <HiChevronRight className="hidden md:block text-white text-[30px] absolute mx-6 mt-[150px] cursor-pointer right-0" onClick={()=>{slideRight(slideref.current)}}/>
       
        <div className="flex overflow-x-auto gap-8 scroll-smooth scrollbar-none px-3 py-10" ref={slideref}>
        

            {movieslist.map((ele,index)=>
            (<Moviecard movie={ele.poster_path} key={index}/>)
            )}
        </div>
        </>
    )
}

export default Movieslist