
import fileDownload from 'js-file-download';
import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll";
import resume from "../../../assets/resume.pdf";
import { MdDownload } from "react-icons/md";
import { IoMdContact } from "react-icons/io";


function Home() {
    const initialData={
      title: "Hi !",
      heading: "I'm Shubham Rawat",
      subHeading: "Srinagar Garhwal, Uttarakhand, India",
      btnText: "Contact me",
      isActive: true
    }
    const updatedData = {
      title: "I'm",
      heading: "a Frontend Developer",
      subHeading: "React.js Developer | JavaScript Expert | UI Developer",
      btnText: "My Resume",
      isActive: false,
    };
    const [userData, setUserData]=useState(initialData)

   useEffect(()=>{
    const interval= setInterval(()=>{
      setUserData((pre)=>(
        pre === initialData ? updatedData : initialData
      ))
    }, 6000);
    return () => clearInterval(interval);
   },[]);

   const handleClick=()=>{
     fetch(resume)
       .then((response) => response.blob())
       .then((blob) => {
         fileDownload(blob, "resume.pdf");
       })
       .catch((error) => alert("Download failed:",error));
   }


  return (
    <div className=" relative">
      <div
        id="home"
        className=" bg-cover bg-center h-screen lg:bg-pc bg-mobile lg:p-10 p-5"
      >
        <div className="lg:p-24 p-10 mt-12 text-black">
          <h1 className="text-6xl font-playfair font-extrabold tracking-tighter mb-4">
            {userData.title}
          </h1>
          <h1 className="text-6xl font-playfair font-extrabold tracking-tighter mb-4">
            {userData.heading}
          </h1>
          <p className="text-lg font-medium">{userData.subHeading}</p>
          <button className="px-6 py-3 text-white  bg-gradient-to-r from-teal-500 to-blue-800 hover:from-pink-500 hover:to-orange-500 rounded-xl mt-10">
            {userData.isActive ? (
              <Link
                className="flex items-center gap-2"
                to="contact"
                smooth={true}
                duration={500}
              >
                {userData.btnText}
                <IoMdContact className="text-xl" />
              </Link>
            ) : (
              <span className="flex items-center gap-2" onClick={handleClick}>
                {userData.btnText}
                <MdDownload className="text-xl" />
              </span>
            )}
          </button>
        </div>
      </div>
      <div className="absolute bottom-[-10px]  w-full h-1/3 bg-gradient-to-t from-black to-transparent blur-sm"></div>
    </div>
  );
}

export default Home