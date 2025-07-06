import React from "react";
import Carousel from "../Components/Carousel";
import projectImage1 from "../Assets/images/Project1.png";

import projectImage3 from "../Assets/images/Project5.png";
import projectImage4 from "../Assets/images/Project6.png";
import projectImage5 from "../Assets/images/Project7.png";
import projectImage6 from "../Assets/images/deworld.png";
import projectImage7 from "../Assets/images/solapay.png";

const Section3 = () => {
  const projectData = [
    {
      title: "SolaPay",
      image: projectImage7,
      description:
        "A full-stack decentralized invoicing platform that allows users to create, send, and pay invoices using Solana Pay. Built with Next.js, TypeScript, Tailwind CSS, Redux, Node.js, Express, MongoDB, and Passport.js for secure authentication.",
      link: "https://solapay-frontend.vercel.app/", // Link to the project
    },
    {
      title: "MOVIE-ZONE",
      image: projectImage1,
      description:
        "Movie-Zone is a React and Redux-based website that showcases movie details such as ratings, cast, release date, director, and writer, along with trailers fetched from YouTube via APIs.",
      link: "https://movie-app-tan-one.vercel.app/", // Link to the project
    },

    {
      title: "Beach-Tix",
      image: projectImage3,
      description:
        "Beach-Tix is a dynamic website where users can purchase tickets for Beach-house parties and shop for merchandise like caps and t-shirts. Built with React, Tailwind, Node.js, Express.js, and MongoDB, it offers a seamless shopping and ticketing experience.",
      link: "https://beach-house-ticket.vercel.app/",
    },
    {
      title: "DeWorld",
      image: projectImage6,
      description:
        "A clean and modern landing page built for a decentralized community. Designed with React and Tailwind CSS, focused on speed, mobile responsiveness, and strong call-to-actions.",
      link: "https://de-world.vercel.app/",
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
