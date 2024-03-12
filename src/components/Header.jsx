// import React from "react";
import logo from "./../assets/Images/Disney_logo.png";
import { HiHome,HiMagnifyingGlass,
        HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";
import Headeritems from "./Headeritems";
import profilepic from "./../assets/Images/profile.png"
import { useState } from "react";

function Header(){

    const menu =[
        {name : 'Home',
        icon : HiHome,
        id:1},

        {name : 'Searh',
        icon : HiMagnifyingGlass,
        id:2},

        {name : 'WatchList',
        icon : HiPlus,
        id:3},

        {name : 'Originals',
        icon : HiStar,
        id:4},

        {name : 'Movies',
        icon : HiPlayCircle,
        id:5},

        {name : 'Series',
        icon : HiTv,
        id:6}       
    ]

    const [toggle , settoggle] = useState(false)
  return (
    <div className="flex items-center justify-between p-3">


    <div className="flex items-center gap-10">

      <img src={logo} className="w-[80px] md:w-[100px] object-cover"></img>

      <div className="hidden md:flex items-center gap-6">
      {menu.map((item)=>(<Headeritems  name={item.name} Icon={item.icon} key={item.id} />) )}
      </div>

      <div className="flex items-center md:hidden gap-6">
      {menu.map((item,index)=> index < 2 &&(<Headeritems  name={''} Icon={item.icon} key={item.id} />) )}
      </div>

      <div className="items-center md:hidden gap-4" onClick={()=>{settoggle(!toggle)}}>

      <Headeritems className="md:hidden hover:t" name={''} Icon={HiDotsVertical}/>

      {toggle && <div className="absolute mt-2 bg-black border-[1px] border-gray-700 p-3 py-2">
      {menu.map((item,index)=> index >= 2 &&(<Headeritems  name={item.name} Icon={item.icon} key={item.id} />) )}
      </div>}

      </div>
    </div>
    <div>
        <img src={profilepic} className="w-[40px] rounded-full"></img>
    </div>
        
  </div>
  )
}

export default Header;
