import React from "react";

function Info_small_box({ heading, content }) {
  return (
    <div className=" flex flex-col justify-center !pl-[23px] border-[1px] border-solid border-[#ffffff80] w-[255px] h-[128px] max-[860px]:w-[164px] max-[860px]:h-[88px]  max-[860px]:!pl-[15px] max-[710px]:w-[100%] max-[710px]:h-[48px] max-[710px]:flex-row max-[710px]:items-center max-[710px]:justify-between max-[710px]:!px-[24px]">
      <p className="font_family_spartan opacity-[0.5] text-[11px] font-[700] text-[#fff] tracking-[1px] max-[860px]:text-[8px] max-[860px]:leading-[16px] max-[860px]:tracking-[0.7px]">
        {heading}
      </p>
      <p className=" text-[36px] text-[#fff] font-[400] tracking-[-1.5px] max-[860px]:text-[24px]  max-[860px]:tracking-[-0.9px] max-[710px]:text-[20px]">
        {content}
      </p>
    </div>
  );
}

export default Info_small_box;
