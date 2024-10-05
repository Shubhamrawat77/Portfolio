
import College from './College';

function Education() {

   const educationDetails = [
     {
       Course: "Bachelore of technology in Information Technology",
       collegeName:
         "Hemwati Nandan Bahuguna Garhwal University, Srinagar Garhwal, Uttarakhand",
       Duration: "2020-2023",
     },
     {
       Course: "Diploma in Computer Science Engineering",
       collegeName: "Govt. Polytechnic Srinagar garhwal, Uttarakhand ",
       Duration: "2017-2020",
     },
     {
       Course: "Intermediate School",
       collegeName:
         "Reeta Govt. Inter College Garhi Shyampur, Rishikesh, Uttarakhand",
       Duration: "2016-2017",
     },
     {
       Course: "High School",
       collegeName:
         "Reeta Govt. Inter College Garhi Shyampur, Rishikesh, Uttarakhand",
       Duration: "2014-2015",
     },
   ];






  return (
    <div id="education" className="w-full p-8 lg:p-16">
      <h2 className="font-Quicksend text-sm mb-4 tracking-widest">EDUCATION</h2>
      <h3 className="font-playfair font-semibold tracking-widest drop-shadow-text-xl uppercase">
        <span className="text-gradient"> EDUCATION</span>
      </h3>
      <div>
        {educationDetails.map((data, index) => (
          <College key={index} data={data} />
        ))}
      </div>
    </div>
  );
}

export default Education