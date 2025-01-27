import React from "react";

const HoverCard = ({
  icon,
  //cardHoverBgColor,
  cardHoverBorderColor,
  iconHoverColor,
  percent,
  //percentColor,
}) => {
  return (
    <div
      className={`group flex flex-col items-center justify-center px-20  w-40 h-52 rounded-3xl border-2 group-hover:border-solid bg-[#140c1c] text-gray-400 border-neutral-900 group-hover:transition-all group-hover:duration-700 hover:bg-[#2a1454] hover:border-${cardHoverBorderColor}`}
    >
      {/* Icon */}
      <div
        className={`text-6xl transition-colors my-5 duration-300 text-neutral-400 group-hover:text-${iconHoverColor} group-hover:scale-125 group-hover:transition-transform group-hover:duration-1000 group-hover:ease-in-out`}
      >
        {icon}
      </div>
      <div
        className={`text-2xl my-5 transition-colors duration-300 text-neutral-500 group-hover:text-[#8750f7]`}
      >
        {percent}%
      </div>
    </div>
  );
};

export default HoverCard;
