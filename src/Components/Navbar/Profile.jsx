import React from 'react'
import image from '../../assets/profile.png'

function Profile() {
  return (
      <div className="w-full p-5 flex flex-col items-center mt-8">
        <div className="w-36 h-36">
          <img
            className="w-full h-full rounded-full"
            src={image}
            alt="Pofile image"
          />
        </div>
        <h2 className="font-playfair text-center mt-5 text-2xl font-semibold ">
          Shubham Rawat
        </h2>
        <h5 className=" text-center font-semibold text-sm mt-1">Frontend Developer</h5>
      </div>
  );
}

export default Profile