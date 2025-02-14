import React from "react";

function Main_button_box({
  InternalClick,
  PlanetClick,
  hover_color,
  MouseEnter,
  MouseLeave,
  GeoVisible,
  index,
  classname,
}) {
  return (
    <div className="flex flex-col items-center justify-center !mt-[39px] gap-[15px] max-[860px]:!mt-[56px] max-[710px]:hidden ">
      <button
        onClick={PlanetClick ? PlanetClick : undefined}
        style={{
          backgroundColor: index === 1 ? hover_color : "",
        }}
        onMouseEnter={MouseEnter ? () => MouseEnter(1) : undefined}
        onMouseLeave={MouseLeave ? MouseLeave : undefined}
        className={classname}
      >
        <p className=" !ml-[28px] text-[12px] font-[700] text-[#fff] tracking-[2.5px] opacity-[0.5]  max-[860px]:text-[9px]  max-[860px]:!ml-[20px]">
          01
        </p>
        <p className="text-[12px] font-[700] text-[#fff] tracking-[2.5px] max-[860px]:text-[9px]">
          OVERVIEW
        </p>
      </button>
      <button
        onClick={InternalClick ? InternalClick : undefined}
        style={{
          backgroundColor: index === 2 ? hover_color : "",
        }}
        onMouseEnter={MouseEnter ? () => MouseEnter(2) : undefined}
        onMouseLeave={MouseLeave ? MouseLeave : undefined}
        className={classname}
      >
        <p className="!ml-[28px] text-[12px] font-[700] text-[#fff] tracking-[2.5px] opacity-[0.5] max-[860px]:text-[9px] max-[860px]:!ml-[20px]">
          02
        </p>{" "}
        <p className="text-[12px] font-[700] text-[#fff] tracking-[2.5px] max-[860px]:text-[9px] ">
          Internal Structure
        </p>
      </button>
      <button
        onClick={GeoVisible ? GeoVisible : undefined}
        style={{
          backgroundColor: index === 3 ? hover_color : "",
        }}
        onMouseEnter={MouseEnter ? () => MouseEnter(3) : undefined}
        onMouseLeave={MouseLeave ? MouseLeave : undefined}
        className={classname}
      >
        <p className="!ml-[28px] text-[12px] font-[700] text-[#fff] tracking-[2.5px] opacity-[0.5] max-[860px]:text-[9px] max-[860px]:!ml-[20px]">
          03
        </p>{" "}
        <p className="text-[12px] font-[700] text-[#fff] tracking-[2.5px] max-[860px]:text-[9px] ">
          Surface Geology
        </p>
      </button>
    </div>
  );
}

export default Main_button_box;
