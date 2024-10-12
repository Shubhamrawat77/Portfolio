import React, { useState } from 'react'
import Profile from './Profile';
import Nav from './Nav';
import Footer from './Footer';
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";



function Navbar() {
  const [show, setShow]=useState(false)
  const onLinkClick = ()=> setShow(false)
  return (
    <div className=" relative">
      <div
        onClick={() => setShow(!show)}
        className=" fixed lg:hidden text-3xl mt-3 cursor-pointer z-30 "
      >
        {show ? (
          <RxCross2 />
        ) : (
            <FiMenu />
        )}
      </div>

      {/* For Large Screen */}
      <div className=" lg:w-1/5 hidden h-screen bg-custom-gradient-second lg:flex lg:flex-col justify-evenly fixed z-10  ">
        <Profile />
        <Nav />
        <Footer />
      </div>

      {/* For Small Screen */}
      {show && (
        <div className=" backdrop-blur-lg w-full lg:hidden h-screen bg-black/30 z-20 fixed ">
          <div className="  w-10/12 lg:hidden h-screen bg-custom-gradient-forth z-20 fixed left-0 ease-in-out duration-200">
            <Profile />
            <Nav onLinkClick={onLinkClick} />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar