import React, { useState } from 'react'
import Profile from './Profile';
import Nav from './Nav';
import Footer from './Footer';
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [show, setShow]=useState(false)
  return (
    <div className=' relative'>
      <button onClick={()=>setShow(!show)} className=' fixed text-white m-3 text-4xl z-20'> <FiMenu/> </button>
      {show ? <div className="lg:w-1/5 w-1/2 h-screen bg-zinc-900 lg:flex lg:flex-col fixed z-10  ">
        <Profile />
        <Nav />
        <Footer />
      </div>:null}

    </div>
  );
}

export default Navbar