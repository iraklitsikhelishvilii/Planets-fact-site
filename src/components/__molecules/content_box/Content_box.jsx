import React from "react";
import { Link } from "react-router";
function Content_box({ h1, p_content, link, arrow_img }) {
  return (
    <div className=" flex flex-col  max-[710px]:items-center ">
      <h1 className="text-[80px] font-[400] text-[#fff] max-[860px]:text-[48px] max-[710px]:text-[40px]">
        {h1}
      </h1>
      <p className="font_family_spartan w-[350px] text-[14px] font-[400] leading-[25px] text-[#fff] !mt-[23px]  max-[860px]:text-[11px]  max-[860px]:leading-[22px]  max-[860px]:w-[335px] max-[710px]:text-center">
        {p_content}
      </p>
      <div className=" flex gap-[8px] !mt-[23px] ">
        <p className="font_family_spartan text-[14px] font-[400] text-[#fff] opacity-[0.5]  max-[860px]:text-[12px] ">
          Source :{" "}
          <Link to={link} className="font_family_spartan cursor-pointer font-[700]">
            Wikipedia
          </Link>
        </p>
        <img src={arrow_img} alt="" />
      </div>
    </div>
  );
}

export default Content_box;
