import React from "react";

function Main_btn({
  click,
  index,
  hover_color,
  num,
  MouseEnter,
  MouseLeave,
  classname,
  num_p,
  heading,
}) {
  return (
    <button
      onClick={click ? click : undefined}
      style={{
        backgroundColor: index === num ? hover_color : "",
      }}
      onMouseEnter={MouseEnter ? () => MouseEnter(num) : undefined}
      onMouseLeave={MouseLeave ? MouseLeave : undefined}
      className={classname}
    >
      <p className="font_family_spartan !ml-[28px] text-[12px] font-[700] text-[#fff] tracking-[2.5px] opacity-[0.5]  max-[860px]:text-[9px]  max-[860px]:!ml-[20px]">
        {num_p}
      </p>
      <p className="font_family_spartan text-[12px] font-[700] text-[#fff] tracking-[2.5px] max-[860px]:text-[9px]">
        {heading}
      </p>
    </button>
  );
}

export default Main_btn;
