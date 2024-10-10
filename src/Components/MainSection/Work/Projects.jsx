import React from 'react'
import { motion } from 'framer-motion';
import { FaSquareGithub } from "react-icons/fa6";
import { MdOutlinePhonelink } from "react-icons/md";


function Projects({item}) {
  const {image,name,description,link,gitLink}=item
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="xl:w-[30%] lg:w-[48%] md:w-[48%] mt-5 bg rounded-lg bg-custom-gradient-second border border-slate-500 group  "
    >
      <div className="w-full lg:h-52 h-64 overflow-hidden rounded-lg relative ">
        <img
          className=" w-full h-full rounded-lg"
          src={image}
          alt=" Project image"
        />
        <div className="p-3 flex justify-center gap-3 absolute bottom-0 right-0">
          <motion.a
            className="  px-1 py-1 rounded-md flex items-center justify-center drop-shadow-text-xl lg:invisible group-hover:visible font-playfair"
            href={link}
            target="blank"
          >
            <motion.span
            whileHover={{scale:1.1}}
             className=" bg-[#ff0000] p-2 rounded-full">
              <MdOutlinePhonelink
               className="text-xl drop-shadow-text-xl" />
            </motion.span>
          </motion.a>
          <motion.a
            className="   px-1 py-1 rounded-md flex items-center justify-center drop-shadow-text-xl lg:invisible group-hover:visible font-playfair"
            href={gitLink}
            target="blank"
          >
            <motion.span 
            whileHover={{scale:1.1}}
            className="inline-block bg-[#ff0000] p-2 rounded-full">
              <FaSquareGithub className="text-xl " />
            </motion.span>
          </motion.a>
        </div>
      </div>
      <div className="p-3">
        <h1 className=" font-playfair text-lg mb-1">{name}</h1>
        <p className=" font-Quicksend">{description}</p>
      </div>
    </motion.div>
  );
}

export default Projects