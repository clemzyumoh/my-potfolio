import React from "react";
import Slider from "react-slick";

const Carousel = ({ items }) => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop through items
    speed: 500, // Transition speed
    slidesToShow: 1, // Items visible per slide
    slidesToScroll: 1, // Items to scroll per action
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Set delay to 5 seconds (5000ms)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index} className="p-4">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View details of ${item.title}`}
            className="block">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-lg w-full border border-[#8750f7] shadow-[#8750f7] mx-2 my-4"
            />{" "}
          </a>
          <h3 className="mt-2 text-xl font-semibold text-center">
            {item.title}
          </h3>
          <p className="text-sm text-gray-600 text-center">
            {item.description}
          </p>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
