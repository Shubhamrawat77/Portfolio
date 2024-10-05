import React from 'react'
import ContactDetails from './ContactDetails'
import Form from './Form';

function Contact() {
  return (
    <div className=" relative">
      <div id="contact" className="w-full p-8 lg:p-16">
        <h2 className="font-Quicksend text-sm mb-4 tracking-widest uppercase">
          Get in Touch
        </h2>
        <h3 className="font-playfair font-semibold tracking-widest drop-shadow-text-xl uppercase">
          <span className="text-gradient"> MY Contact</span>
        </h3>
        <div className="mt-14 lg:flex lg:gap-6 font-Quicksend">
          <ContactDetails />
          <Form />
        </div>
      </div>
      <div className="absolute bottom-0  w-full h-[5%] lg:h-[12%] bg-custom-gradient-last blur-sm"></div>
    </div>
  );
}

export default Contact