import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";


function College({data}) {
  const {Course,collegeName,Duration,}=data
  const [isVisible,setIsVisible]=useState(false)

  return (
    <>
      <div className="bg-custom-gradient-fifth p-5 mt-6 rounded-md flex justify-between font-Quicksend border border-slate-500">
        <h1 className="">{Course} </h1>
        <motion.button
        whileHover={{
          scale:1.5,
        }}
          onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? (
            <FiMinus />
          ) : (
              <FiPlus />
          )}
        </motion.button>
      </div>
      {isVisible && (
        <div className=" bg-custom-gradient-second border-b-2 border-t-0 border-slate-300 border flex justify-between rounded-md">
          <p className="p-6 ">{collegeName}</p>
          <span className="lg:mr-6 p-6 ">{Duration}</span>
        </div>
      )}
    </>
  );
}

export default College