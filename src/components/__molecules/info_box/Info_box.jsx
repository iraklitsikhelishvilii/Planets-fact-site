import React from "react";

function Info_box({ rotation, revolution, radius, temp }) {
  return (
    <div className=" gap-[8px]  flex w-[100%] justify-between !mt-[80px] !mb-[10px] max-[860px]:!px-[40px] max-[860px]:!mt-[27px] max-[860px]:!mb-[27px] max-[710px]:flex-col max-[710px]:w-[100%] max-[710px]:!px-[24px]">
      <div className=" flex flex-col justify-center !pl-[23px] border-[1px] border-solid border-[#ffffff80] w-[255px] h-[128px] max-[860px]:w-[164px] max-[860px]:h-[88px]  max-[860px]:!pl-[15px] max-[710px]:w-[100%] max-[710px]:h-[48px] max-[710px]:flex-row max-[710px]:items-center max-[710px]:justify-between max-[710px]:!px-[24px]">
        <p className=" opacity-[0.5] text-[11px] font-[700] text-[#fff] tracking-[1px] max-[860px]:text-[8px] max-[860px]:leading-[16px] max-[860px]:tracking-[0.7px]">
          ROTATION TIME
        </p>
        <p className=" text-[36px] text-[#fff] font-[400] tracking-[-1.5px] max-[860px]:text-[24px]  max-[860px]:tracking-[-0.9px] max-[710px]:text-[20px]">
          {rotation}
        </p>
      </div>
      <div className=" flex flex-col justify-center !pl-[23px] border-[1px] border-solid border-[#ffffff80] w-[255px] h-[128px] max-[860px]:w-[164px] max-[860px]:h-[88px] max-[860px]:!pl-[15px] max-[710px]:w-[100%] max-[710px]:h-[48px] max-[710px]:flex-row max-[710px]:items-center max-[710px]:justify-between max-[710px]:!px-[24px]">
        <p className="  opacity-[0.5] text-[11px] font-[700] text-[#fff] tracking-[1px] max-[860px]:text-[8px] max-[860px]:leading-[16px] max-[860px]:tracking-[0.7px]">
          REVOLUTION TIME
        </p>
        <p className=" text-[36px] text-[#fff] font-[400] tracking-[-1.5px] max-[860px]:text-[24px]  max-[860px]:tracking-[-0.9px] max-[710px]:text-[20px]">
          {revolution}
        </p>
      </div>
      <div className=" flex flex-col justify-center !pl-[23px] border-[1px] border-solid border-[#ffffff80] w-[255px] h-[128px] max-[860px]:w-[164px] max-[860px]:h-[88px] max-[860px]:!pl-[15px] max-[710px]:w-[100%] max-[710px]:h-[48px] max-[710px]:flex-row max-[710px]:items-center max-[710px]:justify-between max-[710px]:!px-[24px]">
        <p className="  opacity-[0.5] text-[11px] font-[700] text-[#fff] tracking-[1px] max-[860px]:text-[8px] max-[860px]:leading-[16px] max-[860px]:tracking-[0.7px]">
          radius
        </p>
        <p className=" text-[36px] text-[#fff] font-[400] tracking-[-1.5px] max-[860px]:text-[24px]  max-[860px]:tracking-[-0.9px] max-[710px]:text-[20px]">
          {radius}
        </p>
      </div>
      <div className="flex flex-col justify-center !pl-[23px] border-[1px] border-solid border-[#ffffff80] w-[255px] h-[128px] max-[860px]:w-[164px] max-[860px]:h-[88px] max-[860px]:!pl-[15px] max-[710px]:w-[100%] max-[710px]:h-[48px] max-[710px]:flex-row max-[710px]:items-center max-[710px]:justify-between max-[710px]:!px-[24px]">
        <p className=" opacity-[0.5] text-[11px] font-[700] text-[#fff] tracking-[1px] max-[860px]:text-[8px] max-[860px]:leading-[16px] max-[860px]:tracking-[0.7px]">
          AVERAGE TEMP.
        </p>
        <p className=" text-[36px] text-[#fff] font-[400] tracking-[-1.5px] max-[860px]:text-[24px]  max-[860px]:tracking-[-0.9px] max-[710px]:text-[20px]">
          {temp}
        </p>
      </div>
    </div>
  );
}

export default Info_box;
