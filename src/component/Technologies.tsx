import React from "react";
import { SiFrontendmentor } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { FaTools } from "react-icons/fa";



const Technologies: React.FC = () => {
  const tool = [
    {
      img: SiFrontendmentor,
      color:"text-blue-500",
      header: "Frontend",
      tool1: "React",
      tool2: "Javascript",
      tool3: "Tailwind CSS",
      tool4: "Framer Motion",
      tool5: "TypeScript",
    },
    {
      img: FaDatabase,
      color:"text-green-500",
      header: "Backend",
      tool1: "Node.Js",
      tool2: "Express",
      tool3: "MongoDB",
      tool4: "Postman",
      tool5: "Rest APIs",
    },
    {
      img: FaTools,
      color:"text-orange-500",
      header: "Tools",
      tool1: "Git",
      tool2: "GitHub",
      tool3: "Figma",
      tool4: "Vercel",
      tool5: "AWS",
    },
  ];
  
  return (
    <div className="flex flex-col items-center justify-center pt-16 text-white">
      <h1 className="flex gap-2 text-3xl sm:text-3xl lg:text-5xl font-semibold py-6 ">
        Technical <h1 className="text-[#009C00]">Proficiency </h1>
      </h1>
      <p className="text-center text-stone-400 pb-2 lg:max-w-full md:max-w-lg text-lg lg:text-xl sm:text-base px-4">
        A robust toolkit for building modern, fast, and scalable web
        applications using the latest technologies.
      </p>

      <div className="grid sm:grid-cols-1 lg:grid-cols-3 p-10 gap-6 w-full">
        {tool.map((item, index) => 
        {
            const Icon = item.img
            return(
          <div key={index} className="px-4 py-8 bg-white/10 rounded-xl border border-stone-800 ">
            <div className="flex items-center justify-start gap-4 text-2xl font-medium">
                
        <Icon className={item.color}/>
            <h2>{item.header}</h2>
            </div>
            <div className="text-lg flex flex-col pt-8 font-normal gap-3">
                <p className="
    py-4 px-4 border rounded-2xl border-stone-700 relative bg-white/5
    flex items-center justify-between
    transition-all duration-300 ease-in-out
    hover:scale-105 hover:border-green-500 hover:bg-stone-900

    after:content-[''] after:w-2 after:h-2 after:rounded-full after:bg-green-500
    after:transition-all after:duration-300 after:ease-in-out
    sm:after:ml-4 md:after:ml-6 lg:after:ml-8
  "
>{item.tool1}</p>
            <p
  className="
    py-4 px-4 border rounded-2xl border-stone-700 relative bg-white/5
    flex items-center justify-between
    transition-all duration-300 ease-in-out
    hover:scale-105 hover:border-green-500 hover:bg-stone-900

    after:content-[''] after:w-2 after:h-2 after:rounded-full after:bg-green-500
    after:transition-all after:duration-300 after:ease-in-out
    sm:after:ml-4 md:after:ml-6 lg:after:ml-8
  "
>
  {item.tool2}
</p>
          <p className="
    py-4 px-4 border rounded-2xl border-stone-700 relative bg-white/5 flex items-center justify-between transition-all duration-300 ease-in-out hover:scale-105 hover:border-green-500 hover:bg-stone-900

    after:content-[''] after:w-2 after:h-2 after:rounded-full after:bg-green-500
    after:transition-all after:duration-300 after:ease-in-out
    sm:after:ml-4 md:after:ml-6 lg:after:ml-8
  "
>{item.tool3}</p>
            <p className="
    py-4 px-4 border rounded-2xl border-stone-700 relative bg-white/5
    flex items-center justify-between
    transition-all duration-300 ease-in-out
    hover:scale-105 hover:border-green-500 hover:bg-stone-900

    after:content-[''] after:w-2 after:h-2 after:rounded-full after:bg-green-500
    after:transition-all after:duration-300 after:ease-in-out
    sm:after:ml-4 md:after:ml-6 lg:after:ml-8
  "
>{item.tool4}</p>
            <p className="
    py-4 px-4 border rounded-2xl border-stone-700 relative bg-white/5
    flex items-center justify-between
    transition-all duration-300 ease-in-out
    hover:scale-105 hover:border-green-500 hover:bg-stone-900

    after:content-[''] after:w-2 after:h-2 after:rounded-full after:bg-green-500
    after:transition-all after:duration-300 after:ease-in-out
    sm:after:ml-4 md:after:ml-6 lg:after:ml-8
  "
>{item.tool5}</p>
            </div>
          </div>
        )
        })}
      </div>
    </div>
  );
};

export default Technologies;
