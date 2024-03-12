import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMailUnread } from "react-icons/io5";
function Footer(){

    return (
        <div className="bg-white relative bottom-0 h-16 flex justify-evenly">
        
        <a href="https://github.com/Apsar7004" className="flex m-[18px] gap-3 hover:border-b-2 border-gray-950 ">  <FaGithub className=" text-xl md:text-2xl text-zinc-950"/>
            <h1 className=" text-black text-sm md:text-xl font-medium md:font-semibold">GitHub</h1></a>

        <a href="https://www.linkedin.com/in/apsar-m-05713324a/" className="flex m-[18px] gap-3 hover:border-b-2 border-gray-950">  <FaLinkedin  className="text-xl md:text-2xl text-zinc-950"/>
            <h1 className=" text-black text-sm md:text-xl font-medium md:font-semibold">LinkedIn</h1></a> 

        <a href="mailto:apsar7004@gmail.com" className="flex m-[18px] gap-3 hover:border-b-2 border-gray-950">  <IoMailUnread className="text-xl md:text-2xl text-zinc-950"/>
            <h1 className=" text-black text-sm md:text-xl font-medium md:font-semibold">Mail</h1></a>   

        </div>
    )
}

export default Footer