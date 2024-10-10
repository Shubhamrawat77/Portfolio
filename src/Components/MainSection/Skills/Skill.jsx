import React from 'react'
import { motion } from 'framer-motion';

function Skill({data}) {
  const {skill,level,color}=data;
  return (
    <div className="m-5 mb-8 lg:mb-0 lg:w-[42%]">
      <h1 className="mb-3 font-Quicksend font-medium tracking-wider">
        {skill}
      </h1>
      <div className="w-full h-[6px] bg-slate-400 rounded-md">
        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: level,
          }}
          transition={{
            duration: 1,
          }}
          style={{ width: level, backgroundColor: color }}
          className="h-full rounded-md relative"
        >
          <span
            style={{ backgroundColor: color }}
            className=" w-3 h-3 inline-block rounded-full absolute right-[-1px] top-[-50%]"
          ></span>
          <span
            style={{ color: color }}
            className="absolute right-0 top-[-30px]"
          >
            {level}
          </span>
        </motion.div>
      </div>
    </div>
  );
}

export default Skill