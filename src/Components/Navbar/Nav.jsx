import React from 'react'

function Nav() {

const data= ["Home", "About", "Work", "SkillS", "Education", "Contact"]
  return (
    <>
    <div className='w-full flex flex-col gap-3 mt-5 items-center '>
        {data.map((item,index)=>(
           <a  key={index} href="#">{item.toUpperCase()}</a>
        ))}
    </div>
    </>
  )
}

export default Nav