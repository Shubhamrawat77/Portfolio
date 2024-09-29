import React from 'react'

function Projects({item}) {
  const {image,name,description,link}=item
  return (
    <div className="lg:w-[48%] mt-5 bg-zinc-900 rounded-lg ">
      <div className='w-full h-64 overflow-hidden '>
        <img className=" w-full rounded-lg" src={image} alt=" Project 1" />
      </div>
      <div className="p-3">
        <h1 className=" font-playfair text-lg">{name}</h1>
        <p className=" font-Quicksend">{description}</p>
        <div className="p-3">
          <a className="" href={link} target='blank'>
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects