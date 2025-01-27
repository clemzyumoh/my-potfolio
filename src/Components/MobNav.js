import React from "react";
import { Link } from "react-scroll";


const MobNav = ({handleDropDown}) => {

  return (
    <div className="fixed top-0 left-0 w-screen h-screen py-10 bg-black z-30 ">
      
        <ul className=" fixed flex  items-start flex-col  mt-12">
          <li className="mx-6 my-5">
            <Link
              to="Section2"
              className="cursor-pointer"
              smooth={true}
              duration={500}
              activeClass="active-nav-link"
              onClick={handleDropDown}
            >
              Services
            </Link>
          </li>
          <li className=" mx-6 my-7">
            <Link
              to="Section3"
              className="cursor-pointer"
              smooth={true}
              duration={500}
              activeClass="active-nav-link"
              onClick={handleDropDown}
            >
              Works
            </Link>
          </li>{" "}
          <li className=" mx-6 my-7">
            <Link
              to="Section4"
              className="cursor-pointer"
              smooth={true}
              duration={500}
              activeClass="active-nav-link"
              onClick={handleDropDown}
            >
              Resume
            </Link>
          </li>{" "}
          <li className=" mx-6 my-7">
            <Link
              to="Section5"
              className="cursor-pointer"
              smooth={true}
              duration={500}
              activeClass="active-nav-link"
              onClick={handleDropDown}
            >
              Skills
            </Link>
          </li>{" "}
          <li className=" mx-6 my-7">
            <Link
              to="Section6"
              className="cursor-pointer"
              smooth={true}
              duration={500}
              activeClass="active-nav-link"
              onClick={handleDropDown}
            >
              Contact
            </Link>
          </li>
        </ul>

    </div>
  );
};

export default MobNav;
