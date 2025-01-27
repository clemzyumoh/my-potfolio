import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Section6 = () => {

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
    <motion.div id="Section6" ref={sectionRef} className="my-20">
      <motion.div className="bg-black">
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-extrabold text-3xl lg:text-4xl leading-[55px] my-5 lg:leading-normal mb-3 bg-gradient-to-r from-[#8750f7] via-[#a67ff0] to-white bg-clip-text text-transparent">
            Let’s work together!
          </h1>
          <p className="text-center w-[90vw]">
            I design and code beautifully simple things and i love what i do.
            Just simple like that!
          </p>
        </div>
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center items-center flex-col">
          <motion.div
            variants={leftCardVariant}
            className="md:flex justify-between items-start hidden bg-[#0f0715] lg:py-6  py-3  w-full px-4 md:w-[90vw] lg:w-[60vw] rounded-2xl my-6">
            <div className="flex justify-center items-center">
              <div className=" flex justify-center mx-2 md:mx-4 items-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-transparent border-2 border-solid border-[#8750f7] text-[#8750f7] hover:bg-[#885ede] hover:text-white/100 transition-all hover:ease-in-out hover:delay-100">
                <FaPhone className="text-2xl " />
              </div>
              <p className=" md:text-2xl font-semibold text-[#8750f7]">
                Phone Number:
              </p>
            </div>
            <div className="flex justify-start items-start flex-col lg:mr-40 md:mr-40">
              <h5 className="md:text-xl text-neutral-400">09164129038</h5>
              <h5 className="md:text-xl text-neutral-400">09025748522</h5>
            </div>
          </motion.div>
          <motion.div
            variants={rightCardVariant}
            className="md:flex justify-between items-start hidden bg-[#0f0715] lg:py-6  py-3  w-full px-4 md:w-[90vw] lg:w-[60vw] rounded-2xl my-6">
            <div className="flex justify-center items-center">
              <div className=" flex justify-center mr-2 md:mx-4 items-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-transparent border-2 border-solid border-[#8750f7] text-[#8750f7] hover:bg-[#885ede] hover:text-white/100 transition-all hover:ease-in-out hover:delay-100">
                <MdEmail className="text-2xl " />
              </div>
              <p className=" md:text-2xl font-semibold text-[#8750f7]">
                Email:
              </p>
            </div>
            <div className="flex justify-start items-start flex-col lg:mr-9 md:mr-9 ">
              <h5 className="md:text-xl text-neutral-400">
                clemzyumoh@gmail.com
              </h5>
              <h5 className="md:text-xl text-neutral-400">
                clementumoh24@gmail.com
              </h5>
            </div>
          </motion.div>
          <motion.div
            variants={leftCardVariant}
            className="md:flex justify-between items-center hidden bg-[#0f0715] lg:py-6  py-3  w-full md:px-4 px-2 md:w-[90vw] lg:w-[60vw] rounded-2xl my-6">
            <div className="flex justify-center items-center">
              <div className=" flex justify-center mr-2 md:mx-4 items-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-transparent border-2 border-solid border-[#8750f7] text-[#8750f7] hover:bg-[#885ede] hover:text-white/100 transition-all hover:ease-in-out hover:delay-100">
                <FaLocationDot className="text-2xl " />
              </div>
              <p className=" md:text-2xl font-semibold text-[#8750f7]">
                Address:
              </p>
            </div>
            <div className="flex justify-center items-center ">
              <h5 className="md:text-xl text-neutral-400">
                Ago Palace, Okota , Lagos State.
              </h5>
            </div>
          </motion.div>
          <motion.div
            variants={rightCardVariant}
            className="flex justify-between items-center md:hidden bg-[#0f0715] w-full rounded-2xl my-6">
            <div className="flex justify-center items-center ml-5 ">
              <div className=" flex justify-center items-center mr-6 w-10 h-10  rounded-full bg-transparent border-2 border-solid border-[#8750f7] text-[#8750f7] hover:bg-[#885ede] hover:text-white/100 transition-all hover:ease-in-out hover:delay-100">
                <FaPhone className="text-2xl " />
              </div>
            </div>
            <div className="flex justify-start items-start flex-col w-full ">
              <p className=" md:text-2xl font-semibold text-[#8750f7]">
                Phone Number:
              </p>
              <h5 className="md:text-xl text-neutral-400">09164129038</h5>
              <h5 className="md:text-xl text-neutral-400">09025748522</h5>
            </div>
          </motion.div>
          <motion.div
            variants={leftCardVariant}
            className="flex justify-center items-center md:hidden  bg-[#0f0715] w-full  rounded-2xl my-6">
            <div className="flex justify-between ml-5 items-center  ">
              <div className=" flex justify-center  items-center mr-3 w-10 h-10 rounded-full bg-transparent border-2 border-solid border-[#8750f7] text-[#8750f7] hover:bg-[#885ede] hover:text-white/100 transition-all hover:ease-in-out hover:delay-100">
                <MdEmail className="text-2xl " />
              </div>
            </div>
            <div className="flex justify-start items-start flex-col w-full m-3">
              <p className=" md:text-2xl font-semibold text-[#8750f7]">
                Email:
              </p>
              <h5 className="md:text-xl text-neutral-400">
                clemzyumoh@gmail.com
              </h5>
              <h5 className="md:text-xl text-neutral-400">
                clementumoh24@gmail.com
              </h5>
            </div>
          </motion.div>
          <motion.div
            variants={rightCardVariant}
            className="flex justify-center items-center md:hidden bg-[#0f0715]    w-full  rounded-2xl my-6">
            <div className="flex justify-center items-center ml-5 ">
              <div className=" flex justify-center  items-center w-10 h-10 mr-3 rounded-full bg-transparent border-2 border-solid border-[#8750f7] text-[#8750f7] hover:bg-[#885ede] hover:text-white/100 transition-all hover:ease-in-out hover:delay-100">
                <FaLocationDot className="text-2xl " />
              </div>
            </div>
            <div className="flex justify-start items-start flex-col w-full m-3 ">
              <p className=" md:text-2xl font-semibold text-[#8750f7]">
                Address:
              </p>
              <h5 className="md:text-xl text-neutral-400">
                Ago Palace, Okota , Lagos State.
              </h5>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Section6