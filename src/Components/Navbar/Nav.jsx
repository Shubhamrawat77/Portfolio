import React from 'react'
import { Link } from 'react-scroll'

function Nav({onLinkClick}) {

const data= ["Home", "About", "Work", "Skills", "Education", "Contact"]
  return (
    <>
      <div className="w-full flex flex-col gap-3 mt-5 items-center ">
        {data.map((item, index) => (
          <Link 
          className=' cursor-pointer' 
          key={index} 
          to={item.toLowerCase()} 
          smooth={true} duration={500}
          onClick={onLinkClick}
          >

            {item.toUpperCase()}

          </Link>
        ))}
      </div>
    </>
  );
}

export default Nav