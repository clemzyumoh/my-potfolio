import React from "react";
import { GoDownload } from "react-icons/go";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";


import Resume from "../Assets/images/RESUME.pdf";
import { BsTwitterX } from "react-icons/bs";

import img from "../Assets/images/clemzy.png";

const Section1 = () => {
  return (
    <div
      id="Section1"
      className="lg:mt-20 mt-20 py-20 relative w-[100vw] flex items-center justify-center mx-0 overflow-x-hidden">
      <h1 className="  z-0   absolute text-[20rem] font-bold text-[#1e102e] p-8 animate-pulse scale-animation  ">
        HI
      </h1>
      <div className="z-10 flex items-center justify-between w-[90vw] flex-col lg:flex-row md:flex-row  ">
        <div className="lg:ml-12 ">
          {" "}
          <h2 className="font-bold text-2xl lg:text-4xl text-neutral-100">
            I am Clement Umoh
          </h2>
          <h1 className="font-extrabold md:text-5xl text-3xl lg:text-5xl leading-[55px] my-5 lg:leading-normal mb-3 bg-gradient-to-r from-[#8750f7] via-[#885ede] to-white bg-clip-text text-transparent">
            Software Developer
          </h1>
          <div className="lg:hidden my-6 ">
            <div className="w-60 h-60 absolute  bottom-20 bg-[#7947df] blur-[200px] rounded-full"></div>
            <img
              className="bg-black border-4 md:hidden  w-full h-full rounded-3xl   border-[#8750f7]   transition-all"
              src={img}
              alt="avater"
            />
          </div>
          <p className="text-xl text-center md:text-left lg:tracking-wider text-neutral-300 lg:text-xl tracking-wide md:w-[400px] leading-7 mb-10">
            I am a passionate full-stack web developer with a strong focus on
            building scalable, performant, and user-centric web applications. I
            specialize in modern technologies like React, Next.js, TypeScript,
            and Node.js. .
          </p>
          <div className="flex items-center justify-start flex-col lg:flex-row md:mr-40  ">
            <button>
              <a
                href={Resume}
                className="flex justify-between items-center mr-4 text-[#8750f7] text-lg rounded-full py-3 px-8 border-2 border-solid border-[#8750f7] hover:bg-[#2a1454] hover:text-white/80  transition-all hover:ease-in-out hover:delay-100 "
                target="_blank"
                rel="noopener noreferrer">
                Download CV
                <GoDownload className="ml-5" />
              </a>
            </button>

            <div className="flex items-center justify-start mt-5 lg:mt-0">
              <div className=" flex justify-center items-center mx-4 w-10 h-10 rounded-full bg-transparent border-2 border-solid border-[#8750f7] text-[#8750f7] hover:bg-[#2a1454] hover:text-white/80 transition-all hover:ease-in-out hover:delay-100">
                <a
                  href="https://github.com/clemzyumoh"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaGithub className="w-6 h-6 " />
                </a>
              </div>
              <div className=" flex justify-center items-center mx-4 w-10 h-10 rounded-full bg-transparent border-2 border-solid border-[#8750f7] text-[#8750f7] hover:bg-[#2a1454] hover:text-white/80 transition-all hover:ease-in-out hover:delay-100">
                
                <a
                  href="https://www.linkedin.com/in/clement-umoh-a17b8629b/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaLinkedinIn className="w-6 h-6  " />
                </a>
              </div>
              <div className=" flex justify-center items-center mx-4 w-10 h-10 rounded-full bg-transparent border-2 border-solid border-[#8750f7] text-[#8750f7] hover:bg-[#2a1454] hover:text-white/80 transition-all hover:ease-in-out hover:delay-100">
                <a
                  href="https://x.com/UmohPet"
                  target="_blank"
                  rel="noopener noreferrer">
                  <BsTwitterX className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block lg:block md:mb-10 lg:mb-0 relative">
          {/* Glowing Blur Circle */}
          <div className="w-60 h-60 absolute left-20 bottom-20 bg-[#7947df] blur-[200px] rounded-full"></div>

          {/* Image */}
          <img
            className="bg-black border-4  md:w-full md:h-full lg:max-w-[500px] lg:max-h-[500px] rounded-3xl mr-16 border-[#8750f7] transition-all duration-300 ease-in-out"
            src={img}
            alt="avatar"
          />
        </div>

        {/* <div className="hidden md:block lg:block md:mb-10 lg:mb-0 object-fill">
          <div className="w-60 h-60 absolute left-100 bottom-20 bg-[#7947df] blur-[200px] rounded-full"></div>
          <img
            className="bg-black border-4  border-[#8750f7]/35 lg:w-[440px] md:w-[320px] md:h-[360px] lg:h-[480px] rounded-[60px] mr-16 rotate-12 hover:rotate-0 hover:border-[#8750f7] hover:  hover:transition-all"
            src={img}
            alt="avater"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Section1;
