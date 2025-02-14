import React from "react";

function Button_top_box({
  PlanetClick,
  planetclicked,
  hover_color,
  InternalClick,
  internalclicked,
  visibleclicked,
  GeoVisible,
}) {
  return (
    <div className=" flex border-b-[1px] border-b-solid border-[#ffffff80]  w-full items-center justify-between !px-[24px] min-[710px]:hidden">
      <button
        onClick={PlanetClick}
        style={
          planetclicked
            ? {
                borderBottom: `4px solid ${hover_color}`,
              }
            : {}
        }
        className={`!py-[24px] cursor-pointer text-[9px] text-[#fff] font-[700] leading-[1.9px]`}
      >
        <p className=" opacity-[0.5] hover:opacity-[1]">OVERVIEW</p>
      </button>
      <button
        onClick={InternalClick}
        style={
          internalclicked
            ? {
                borderBottom: `4px solid ${hover_color}`,
              }
            : {}
        }
        className="!py-[24px] cursor-pointer text-[9px] text-[#fff] font-[700] leading-[1.9px]"
      >
        <p className=" opacity-[0.5] hover:opacity-[1]">Structure</p>
      </button>
      <button
        style={
          visibleclicked
            ? {
                borderBottom: `4px solid ${hover_color}`,
              }
            : {}
        }
        onClick={GeoVisible}
        className="!py-[24px] cursor-pointer text-[9px] text-[#fff] font-[700] leading-[1.9px]"
      >
        <p className=" opacity-[0.5] hover:opacity-[1]">Surface</p>
      </button>
    </div>
  );
}

export default Button_top_box;
