import React from 'react'
import { motion } from 'framer-motion';

function About() {
  return (
    <div id="about" className="w-full p-8 lg:p-16 ">
      <h2 className="font-Quicksend text-sm mb-4 tracking-widest">ABOUT US</h2>
      <motion.h3
        initial={{
          opacity: 0,
          x: 30,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="font-playfair font-semibold tracking-widest drop-shadow-text-xl uppercase"
      >
        <span className="text-gradient"> WHO I AM</span>
      </motion.h3>
      <p className="font-Quicksend mt-14 font-medium leading-7">
        Hi, I'm <strong>Shubham Rawat</strong>, a passionate frontend developer
        . I specialize in HTML, CSS, and JavaScript, and I’m proficient in
        React.js and Tailwind CSS. I specialize in creating dynamic and
        responsive web applications using modern technologies. I’ve worked on
        various projects.
      </p>
      <p className="font-Quicksend leading-7">
        I built my own portfolio website, which showcases my skills and
        projects. This experience allowed me to experiment with modern web
        design trends, implement smooth animations, and ensure a responsive and
        accessible user interface. <br /> <strong>The portfolio site </strong>
        not only highlights my technical abilities but also reflects my personal
        brand and creativity. I focus on creating intuitive user interfaces and
        optimizing websites for performance and accessibility. I’m passionate
        about web development and always eager to learn new technologies. Feel
        free to reach out to me for any collaboration or project inquiries.
      </p>
    </div>
  );
}

export default About