import React, { useState } from 'react'
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

function College({data}) {
  const {Course,collegeName,Duration,}=data
  const [isVisible,setIsVisible]=useState(false)

  return (
    <>
      <div className="bg-slate-950 p-5 mt-6 rounded-md flex justify-between">
        <h1>{Course} </h1>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? <FiMinus/> : <FiPlus/>}
        </button>
      </div>
      {isVisible && (
        <div className=" bg-zinc-900 border-b-2 border-t-0 border-slate-300 border flex justify-between rounded-md">
          <p className="p-6 ">{collegeName}</p>
          <span className="lg:mr-6 p-6 ">{Duration}</span>
        </div>
      )}
    </>
  );
}

export default College