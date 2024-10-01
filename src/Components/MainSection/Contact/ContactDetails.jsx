import React from 'react'
import { GrMail } from "react-icons/gr";
import { IoMdCall } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

function ContactDetails() {
  return (
    <div className="">
      <div className="flex items-center gap-8 p-5 bg-zinc-700/20 rounded-md">
        <GrMail className="text-3xl" />
        <a target="blank" href="mailto:s=shubhamrawat@77gmail.com">
          Shubhamrawatt77@gmail.com
        </a>
      </div>
      <div className="flex items-center gap-8 p-5 bg-zinc-700/20 mt-5 rounded-md">
        <IoMdCall className="text-3xl" />
        <a target="blank" href="tel:+917017233103">
          +917017233103
        </a>
      </div>
      <div className="mt-10 flex justify-center gap-10">
        <a
          href="https://linkedin.com/in/shubham-rawat-a81833198"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-3xl" />
          <p className="ml-[-12px]">Linkedin</p>
        </a>
        <a
          href="https://github.com/Shubhamrawat77"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareGithub className="text-3xl" />
          <p className="ml-[-12px]">Git-Hub</p>
        </a>
      </div>
    </div>
  );
}

export default ContactDetails