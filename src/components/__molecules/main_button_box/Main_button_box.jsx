import React from "react";
import Main_btn from "../../__atoms/main_btn/Main_btn";

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
      <Main_btn
        click={PlanetClick}
        index={index}
        hover_color={hover_color}
        num={1}
        MouseEnter={MouseEnter}
        MouseLeave={MouseLeave}
        classname={classname}
        num_p={"01"}
        heading={"OVERVIEW"}
      />
      <Main_btn
        click={InternalClick}
        index={index}
        hover_color={hover_color}
        num={2}
        MouseEnter={MouseEnter}
        MouseLeave={MouseLeave}
        classname={classname}
        num_p={"02"}
        heading={"Internal Structure"}
      />
      <Main_btn
        click={GeoVisible}
        index={index}
        hover_color={hover_color}
        num={3}
        MouseEnter={MouseEnter}
        MouseLeave={MouseLeave}
        classname={classname}
        num_p={"03"}
        heading={"Surface Geology"}
      />
    </div>
  );
}

export default Main_button_box;
