// import React from "react"
import {  useEffect, useState , useRef } from "react"
import GlobalApi from "../services/GlobalApi"
import { HiChevronLeft,HiChevronRight } from "react-icons/hi";

const baseimageurl = "https://image.tmdb.org/t/p/original"
const screen = window.innerWidth

function Image(props){
    return(
        <div className="min-w-full mr-8">
        <img src={props.Src} className="md:h-[380px] rounded-md object-fill min-w-full hover:border-[4px] transition-all duration-100 border-gray-400 ease-in"/>
        </div>
    )
}

function Slider() {

    const [moviesList,setmoviesList] = useState([]);
    const slideref = useRef()
    function getTrendingMovies()
    {
        GlobalApi.getTrendvideos.then((res)=>
        {
            let data = res.data.results;
            console.log(data)
            setmoviesList(data);
        })
        
    }

    function  slideleft(ele){
        ele.scrollLeft -= screen -110;
    }
    function  slideRight(ele){
        ele.scrollLeft += screen -110;
    }

    useEffect(()=>{
        getTrendingMovies();
    },[])



  return (
    <>
    <HiChevronLeft className="hidden md:block text-white text-[30px] absolute mx-6 mt-[150px] cursor-pointer" onClick={()=>{slideleft(slideref.current)}}/>
    <HiChevronRight className="hidden md:block text-white text-[30px] absolute mx-6 mt-[150px] cursor-pointer right-0" onClick={()=>{slideRight(slideref.current)}}/>
    
    <div className="flex overflow-x-auto w-full py-4 scrollbar-none px-16 scroll-smooth" ref={slideref}>
   
    {moviesList.map((item,index)=>(<Image Src={baseimageurl+item.backdrop_path} key={index} />))}
    </div>

    </>
  )
}

export default Slider;

