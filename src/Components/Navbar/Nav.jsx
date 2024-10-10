import React, { useState } from 'react'
import { Link } from 'react-scroll'

function Nav({onLinkClick}) {

const data= ["Home", "About", "Work", "Skills", "Education", "Contact"]
// const[isActive,setIsActive]=useState()
// const colorHandler=()=>{
//   setIsActive
// }
  return (
    <>
      <div className="w-full flex flex-col gap-3 mt-5 items-center ">
        {data.map((item, index) => (
          <Link
            className=" cursor-pointer flex items-center transition duration-100 ease-linear gap-1 text-slate-300 hover:text-white hover:scale-105 group "
            activeStyle="bg-red-500"
            key={index}
            to={item.toLowerCase()}
            smooth={true}
            duration={500}
            onClick={onLinkClick}
          >
            <span className=" inline-block w-1 h-1 invisible bg-green-500 rounded-full drop-shadow-glow group-hover:visible"></span>
            {item.toUpperCase()}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Nav