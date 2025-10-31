import React, { useRef, useState } from "react";
import { BiMessageRounded } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { motion } from "framer-motion";
import { IoLogoGithub } from "react-icons/io";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoLogoTwitter } from "react-icons/io5";
import emailjs from '@emailjs/browser'


const Connect: React.FC = () => {

  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_an69t3d",
          "template_15l6r9g",
          form.current,
          "PS7QkTxoJvNp8x89V"
        )
        .then(
        () => {
          setIsSent(true);
          setIsLoading(false);
          form.current?.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setIsLoading(false);
        }
      );
    }
  };
  const openLink = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="flex flex-col items-center justify-center text-white pt-28 bg-black overflow-hidden">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex gap-2 text-3xl sm:text-3xl lg:text-4xl font-semibold py-6"
      >
        Let's <span className="text-[#009C00]">Connect</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-stone-400 text-lg font-medium text-center lg:max-w-full sm:max-w-lg px-4 pb-16"
      >
        Ready to bring your ideas to life? Let's discuss your next project.
      </motion.p>

      {/* Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-12 py-12 text-white bg-black">
        {/* Message Form */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="bg-white/10 p-6 border rounded-xl lg:w-[400px] sm:w-full border-white/15"
        >
          <div className="flex gap-2 items-center justify-start p-6 text-2xl font-medium">
            <BiMessageRounded className="text-center text-[#009C00] text-3xl" />
            <h3>Send a Message</h3>
          </div>


          {/* form */}
 {isSent ? (
        <p className="text-green-500 text-lg">
          ✅ Thank you for contacting me! I’ll reply soon.
        </p>
      ) : (
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                required
                placeholder="Your full name"
                className="w-full block my-4 bg-white/5 text-stone-400 border border-stone-600 px-3 py-2 rounded-xl focus:outline-none focus:border-[#009C00] transition"
              />
            </div>

            <div>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                required
                placeholder="your.email@example.com"
                className="w-full block my-4 bg-white/5 text-stone-400 border border-stone-600 px-3 py-2 rounded-xl focus:outline-none focus:border-[#009C00] transition"
              />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                required
                id="message"
                className="w-full block my-4 bg-white/5 text-stone-400 border border-stone-600 px-3 py-2 rounded-xl focus:outline-none focus:border-[#009C00] transition"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex gap-4 text-black bg-[#009C00] w-full items-center py-4 justify-center rounded-xl font-medium text-lg"
            >
              {isLoading ? "Sending..." : "Send Message"} <LuSend />
            </motion.button>
          </form>)}
        </motion.div>

        {/* Get in Touch */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="bg-white/10 p-6 border rounded-xl lg:w-[400px] sm:w-full border-white/15"
          >
            <div>
              <h3 className="py-6 text-2xl font-medium ">Get in Touch</h3>
              <p className="text-stone-400 max-w-md text-lg pb-6">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology and
                development.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                {
                  icon: <CiCalendar size={28} />,
                  title: "Schedule a call",
                  text: "Book a 30-minutes meeting",
                },
                {
                  icon: <MdOutlineMailOutline size={28} />,
                  title: "Email",
                  text: "Chigozirimfavour001@gmail.com",
                      url: "mailto:Chigozirimfavour001@gmail.com", 
                },
                {
                  icon: <IoLogoGithub size={28} />,
                  title: "GitHub",
                  text: "github.com/Gozirimdev",
                      url: "https://github.com/Gozirimdev",
                },
                {
                  icon: <SlSocialLinkedin size={22} />,
                  title: "LinkedIn",
                  text: "linkedin.com/in/favour-chigozirim-3aa345370",
                  url:'https://www.linkedin.com/in/favour-chigozirim-3aa345370'
                },
                {
                  icon: <IoLogoTwitter size={24} />,
                  title: "Twitter",
                  text: "@Fav_Chigozirim",
                      url: "https://x.com/Fav_Chigozirim",
                },
              ].map((item, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                            onClick={() => openLink(item.url)}

                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex gap-2 items-center w-full py-4 px-4 
             bg-[#1a1a1a]/80 hover:bg-[#2a2a2a]/90
             border border-white/15 rounded-xl 
             text-white transition-all duration-300
             backdrop-blur-sm"
                >
                  <div className="text-[#009C00] bg-green-500/10 rounded-full p-2 font-bold">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-start text-lg font-medium">
                      {item.title}
                    </h4>
                    <p className="text-stone-400 font-normal text-start text-md">
                      {item.text}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="bg-white/10 px-6 py-6 border rounded-xl lg:w-[400px] sm:w-full border-white/15 mt-6"
          >
            <h2 className="text-xl font-bold pb-4">Availability</h2>
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative before:content-[''] before:inline-block before:w-3 before:h-3 before:rounded-full before:bg-green-500 before:mr-4 text-white text-md sm:text-md flex items-center font-medium     rounded-3xl pb-2 "
            >
              Available for new projects
            </motion.p>
             <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative before:content-[''] before:inline-block before:w-3 before:h-3 before:rounded-full before:bg-blue-500 before:mr-4 text-white text-md sm:text-md flex items-center font-medium    rounded-3xl pb-2 "
            >
             Open to full-time opportunities
            </motion.p>
             <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative before:content-[''] before:inline-block before:w-3 before:h-3 before:rounded-full before:bg-purple-500 before:mr-4 text-white text-md sm:text-md flex items-center font-medium     rounded-3xl "
            >
Freelance & consulting available
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
