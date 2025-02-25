import React from "react";
import { GoDownload } from "react-icons/go";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import Resume from "../Assets/images/Resume2.pdf"
import img from "../Assets/images/clem0.jpg"




const Section1 = () => {
  return (
    <div
      id="Section1"
      className="lg:mt-20 mt-20 py-20 relative w-[100vw] flex items-center justify-center mx-0 overflow-x-hidden"
    >
      <h1 className="  z-0   absolute text-[20rem] font-bold text-[#1e102e] p-8 animate-pulse scale-animation  ">
        HI
      </h1>
      <div className="z-10 flex items-center justify-between w-[90vw] flex-col lg:flex-row md:flex-row  ">
        <div className="lg:ml-12 "> 
          {" "}
          <h2 className="font-bold text-2xl lg:text-4xl text-neutral-100">
            I am Clement Umoh
          </h2>
          <h1 className="font-extrabold md:text-5xl text-3xl lg:text-7xl leading-[55px] my-5 lg:leading-normal mb-3 bg-gradient-to-r from-[#8750f7] via-[#885ede] to-white bg-clip-text text-transparent">
            Software Developer
          </h1>
          <div className="lg:hidden my-6 ">
            <div className="w-60 h-60 absolute  bottom-20 bg-[#7947df] blur-[200px] rounded-full"></div>
            <img
              className="bg-black border-4 md:hidden border-[#8750f7]/35 w-[280px] h-[280px] rounded-full ml-10 rotate-12 hover:rotate-0 hover:border-[#8750f7] hover:  hover:transition-all"
              src={img}
              alt="avater"
            />
          </div>
          <p className="text-xl text-center md:text-left lg:tracking-wider text-neutral-300 lg:text-xl tracking-wide md:w-[400px] leading-7 mb-10">
            I am a Passionate Frontend Developer,
             I turn ideas into stunning, user-friendly and {" "}
            responsive web applications.
          </p>
          <div className="flex items-center justify-start flex-col lg:flex-row md:mr-40  ">
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              <button className="flex justify-between items-center mr-4 text-[#8750f7] text-lg rounded-full py-3 px-8 border-2 border-solid border-[#8750f7] hover:bg-[#2a1454] hover:text-white/80  transition-all hover:ease-in-out hover:delay-100 ">
                Download CV
                <div>
                  <GoDownload className="ml-5" />
                </div>
              </button>
            </a>

            <div className="flex items-center justify-start mt-5 lg:mt-0">
              <div className=" flex justify-center items-center mx-4 w-10 h-10 rounded-full bg-transparent border-2 border-solid border-[#8750f7] text-[#8750f7] hover:bg-[#2a1454] hover:text-white/80 transition-all hover:ease-in-out hover:delay-100">
                <FaGithub className="w-6 h-6 " />
              </div>
              <div className=" flex justify-center items-center mx-4 w-10 h-10 rounded-full bg-transparent border-2 border-solid border-[#8750f7] text-[#8750f7] hover:bg-[#2a1454] hover:text-white/80 transition-all hover:ease-in-out hover:delay-100">
                <FaLinkedinIn className="w-6 h-6  " />
              </div>
              <div className=" flex justify-center items-center mx-4 w-10 h-10 rounded-full bg-transparent border-2 border-solid border-[#8750f7] text-[#8750f7] hover:bg-[#2a1454] hover:text-white/80 transition-all hover:ease-in-out hover:delay-100">
                <FaTwitter className="w-6 h-6 " />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block lg:block md:mb-10 lg:mb-0 relative">
          {/* Glowing Blur Circle */}
          <div className="w-60 h-60 absolute left-20 bottom-20 bg-[#7947df] blur-[200px] rounded-full"></div>

          {/* Image */}
          <img
            className="bg-black border-4 border-[#8750f7]/35 lg:w-[500px] md:w-[300px] md:h-[300px] lg:h-[500px] rounded-full mr-16 rotate-12 hover:rotate-0 hover:border-[#8750f7] transition-all duration-300 ease-in-out"
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
