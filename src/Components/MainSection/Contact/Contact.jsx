import React from 'react'
import ContactDetails from './ContactDetails'
import Form from './Form';

function Contact() {
  return (
    <div className="w-full p-8 lg:p-16">
      <h2 className="font-Quicksend text-sm mb-4 tracking-widest uppercase">
        Get in Touch
      </h2>
      <h3 className="font-playfair font-semibold tracking-widest uppercase">
        MY Contact
      </h3>
      <div className="mt-14 lg:flex lg:gap-6">
        <ContactDetails />
        <Form/>
      </div>
    </div>
  );
}

export default Contact