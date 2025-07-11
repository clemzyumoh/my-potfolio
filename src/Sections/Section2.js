import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import { IoIosArrowRoundDown } from "react-icons/io";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Section2 = () => {
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
    <motion.div id="Section2" ref={sectionRef} className="my-20 py-10 bg-black">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}>
        <motion.div className="flex justify-center items-center flex-col">
          <motion.h1
            variants={childVariant}
            className="font-extrabold text-3xl lg:text-4xl leading-[55px] my-5 lg:leading-normal mb-3 bg-gradient-to-r from-[#8750f7] via-[#a67ff0] to-white bg-clip-text text-transparent">
            My Quality Services
          </motion.h1>
          <motion.p
            variants={childVariant}
            className="text-center md:w-[600px] mx-3 text-lg md:text-xl sm:py-3">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </motion.p>
        </motion.div>
        <motion.div className="flex justify-center items-center flex-col lg:mx-28 md:mx-5 my-10 ">
          <motion.div
            variants={childVariant}
            className=" hover:bg-gradient-to-r from-[#7947df] to-[#381d6d] w-full py-3 text-[#8750f7] hover:text-white border-b-2 border-[#8750f7]/35 cursor-pointer">
            <div className=" hidden  lg:flex justify-center items-center w-full relative py-5 ">
              <div className=" flex justify-between items-center  absolute left-8  ">
                <p className=" text-2xl font-bold mr-5">01</p>
                <h2 className="text-2xl text-white font-bold">
                  {" "}
                  Web Development
                </h2>
              </div>
              <div className="text-white ml-80 ">
                <p>
                  Creating websites that are Responsive.
                  <br /> Building fast-loading SPAs and Custom Components using
                  frameworks like ReactJS.
                </p>
              </div>
              <div className="absolute right-8">
                <FaArrowDownLong className="-rotate-45 w-6 h-24 " />
              </div>
            </div>
            <div className=" hidden  md:flex lg:hidden justify-center items-center w-full relative py-2">
              <div className=" flex justify-between items-center  absolute left-8  ">
                <p className=" text-2xl font-bold mr-5">01</p>
                <h2 className="text-xl text-white font-bold">
                  {" "}
                  Web Development
                </h2>
              </div>
              <div className="text-white ml-60 ">
                <p>
                  Creating websites that are Responsive. Building <br />{" "}
                  fast-loading SPAs and Custom Components using <br />
                  frameworks like ReactJS.
                </p>
              </div>
              <div className="absolute right-8">
                <FaArrowDownLong className="-rotate-45 w-6 h-24 " />
              </div>
            </div>
            <div className=" md:hidden flex justify-center items-center w-full flex-col  p-2 ">
              <div className="flex justify-between items-center w-full px-3 ">
                <div className=" flex justify-around items-center    ">
                  <p className=" text-2xl font-bold mr-3">01</p>
                  <h2 className="text-xl text-white font-bold">
                    {" "}
                    Web Development
                  </h2>
                </div>
                <div className="w-fit">
                  <IoIosArrowRoundDown className="-rotate-45 w-10 h-11 " />
                </div>
              </div>
              <div className="text-white ml-3 mt-2">
                <p>
                  Creating websites that are Responsive. Building fast-loading
                  SPAs and Custom Components using frameworks like ReactJS.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={childVariant}
            className=" hover:bg-gradient-to-r from-[#7947df] to-[#381d6d] w-full py-3 text-[#8750f7] hover:text-white border-b-2 border-[#8750f7]/35 cursor-pointer">
            <div className="hidden  lg:flex justify-center items-center w-full relative py-5 ">
              <div className=" flex justify-between items-center  absolute left-8  ">
                <p className=" text-2xl font-bold mr-5">02</p>
                <h2 className="text-2xl text-white font-bold">
                  {" "}
                  UI/UX Implementation
                </h2>
              </div>
              <div className="text-white ml-96 ">
                <p>
                  Translating designs from tools like Figma, Adobe XD, or Sketch
                  into functional web interfaces. <br /> Adding animations,
                  transitions, etc to enhance user engagement.
                </p>
              </div>
              <div className="absolute right-8">
                <FaArrowDownLong className="-rotate-45 w-6 h-24 " />
              </div>
            </div>
            <div className=" hidden  md:flex lg:hidden justify-center items-center w-full relative py-2">
              <div className=" flex justify-between items-center  absolute left-8  ">
                <p className=" text-2xl font-bold mr-5">02</p>
                <h2 className="text-xl text-white font-bold">
                  {" "}
                  UI/UX <br /> Implementation
                </h2>
              </div>
              <div className="text-white ml-60 ">
                <p>
                  Translating designs from tools like Figma, Adobe XD <br />
                  into functional web interfaces. Adding animations,
                  <br />
                  transitions, etc to enhance user engagement.
                </p>
              </div>
              <div className="absolute right-8">
                <FaArrowDownLong className="-rotate-45 w-6 h-24 " />
              </div>
            </div>
            <div className=" md:hidden flex justify-center items-center w-full flex-col  p-2 ">
              <div className="flex justify-between items-center w-full px-3 ">
                <div className=" flex justify-around items-center    ">
                  <p className=" text-2xl font-bold mr-3">02</p>
                  <h2 className="text-xl text-white font-bold">
                    {" "}
                    UI/UX Implementation
                  </h2>
                </div>
                <div className="w-fit">
                  <IoIosArrowRoundDown className="-rotate-45 w-10 h-11 " />
                </div>
              </div>
              <div className="text-white ml-3 mt-2">
                <p>
                  Translating designs from tools like Figma, Adobe XD, or Sketch
                  into functional web interfaces. Adding animations,
                  transitions, etc to enhance user engagement.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={childVariant}
            className=" hover:bg-gradient-to-r from-[#7947df] to-[#381d6d] w-full py-3 text-[#8750f7] hover:text-white border-b-2 border-[#8750f7]/35 cursor-pointer">
            <div className="hidden  lg:flex justify-center items-center w-full relative py-5 ">
              <div className=" flex justify-between items-center  absolute left-8  ">
                <p className=" text-2xl font-bold mr-5">03</p>
                <h2 className="text-2xl text-white font-bold">
                  {" "}
                  Frontend Maintenance
                </h2>
              </div>
              <div className="text-white ml-72 ">
                <p>
                  Identifying, fixing UI/UX issues and Cross-Browser
                  Compatibility
                  <br /> Feature Adding new features or enhancing existing ones
                  based on user feedback.
                </p>
              </div>
              <div className="absolute right-8">
                <FaArrowDownLong className="-rotate-45 w-6 h-24 " />
              </div>
            </div>
            <div className=" hidden  md:flex lg:hidden justify-center items-center w-full relative py-2">
              <div className=" flex justify-between items-center  absolute left-8  ">
                <p className=" text-2xl font-bold mr-5">03</p>
                <h2 className="text-xl text-white font-bold">
                  {" "}
                  Frontend
                  <br /> Maintenance
                </h2>
              </div>
              <div className="text-white ml-56 ">
                <p>
                  Identifying, fixing UI/UX issues and Cross-Browser
                  <br />
                  Compatibility Feature Adding new features or <br />
                  enhancing existing ones based on user feedback.
                </p>
              </div>
              <div className="absolute right-8">
                <FaArrowDownLong className="-rotate-45 w-6 h-24 " />
              </div>
            </div>
            <div className=" md:hidden flex justify-center items-center w-full flex-col  p-2 ">
              <div className="flex justify-between items-center w-full px-3 ">
                <div className=" flex justify-around items-center    ">
                  <p className=" text-2xl font-bold mr-3">03</p>
                  <h2 className="text-xl text-white font-bold">
                    {" "}
                    Frontend Maintenance
                  </h2>
                </div>
                <div className="w-fit">
                  <IoIosArrowRoundDown className="-rotate-45 w-10 h-11 " />
                </div>
              </div>
              <div className="text-white ml-3 mt-2">
                <p>
                  Identifying, fixing UI/UX issues and Cross-Browser
                  Compatibility Feature Adding new features or enhancing
                  existing ones based on user feedback.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={childVariant}
            className=" hover:bg-gradient-to-r from-[#7947df] to-[#381d6d] w-full py-3 text-[#8750f7] hover:text-white border-b-2 border-[#8750f7]/35 cursor-pointer">
            <div className="hidden lg:flex justify-center items-center w-full relative py-5 ">
              <div className=" flex justify-between items-center  absolute left-8  ">
                <p className=" text-2xl font-bold mr-5">04</p>
                <h2 className="text-2xl text-white font-bold">
                  {" "}
                  Collaboration
                </h2>
              </div>
              <div className="text-white ml-72 ">
                <p>
                  Fetching and displaying data from back-end APIs using tools
                  like Axios or Fetch. <br />
                  Managing application state using tools like Redux or Context
                  API.
                </p>
              </div>
              <div className="absolute right-8">
                <FaArrowDownLong className="-rotate-45 w-6 h-24 " />
              </div>
            </div>
            <div className=" hidden  md:flex lg:hidden justify-center items-center w-full relative py-2">
              <div className=" flex justify-between items-center  absolute left-8  ">
                <p className=" text-2xl font-bold mr-5">04</p>
                <h2 className="text-xl text-white font-bold">
                  {" "}
                  Collaboration
                </h2>
              </div>
              <div className="text-white ml-56 ">
                <p>
                  Fetching and displaying data from back-end APIs <br />
                  using tools like Axios or Fetch. Managing application
                  <br /> state using tools like Redux or Context API.
                </p>
              </div>
              <div className="absolute right-8">
                <FaArrowDownLong className="-rotate-45 w-6 h-24 " />
              </div>
            </div>
            <div className=" md:hidden flex justify-center items-center w-full flex-col  p-2 ">
              <div className="flex justify-between items-center w-full px-3 ">
                <div className=" flex justify-around items-center    ">
                  <p className=" text-2xl font-bold mr-3">04</p>
                  <h2 className="text-xl text-white font-bold">
                    {" "}
                    Collaboration
                  </h2>
                </div>
                <div className="w-fit">
                  <IoIosArrowRoundDown className="-rotate-45 w-10 h-11 " />
                </div>
              </div>
              <div className="text-white ml-3 mt-2">
                <p>
                  Fetching and displaying data from back-end APIs using tools
                  like Axios or Fetch. Managing application state using tools
                  like Redux or Context API.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Section2;
