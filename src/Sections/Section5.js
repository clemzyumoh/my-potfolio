import React from "react";
import HoverCard from "../Components/HoverCard";
import { FaReact, FaNodeJs } from "react-icons/fa"; // Example icons from react-icons
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiRedux } from "react-icons/si";
//import { FaFigma } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Section5 = () => {

   const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false });
  
    const containerVariant = {
      hidden: { opacity: 0, y: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.5, // Staggers the appearance of child elements
        },
      },
    };
  
    // Animation variants for each child div
    const childVariant = {
      hidden: { opacity: 0, y: 200 },
      visible: { opacity: 1, y: 0 },
      transition: {
        duration: 3, // Slow down the animation to 1.2 seconds
        //ease: [0.2, 0.1, 0.2, 1], // Smooth cubic-bezier easing
        ease: [0.25, 0.8, 0.25, 1],
      },
    };
  
  return (
    <motion.div ref={sectionRef} id="Section5">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex justify-center items-center flex-col my-20">
        <motion.div
          variants={childVariant}
          className="flex justify-center items-center flex-col">
          <h1 className="font-extrabold text-3xl lg:text-4xl leading-[55px] my-5 lg:leading-normal mb-3 bg-gradient-to-r from-[#8750f7] via-[#a67ff0] to-white bg-clip-text text-transparent">
            My Skills
          </h1>
          <p className="text-center w-[90vw]">
            We put your ideas and thus your wishes in the form of a unique web
            <br />
            project that inspires you and you customers.
          </p>
        </motion.div>
        <motion.div
          variants={childVariant}
          className="flex  justify-center items-center my-10 lg:my-14 ">
          <div className="grid lg:grid-cols-7 grid-cols-1 md:grid-cols-4 gap-6">
            {/* React Icon Card */}
            <div className=" flex justify-center items-center flex-col">
              <HoverCard
                icon={<FaHtml5 />}
                cardHoverBgColor="[#2a1454]"
                cardHoverBorderColor="[#8750f7]"
                iconHoverColor="[#E44D26]"
                percent={95}
                percentColor="[#8750f7]"
              />
              <h3 className="text-[#8750f7] mt-5">HTML</h3>
            </div>
            <div className="flex justify-center items-center flex-col">
              <HoverCard
                icon={
                  <FaCss3Alt className="text-gray-400 group-hover:text-[#1572B6]" />
                }
                cardHoverBgColor="[#2a1454]"
                cardHoverBorderColor="[#8750f7]"
                iconHoverColor="[#61dafb]"
                percent={95}
                percentColor="[#8750f7]"
              />
              <h3 className="text-[#8750f7] mt-5">CSS</h3>
            </div>
            <div className="flex justify-center items-center flex-col">
              <HoverCard
                icon={
                  <DiJavascript className="text-gray-400 group-hover:text-[#F7DF1E]" />
                }
                cardHoverBgColor="[#2a1454]"
                cardHoverBorderColor="[#8750f7]"
                iconHoverColor="[#61dafb]"
                percent={87}
                percentColor="[#8750f7]"
              />
              <h3 className="text-[#8750f7] mt-5">JAVASCRIPT</h3>
            </div>
            <div className="flex justify-center items-center flex-col">
              <HoverCard
                icon={
                  <FaReact className="text-gray-400 group-hover:text-[#61dafb]" />
                }
                cardHoverBgColor="[#2a1454]"
                cardHoverBorderColor="[#8750f7]"
                iconHoverColor="[#61dafb]"
                percent={90}
                percentColor="[#8750f7]"
              />
              <h3 className="text-[#8750f7] mt-5">REACT</h3>
            </div>
            <div className="flex justify-center items-center flex-col">
              <HoverCard
                icon={
                  <SiRedux className="text-gray-400 group-hover:text-[#764ABC]" />
                }
                cardHoverBgColor="[#2a1454]"
                cardHoverBorderColor="[#8750f7]"
                iconHoverColor="[#61dafb]"
                percent={80}
                percentColor="[#8750f7]"
              />
              <h3 className="text-[#8750f7] mt-5">REDUX</h3>
            </div>
            <div className="flex justify-center items-center flex-col">
              <HoverCard
                icon={
                  <RiTailwindCssFill className="text-gray-400 group-hover:text-[#38BDF8]" />
                }
                cardHoverBgColor="[#2a1454]"
                cardHoverBorderColor="[#8750f7]"
                iconHoverColor="[#61dafb]"
                percent={80}
                percentColor="[#8750f7]"
              />
              <h3 className="text-[#8750f7] mt-5">TAILWIND</h3>
            </div>
            <div className="flex justify-center items-center flex-col">
              <HoverCard
                icon={
                  <FaNodeJs className="text-gray-400 group-hover:text-[#61dafb]" />
                }
                cardHoverBgColor="[#2a1454]"
                cardHoverBorderColor="[#8750f7]"
                iconHoverColor="[#61dafb]"
                percent={85}
                percentColor="[#8750f7]"
              />
              <h3 className="text-[#8750f7] mt-5">NODE</h3>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Section5;
