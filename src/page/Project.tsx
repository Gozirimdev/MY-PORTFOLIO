import React from "react";
import Navbar from "../component/Navbar";
import Projects from "../component/Projects";



const Project:React.FC=() =>{

  return (
  <div className="min-h-screen bg-black overflow-hidden">
    <Navbar />
    <div className="flex flex-col px-4  pt-32 items-center justify-center  text-white">
      <h1 className="text-4xl p-6 flex gap-2 font-bold">
        My <span className="text-[#009C00]">Project</span>
      </h1>
      <p className="text-stone-400 text-center text-lg lg:text-xl font-medium">A real-world application showcasing my expertise in modern web development</p>
    </div>

    <Projects/>
  </div>
);

}

export default Project