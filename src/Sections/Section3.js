import React from "react";
import Carousel from "../Components/Carousel";
import projectImage1 from "../Assets/images/Project1.png";
import projectImage2 from "../Assets/images/Project4.png";
import projectImage3 from "../Assets/images/Project5.png";
import projectImage4 from "../Assets/images/Project6.png";
import projectImage5 from "../Assets/images/Project7.png";

const Section3 = () => {
  const projectData = [
    {
      title: "MOVIE-ZONE",
      image: projectImage1,
      description:
        "Movie-Zone is a React and Redux-based website that showcases movie details such as ratings, cast, release date, director, and writer, along with trailers fetched from YouTube via APIs.",
      link: "https://movie-app-tan-one.vercel.app/", // Link to the project
    },
    {
      title: "Better",
      image: projectImage2,
      description: "Better.com clone website is a react and Next.js website",
      link: "https://better-com.onrender.com/",
    },
    {
      title: "Beach-Tix",
      image: projectImage3,
      description:
        "Beach-Tix is a dynamic website where users can purchase tickets for Beach-house parties and shop for merchandise like caps and t-shirts. Built with React, Tailwind, Node.js, Express.js, and MongoDB, it offers a seamless shopping and ticketing experience.",
      link: "https://beach-house-ticket.vercel.app/",
    },
    {
      title: "Virtual Vision",
      image: projectImage4,
      description:
        "Virtual Vision Landing Page built with React and Tailwindcss",
      link: "https://virtual-vision-landing-page.vercel.app/",
    },
    {
      title: "Motion Art",
      image: projectImage5,
      description:
        "Motion Art Landing Page built with React and Styled Component",
      link: "https://motion-landing-page.vercel.app/",
    },
  ];
  return (
    <div id="Section3" className="my-20">
      
      <h1 className="font-extrabold text-center text-3xl lg:text-4xl leading-[55px] my-16 lg:leading-normal  bg-gradient-to-r from-[#864df9] to-white bg-clip-text text-transparent">
        My Projects
      </h1>
      <div className="max-w-4xl mx-auto">
        <Carousel items={projectData} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Section3;
