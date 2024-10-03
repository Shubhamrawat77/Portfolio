
import React, { useState, useEffect } from 'react'


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

  return (
    <div id='home' className='bg-red-400 bg-cover bg-center h-screen lg:bg-pc bg-mobile lg:p-10 p-5'>   
      
        <div className="lg:p-24 p-10 mt-12 text-black">
          <h1 className="text-6xl font-playfair font-extrabold tracking-tighter mb-4">
            {userData.title}
          </h1>
          <h1 className="text-6xl font-playfair font-extrabold tracking-tighter mb-4">
            {userData.heading}
          </h1>
          <p className="text-lg font-medium">{userData.subHeading}</p>
          <button className="px-6 py-3 bg-green-700 rounded-xl mt-5">
            {userData.btnText}
          </button>
        </div>
      
    </div>
  );
}

export default Home