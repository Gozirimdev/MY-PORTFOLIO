import React from "react";
import Navbar from "../component/Navbar";
import { IoLocationOutline } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";
import { IoMdHeartEmpty } from "react-icons/io";
import { GiNetworkBars } from "react-icons/gi";

const About: React.FC = () => {

  const timelineData = [
  {
    year: "2024 — Present",
    title: "Bachelor of Science in Computer Science",
    org: "Nnamdi Azikiwe University ",
    desc: "Pursuing a Bachelor’s degree in Computer Science, focusing on software engineering, algorithms, and modern web technologies.",
  },
  {
    year: "2025 — Present",
    title: "Community Lead ",
    org: "Debug & Co",
    desc: "Founded and lead a voluntary front-end development community that trains beginners in HTML, CSS, and JavaScript. Organized mentorship sessions and collaborative projects.",
  },
  {
    year: "2024",
    title: "Front-End Developer ",
    org: "BlockHub",
    desc: "Developed responsive interfaces using React and Tailwind for blockchain-based platforms. Improved UI performance ",
  },
  {
    year: "2025",
    title: "Intern",
    org: "Deebug Institute",
    desc: "Participated in technical training programs and coding workshops focused on web technologies. Gained exposure to professional development practices.",
  },
  {
    year: "2024",
    title: "Full-Stack Engineering Graduate",
    org: "Front-End & Back-End Certification",
    desc: "Completed intensive full-stack training, mastering React, Node.js, Express, and MongoDB. Built real-world applications demonstrating clean UI and efficient APIs.",
  },
  {
    year: "2017 — 2024",
    title: "Secondary School (SSCE)",
    org: "",
    desc: "Completed secondary education and earned the SSCE, building a strong foundation in science and technology.",
  },
];


  const value = [
    {
      img: TbTargetArrow,
      color: "white",
      header: "Product Thinking",
      text: "I approach every project with a product mindset, focusing on user needs and business outcomes rather than just technical implementation",
    },
    {
      img: GiNetworkBars,
      header: "Speed & Efficiency",
      text:"Rapid prototyping and iterative development allow me to deliver value quickly while maintaining high quality standards."
    },
    {
      img: IoMdHeartEmpty,
      header:'Clean Code',
      text:"I believe in writing maintainable, scalable code that other developers can easily understand and extend"
    },
  ];
  return (
    <div className="bg-black  overflow-hidden">
      <Navbar />

      <section className="flex flex-col items-center justify-center text-white pt-28 bg-black px-6">
        {/* Heading */}
        <h1 className="text-4xl lg:text-5xl font-bold flex gap-2 py-6">
          About <span className="text-[#009C00]">Me</span>
        </h1>

        {/* Card */}
        <div className="p-8 mb-4 bg-white/10 w-full lg:w-[900px] rounded-2xl border border-white/15 backdrop-blur-md">
          {/* Profile Header */}
          <div className="flex gap-4 items-center">
            <div className="text-3xl font-semibold text-black bg-[#009C00] px-6 py-6 rounded-xl">
              FC
            </div>
            <div className="flex flex-col">
              <h3 className=" text-xl lg:text-2xl font-semibold">
                Favour Chigozirim
              </h3>
              <div className="flex gap-2 items-center text-stone-400 text-lg">
                <IoLocationOutline size={20} />
                <p>Nigeria</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4 py-6 text-stone-400 font-medium text-[1.2rem] leading-relaxed">
            <p>
              I’m a passionate{" "}
              <span className="text-white font-semibold">
                Full-Stack Developer
              </span>{" "}
              with a deep love for creating innovative, high-performance web
              applications. My journey began with front-end development,
              crafting clean and engaging user interfaces, and soon expanded
              into back-end technologies that bring those experiences to life.
            </p>

            <p>
              I specialize in building end-to-end solutions using modern
              technologies like{" "}
              <span className="text-[#009C00] font-medium">React</span>,{" "}
              <span className="text-[#009C00] font-medium">TypeScript</span>,{" "}
              <span className="text-[#009C00] font-medium">Node.js</span>,{" "}
              <span className="text-[#009C00] font-medium">Express</span>,{" "}
              <span className="text-[#009C00] font-medium">MongoDB</span>, and{" "}
              <span className="text-[#009C00] font-medium">Tailwind CSS</span>.
              I care deeply about writing clean, maintainable code, designing
              responsive layouts, and delivering products that provide real
              value to users.
            </p>

            <p>
              Currently, I’m building{" "}
              <a
                href="https://quizerra.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#009C00] hover:underline"
              >
                Quizerra
              </a>
              , a learning management system (LMS) that brings together my
              expertise in both front-end and back-end development. Through this
              project, I’ve honed my ability to solve complex problems, design
              scalable architectures, and turn ambitious ideas into
              production-ready applications.
            </p>
          </div>
        </div>

        {/* core value */}

        <section className="py-24 px-2 ">
          <h2 className="text-4xl py-2 lg:text-4xl flex font-bold justify-center gap-2">
            Core <h2 className="text-[#009C00]">Value</h2>
          </h2>
          <p className="text-md lg:text-xl text-stone-400 font-medium text-center">
            The principles that guide my approach to development and
            collaboration
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3  pt-24  gap-6">
            {value.map((item, index) => {
              const Icon = item.img;

              return (
                <div
  key={index}
  className="bg-white/10 border border-white/10 rounded-2xl px-4 lg:px-6 py-6  flex flex-col  gap-4 hover:bg-white/20 transition-all duration-300"
>
  {Icon && <Icon size={48} className="text-[#009C00] bg-green-500/10 p-2 rounded-full" />}
  <h3 className="text-2xl font-semibold text-white">{item.header}</h3>
  <p className="text-stone-300 text-lg leading-relaxed">{item.text}</p>
</div>

              );
            })}
          </div>
        </section>

        <section className="pb-24 ">
           <div className=" text-gray-100 py-16 px-4 flex flex-col items-center">
      <h2 className="text-4xl font-bold flex gap-2  text-center mb-12 text-white">
        My <h2 className="text-[#009C00]">Journey</h2>
      </h2>
      <div className="relative border-l border-stone-300 border-dotted max-w-3xl mx-auto">
        {timelineData.map((item, index) => (
          <div key={index} className="mb-12 ml-4 lg:ml-6 relative">
            {/* Dot */}
            <div className="absolute w-3 h-3 bg-[#009C00] rounded-full -left-[23px] lg:-left-[30px] top-1"></div>

            {/* Card */}
            <div className="bg-green-600/10 py-5 px-2 rounded-xl shadow-md hover:shadow-lg transition">
              <p className="text-lg font-medium text-[#009C00] mb-1">{item.year}</p>
              <h3 className="font-semibold text-xl">{item.title}</h3>
              {item.org && <p className="text-md text-stone-400 mb-2">{item.org}</p>}
              <p className="text-stone-300 text-base leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

        </section>
      </section>
    </div>
  );
};

export default About;
