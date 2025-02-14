import React from "react";
import Info_small_box from "../../__atoms/info_small_box/Info_small_box";

function Info_box({ rotation, revolution, radius, temp }) {
  return (
    <div className=" gap-[8px]  flex w-[100%] justify-between !mt-[80px] !mb-[10px] max-[860px]:!px-[40px] max-[860px]:!mt-[27px] max-[860px]:!mb-[27px] max-[710px]:flex-col max-[710px]:w-[100%] max-[710px]:!px-[24px]">
      <Info_small_box heading={"ROTATION TIME"} content={rotation} />
      <Info_small_box heading={"REVOLUTION TIME"} content={revolution} />
      <Info_small_box heading={"RADIUS"} content={radius} />
      <Info_small_box heading={"AVERAGE TEMP."} content={temp} />
    </div>
  );
}

export default Info_box;
