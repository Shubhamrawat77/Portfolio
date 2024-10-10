import React from 'react'
import Projects from './Projects';
import { motion, spring } from 'framer-motion';
import image1 from "../../../assets/image1.png";
import image2 from '../../../assets/image2.png';
import image3 from "../../../assets/image3.png";
import image5 from "../../../assets/image5.png";
import image6 from "../../../assets/image6.png";




function Work() {
    const projectDetails = [
      {
        image: image1,
        name: "My Portfolio",
        description:
          "Created a personal portfolio website using React.js, Tailwind CSS, Framer Motion, HTML, CSS, and JavaScript to showcase my projects, skills, and experience in web development.",
        link: "#",
        gitLink: "https://github.com/Shubhamrawat77/Portfolio",
      },
      {
        image: image2,
        name: "Weather app",
        description:
          " Developed a weather forecast application using JavaScript, HTML, CSS, and OpenWeatherMap API to provide current weather conditions and forecasts for different locations.",
        link: "https://weather-app-by-shubhamrawat.netlify.app/",
        gitLink: "https://github.com/Shubhamrawat77/Weather-App",
      },
      {
        image: image3,
        name: "E-Commerce-Website",
        description:
          "Developed the frontend of an e-commerce website using Bootstrap, JavaScript, HTML, and CSS to provide an intuitive and responsive user interface.",

        link: "https://e-commerce-website-by-shubhamrawat.netlify.app/",
        gitLink: "",
      },
      {
        image:
          "https://colorlib.com/wp/wp-content/uploads/sites/2/kiddos-free-template.jpg",
        name: "Bishamber Dutt Memorial School",
        description:
          " Collaborated with a team to develop the school website using Bootstrap, JavaScript, HTML, and CSS. The website is currently live and actively serving the school community. I specifically focused on creating the Sponsor page, About page, and other essential sections.",
        link: "https://bdmschool.com/school/pages/",
        gitLink: "https://github.com/Shubhamrawat77/BDM-school-sponser",
      },
      {
        image: image5,
        name: "Mehndi Artistry Website for Client",
        description:
          "Developed the frontend of a captivating Mehndi artistry website using HTML, CSS, and JavaScript to showcase the client's exquisite mehndi designs. The website is designed to attract and engage users, providing a seamless browsing experience..",
        link: "https://mehndi-landingpage-by-shubhamrawat.netlify.app/",
        gitLink: "https://github.com/Shubhamrawat77/Mehndi-Website",
      },
      {
        image: image6,
        name: "To-Do-List",
        description:
          "Developed a simple and intuitive To-Do List application using JavaScript, HTML, and CSS to help users manage their tasks effectively. Implemented features for adding, completing, and deleting tasks.",
        link: "https://to-do-list-by-shubhamrawat.netlify.app/",
        gitLink: "https://github.com/Shubhamrawat77/To-do-list-",
      },
    ];





  return (
    <div id="work" className="w-full p-8 lg:p-16">
      <h2 className="font-Quicksend text-sm mb-4 tracking-widest">MY WORK</h2>
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
        <span className="text-gradient"> MY recent projects</span>
      </motion.h3>
      <div className="w-full mt-14 md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between lg:gap-2 gap-5 xl:gap-1 flex-wrap ">
        {projectDetails.map((item, index) => (
          <Projects key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Work