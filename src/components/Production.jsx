import disney from "./../assets/Images/disney.png";
import marvel from "./../assets/Images/marvel.png";
import nationalG from "./../assets/Images/nationalG.png";
import pixar from "./../assets/Images/pixar.png";
import starwar from "./../assets/Images/starwar.png";

import disneyv from "./../assets/Videos/disney.mp4";
import marvelv from "./../assets/Videos/marvel.mp4";
import nationalGv from "./../assets/Videos/national-geographic.mp4";
import pixarv from "./../assets/Videos/pixar.mp4";
import starwarv from "./../assets/Videos/star-wars.mp4";




function Images({Src,Alt,Vid}){
    return(
        <div className="border-[1px] rounded-lg transition-all duration-100 ease-in-out cursor-pointer hover:scale-110 relative shadow-xl shadow-gray-700">
        
        <video src={Vid} autoPlay loop playsInline  className="rounded-lg z-10 absolute top-0 opacity-0 hover:opacity-50" />
        <img  src={Src} alt={Alt} className="w-full z-0  opacity-100"/>
      

       
        
        </div>
    )
}

function Production() {
    const list = [
        {
            id:1,
            image:disney,
            video:disneyv
        },
        {
            id:2,
            image:nationalG,
            video:nationalGv
        },
        {
            id:3,
            image:pixar,
            video:pixarv
        },
        {
            id:4,
            image:marvel,
            video:marvelv
        },
        {
            id:5,
            image:starwar,
            video:starwarv
        },
   
    ]
    return (<div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
       
      
    {list.map((ele)=>
        <Images Src={ele.image} Alt={ele.id} Vid={ele.video} key={ele.id} />
       
        
    )}
    {/* <video src={marvelv} autoPlay loop playsInline  className="rounded-lg " /> */}
      </div>

    )
  }
  
  export default Production
  