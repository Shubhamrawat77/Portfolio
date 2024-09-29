import React from 'react'
import Projects from './Projects';

function Work() {
    const projectDetails = [
      {
        image:
          "https://th.bing.com/th/id/OIP.8FD-9yfBbgiOWecQs_QyrgHaFj?rs=1&pid=ImgDetMain",
        name: "Weather app",
        description:
          "lLorem ipsum dolor sit amet consectetur adipisicing elit. Totam minus iure rem quae vero non in explicabo doloremque omnis eum! Illum reiciendis est veritatis repudiandae?",
        link: "https://tailwindcss.com/docs/background-size",
      },
      {
        image:
          "https://repository-images.githubusercontent.com/315986811/d74b3080-2f6a-11eb-960e-c405ce8cfc43",
        name: "To-do list",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam minus iure rem quae vero non in explicabo doloremque omnis eum! Illum reiciendis est veritatis repudiandae?",

        link: "https://tailwindcss.com/docs/background-size",
      },
      {
        image:
          "https://colorlib.com/wp/wp-content/uploads/sites/2/kiddos-free-template.jpg",
        name: "School Website",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam minus iure rem quae vero non in explicabo doloremque omnis eum! Illum reiciendis est veritatis repudiandae?",
        link: "https://tailwindcss.com/docs/background-size",
      },
      {
        image:
          "https://images.pexels.com/photos/28348904/pexels-photo-28348904/free-photo-of-a-wave-breaking-at-sunset-with-the-sun-behind-it.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        name: "School Website",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam minus iure rem quae vero non in explicabo doloremque omnis eum! Illum reiciendis est veritatis repudiandae?",
        link: "https://tailwindcss.com/docs/background-size",
      },
    ];





  return (
    <div className="w-full p-8 lg:p-16">
      <h2 className="font-Quicksend text-sm mb-4 tracking-widest">MY WORK</h2>
      <h3 className="font-playfair font-semibold tracking-widest">
        MY RECENT PROJECTS
      </h3>
      <div className="w-full mt-14 lg:flex lg:justify-between gap-5 flex-wrap">
        {projectDetails.map((item, index) => (
          <Projects key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Work