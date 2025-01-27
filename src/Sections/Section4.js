import React from "react";
import { MdSchool } from "react-icons/md";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Section4 = () => {
   const sectionRef = useRef(null); // Reference for the section
   const isInView = useInView(sectionRef, { once: false }); // Detect if in view

   // Parent animation variant (controls stagger)
   const containerVariant = {
     hidden: {}, // No animation for the parent itself
     visible: {
       transition: {
         staggerChildren: 0.8, // Stagger the children with a 0.4-second delay
       },
     },
   };

   // Variant for cards coming from the left
   const leftCardVariant = {
     hidden: { opacity: 0, x: -200 }, // Start from the left (-200)
     visible: {
       opacity: 1,
       x: 0, // Move to the center
       transition: {
         duration: 1.2, // Duration for the animation
         ease: [0.42, 0, 0.58, 1], // Smooth easing
       },
     },
   };

   // Variant for cards coming from the right
   const rightCardVariant = {
     hidden: { opacity: 0, x: 200 }, // Start from the right (200)
     visible: {
       opacity: 1,
       x: 0, // Move to the center
       transition: {
         duration: 1.2, // Duration for the animation
         ease: [0.42, 0, 0.58, 1], // Smooth easing
       },
     },
   };
  return (
    <motion.div ref={sectionRef} id="Section4" className="my-10 py-10 bg-black">
      <motion.div className="flex justify-center items-center flex-col">
        <div className="flex justify-center items-center">
          <div className=" flex justify-center items-center mx-4 w-14 h-14 rounded-full bg-transparent border-2 border-solid border-[#8750f7] text-[#8750f7] hover:bg-[#2a1454] hover:text-white/80 transition-all hover:ease-in-out hover:delay-100">
            <MdSchool className="w-10 h-10 " />
          </div>
          <h1 className="font-extrabold text-3xl lg:text-4xl leading-[55px] my-5 lg:leading-normal mb-3 bg-gradient-to-r from-[#8750f7] via-[#a67ff0] to-white bg-clip-text text-transparent">
            My Education
          </h1>
        </div>
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center items-center flex-col">
          <motion.div
            
            variants={leftCardVariant}
            className="flex justify-start items-start flex-col bg-[#0f0715] lg:py-6 lg:pl-8 py-3 pl-2 w-[95vw] md:w-[60vw] rounded-2xl my-6">
            <p className=" md:text-2xl font-semibold text-[#8750f7]">
              2019-2024
            </p>
            <h3 className="text-xl md:text-3xl w-full font-bold lg:my-2 my-1">
              PETROLEUM ENGINEERING
            </h3>
            <h5 className="md:text-xl text-neutral-400">
              Petroleum Training Institute
            </h5>
          </motion.div>
          <motion.div
            
            variants={rightCardVariant}
            className="flex justify-start items-start flex-col bg-[#0f0715] lg:py-6 lg:pl-8 py-3 pl-2 w-[95vw] md:w-[60vw] rounded-2xl my-6">
            <p className=" md:text-2xl font-semibold text-[#8750f7]">
              May 1, 2024
            </p>
            <h3 className="text-xl md:text-3xl w-full font-bold lg:my-2 my-1">
              PRINCIPLES OF UI/UX DESIGN
            </h3>
            <h5 className="md:text-xl text-neutral-400">
              Meta Frontend-Developer Course in COUSERA.
            </h5>
          </motion.div>
          <motion.div
            
            variants={leftCardVariant}
            className="flex justify-start items-start flex-col bg-[#0f0715] lg:py-6 lg:pl-8 py-3 pl-2 w-[95vw] md:w-[60vw] rounded-2xl my-6">
            <p className=" md:text-2xl font-semibold text-[#8750f7]">
              April 13, 2024
            </p>
            <h3 className="text-xl md:text-3xl w-full font-bold lg:my-2 my-1">
              ADVANCED REACT
            </h3>
            <h5 className="md:text-xl text-neutral-400">
              Meta Frontend-Developer Course in COUSERA.
            </h5>
          </motion.div>
          <motion.div
          
            variants={rightCardVariant}
            className="flex justify-start items-start flex-col bg-[#0f0715] lg:py-6 lg:pl-8 py-3 pl-2 w-[95vw] md:w-[60vw] rounded-2xl my-6">
            <p className=" md:text-2xl font-semibold text-[#8750f7]">
              January 2, 2024.
            </p>
            <h3 className="text-xl md:text-3xl w-full font-bold lg:my-2 my-1">
              REACT BASIC
            </h3>
            <h5 className="md:text-xl text-neutral-400">
              Meta Frontend-Developer Course in COUSERA.
            </h5>
          </motion.div>
          <motion.div
          
            variants={leftCardVariant}
            className="flex justify-start items-start flex-col bg-[#0f0715] lg:py-6 lg:pl-8 py-3 pl-2 w-[95vw] md:w-[60vw] rounded-2xl my-6">
            <p className=" md:text-2xl font-semibold text-[#8750f7]">
              December 14,2023.
            </p>
            <h3 className="text-xl md:text-3xl w-full font-bold lg:my-2 my-1">
              VERSION CONTROL
            </h3>
            <h5 className="md:text-xl text-neutral-400">
              Meta Frontend-Developer Course in COUSERA.
            </h5>
          </motion.div>
          <motion.div
  
            variants={rightCardVariant}
            className="flex justify-start items-start flex-col bg-[#0f0715] lg:py-6 lg:pl-8 py-3 pl-2 w-[95vw] md:w-[60vw] rounded-2xl my-6">
            <p className=" md:text-2xl font-semibold text-[#8750f7]">
              December 13,2023.
            </p>
            <h3 className="text-xl md:text-3xl w-full font-bold lg:my-2 my-1">
              PROGRAMMING WITH JAVASCRIPT
            </h3>
            <h5 className="md:text-xl text-neutral-400">
              Meta Frontend-Developer Course in COUSERA.
            </h5>
          </motion.div>
          <motion.div
          
            variants={leftCardVariant}
            className="flex justify-start items-start flex-col bg-[#0f0715] lg:py-6 lg:pl-8 py-3 pl-2 w-[95vw] md:w-[60vw] rounded-2xl my-6">
            <p className=" md:text-2xl font-semibold text-[#8750f7]">
              December 29,2023.
            </p>
            <h3 className="text-xl md:text-3xl w-full font-bold lg:my-2 my-1">
              HTML AND CSS IN DEPTH
            </h3>
            <h5 className="md:text-xl text-neutral-400">
              Meta Frontend-Developer Course in COUSERA.
            </h5>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Section4;
