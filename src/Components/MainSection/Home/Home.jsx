
import fileDownload from 'js-file-download';
import React, { useState, useEffect } from 'react'
import { Link,Element } from "react-scroll";
import resume from "../../../assets/resume.pdf";
import { MdDownload } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';


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
    const [key, setKey] = useState(0);

   useEffect(()=>{
    const interval= setInterval(()=>{
      setUserData((pre)=>(
        pre === initialData ? updatedData : initialData
      ));
       setKey((prevKey) => prevKey + 1);
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
    <Element className=" relative">
      <div
        id="home"
        className=" bg-cover bg-center h-screen lg:bg-pc bg-mobile lg:p-10 p-5"
      >
        <AnimatePresence>
          <motion.div
            key={`title-${key}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:p-24 md:p-14 md:mt-60 mt-12 lg:mt-12 w-3/4 lg:w-full md:w-full p-2  text-black"
          >
            <h1 className="lg:text-6xl text-5xl font-playfair font-extrabold tracking-tighter mb-4">
              {userData.title}
            </h1>
            <motion.h1 className="lg:text-6xl text-5xl font-playfair font-extrabold tracking-tighter mb-4">
              {userData.heading}
            </motion.h1>
            <p className="text-lg font-medium">{userData.subHeading}</p>
            <motion.button
              whileTap={{
                scale: 0.9,
              }}
              className="px-6 py-3 text-white  group bg-gradient-to-r from-teal-500 to-blue-800 hover:from-pink-500 hover:to-orange-500 rounded-xl mt-10"
            >
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
                  <MdDownload className="text-xl group-hover:scale-125" />
                </span>
              )}
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute bottom-[-10px]  w-full h-1/3 bg-gradient-to-t from-black to-transparent blur-sm"></div>
    </Element>
  );
}

export default Home