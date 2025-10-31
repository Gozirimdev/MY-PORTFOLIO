import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import project from "../assets/project1.svg";

const Projects: React.FC = () => {
  const works = [
    {
      img: project,
      header: "Frontend Developer",
      stack: "Tech Stack",
      dsc: "Contributed to the UI renovation of an existing Web3 Job Finder platform aimed at connecting developers with blockchain-related opportunities. Focused on enhancing the user interface and experience, giving the platform a fresh, modern look aligned with current design trends in the Web3 ecosystem.",
      point1: "Redesigned the front-end layout for improved usability and visual appeal.",
      point2: "Implemented a responsive dark-theme interface with glowing neon effects to reflect Web3 aesthetics.",
      point3: "Optimized component structure for scalability and maintainability.",
      point4: "Enhanced accessibility and user interaction through smoother animations and transitions.",
      stack1: "TypeScript (TSX) – for type-safe and component-based front-end development.",
      stack2: "Tailwind CSS – for rapid, responsive, and elegant styling.",
    },
  ];

  return (
    <div className="grid place-items-center py-12 bg-black min-h-screen">
      {works.map((work, index) => (
        <div
          key={index}
          className="relative flex flex-col lg:flex-row rounded-xl text-white bg-white/10 backdrop-blur-sm overflow-hidden w-[90%] lg:w-[80%] xl:w-[70%] shadow-lg transition-transform duration-300 hover:scale-[1.01]"
        >
     
              {/* image */}
          <div className="relative group lg:w-1/2 w-full overflow-hidden">
          


            <img
              src={work.img}
              alt="Project"
              className=" relative w-full  h-full  transition-transform duration-500 group-hover:scale-105"
            />
                 {/* Featured Badge */}
            <button className="absolute top-4 left-4  lg:top-36 lg:left-3 bg-[#009C00] text-black text-xs rounded-full font-medium px-3 py-1">
            Featured
          </button>

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <FaExternalLinkAlt
                size={40}
                className="text-[#009C00] cursor-pointer bg-white/10 p-3 rounded-full border border-[#009C00] opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col p-6 gap-4 lg:w-1/2">
            <h3 className="text-2xl font-semibold text-[#009C00]">
              {work.header}
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed">{work.dsc}</p>

            <h3 className="text-xl font-semibold text-[#009C00]">
              Key Achievements
            </h3>
            <ul className="text-sm text-stone-400 flex flex-col gap-1 list-disc list-outside px-5">
              <li>{work.point1}</li>
              <li>{work.point2}</li>
              <li>{work.point3}</li>
              <li>{work.point4}</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#009C00]">
              {work.stack}
            </h3>
            <ul className="text-sm text-stone-400 flex flex-col gap-1 list-disc list-outside px-5">
              <li>{work.stack1}</li>
              <li>{work.stack2}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
