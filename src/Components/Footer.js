import React from "react";
import logo from "../Assets/images/logo4.png";

function Footer() {
  return (
    <div className="flex justify-center items-center flex-col bg-[#140c1c]">
      <div className="flex items-center lg:ml-10 ml-3 my-8 ">
        <img className="mr-5 w-12 h-14 " src={logo} alt="logo" />

        <a
          href="https://linktr.ee/clemzy24"
          target="blank"
          rel="noopener noreferrer"
        >
          {" "}
          Clement Umoh
        </a>
      </div>
      <p className="text-[#8750f7] mb-3">© 2025 All Rights Reserved by Clement Umoh</p>
    </div>
  );
}

export default Footer;
