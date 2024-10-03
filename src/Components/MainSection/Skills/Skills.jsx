import React from 'react'
import Skill from './Skill';

function Skills() {
  const skillDetails = [
    {
      skill: "HTML-5",
      level: "95%",
      color: "#4ade80",
    },
    {
      skill: "CSS",
      level: "85%",
      color: "#FF4E88",
    },
    {
      skill: "JavaScript",
      level: "80%",
      color: "#7A1CAC",
    },
    {
      skill: "Bootstrap",
      level: "60%",
      color: "#FFDB00",
    },
    {
      skill: "React Js",
      level: "72%",
      color: "#03AED2",
    },
    {
      skill: "Tailwind CSS",
      level: "85%",
      color: "#4ade80",
    },
  ];
  return (
    <div id='skills' className="w-full p-8 lg:p-16">
      <h2 className="font-Quicksend text-sm mb-4 tracking-widest">
        MY SPECIALTY
      </h2>
      <h3 className="font-playfair font-semibold tracking-widest">MY SKILLS</h3>
      <div className="mt-14">
        <p className="font-Quicksend leading-7 text-base">
          I specialize in building responsive and interactive web pages using
          <strong> Html </strong>, <strong> CSS</strong>, and
          <strong> JavaScript</strong>. With extensive experience in{" "}
          <strong> React.js</strong>, I create dynamic single-page applications
          and manage state with
          <strong> Redux</strong>. I utilize <strong> Tailwind CSS</strong> for
          quick and consistent styling across projects. Proficient in{" "}
          <strong> Git </strong>
          and <strong> GitHub</strong>, I ensure code quality and effective
          collaboration. My strong communication, problem-solving, teamwork, and
          time management skills contribute to successful project outcomes.
        </p>
        <div className="w-full mt-10 lg:flex lg:gap-5 justify-between flex-wrap">
          {skillDetails.map((items, index) => (
            <Skill key={index} data={items} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills