import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Connect from "../component/Connect";
import { FaArrowRightLong } from "react-icons/fa6";
import { BiDownload } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsMouse } from "react-icons/bs";
import Technologies from "../component/Technologies";
import { Link } from "react-router-dom";



import { motion } from "framer-motion";

const Home: React.FC = () => {
  // Typing animation state
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const toRotate = ["Full-Stack Developer", "Tech Enthusiast"];
  const typingSpeed = 120;
      const openEmail = () => window.open("mailto:Chigozirimfavour001@gmail.com", "_blank");


  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? typingSpeed / 2 : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <div className="bg-black box-border min-h-screen  overflow-hidden ">
    <header className="bg-black  w-full px-4 sm:px-6">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-20 flex flex-col items-center py-4 text-center"
      >
        {/* Availability badge */}
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative before:content-[''] before:inline-block before:w-2 before:h-2 before:rounded-full before:bg-green-500 before:mr-2 text-stone-400 text-xs sm:text-sm flex items-center font-medium border border-white/15 py-2 px-4 my-6 rounded-3xl bg-white/10"
        >
          Available for opportunities
        </motion.p>

        {/* Name and typing heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-semibold">
            Favour Chigozirim
          </h1>

          <h2 className="text-[#009C00] text-3xl sm:text-4xl lg:text-6xl font-medium mt-2 pb-2 h-[60px]">
            {text}
            <span className="border-r-4 border-[#009C00] animate-pulse ml-1"></span>
          </h2>

          <p className="text-stone-400 pb-4 mt-4 max-w-lg text-lg lg:text-2xl sm:text-base">
            I specialize in building fast, responsive, and scalable web
            applications using modern technologies like React, TypeScript, and
            Node.js.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid lg:grid-cols-3 md:grid-cols-1 pt-6 gap-4 max-w-md text-white"
        >
          <button className="bg-[#009C00] flex rounded-lg gap-2 text-black font-medium items-center justify-center py-2 text-base hover:scale-105 transition-transform duration-300" onClick={openEmail}>
            Hire me <FaArrowRightLong />
          </button>
          <Link to='/project'><button className="bg-white/10 px-2 py-3 rounded-xl flex gap-2 items-center justify-center hover:bg-white/20 transition-all duration-300">
            View Projects <FaExternalLinkAlt/>
          </button>
          </Link>
          <button className="bg-white/10 rounded-xl py-3  px-1 flex gap-2 items-center justify-center hover:bg-white/20 transition-all duration-300"   onClick={() => window.open("/Resume.pdf", "_blank")}
>
          <BiDownload/>  Resume
          </button>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 py-16 place-items-center"
        >
          <p className="text-stone-400 text-xl font-normal text-center">
            <span className="block text-lg lg:text-2xl font-bold text-[#009C00]">1+</span>
            Years Experience
          </p>
          <p className="text-stone-400 text-xl font-normal text-center">
            <span className="block text-lg lg:text-2xl font-bold text-[#009C00]">5+</span>
            Project Delivered
          </p>
          <p className="text-stone-400 text-xl font-normal text-center">
            <span className="block text-lg lg:text-2xl font-bold text-[#009C00]">12+</span>
            Technologies
          </p>
          <p className="text-stone-400 text-xl font-normal text-center">
            <span className="block text-lg lg:text-2xl font-bold text-[#009C00]">100%</span>
            Client Satisfaction
          </p>



        </motion.div>

        <BsMouse className="text-stone-400 animate-bounce " size={33}/>
      </motion.div>
    </header>
    <Technologies />
    <Connect />
    </div>
  
  );
};

export default Home;
