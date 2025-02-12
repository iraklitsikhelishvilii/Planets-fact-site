import React from "react";
import arrow_img from "../../assets/images/external-link-square-with-an-arrow-in-right-diagonal.svg";
import planet_img from "../../assets/images/1.svg";
import { Link } from "react-router";
function Main() {
  return (
    <>
      <div className=" max-w-[1100px] w-[100%] h-[100vh] flex items-center justify-center flex-col">
        <div className=" max-w-[1100px]  w-[100%]  flex items-center justify-between">
          <img className="!ml-[170px] planet_img" src={planet_img} alt="" />
          <div>
            <h1 className="text-[80px] font-[400] text-[#fff]">mercury</h1>
            <p className=" text-[14px] font-[400] leading-[25px] text-[#fff] !mt-[23px]">
              Mercury is the smallest planet in the Solar <br /> System and the
              closest to the Sun. Its orbit <br /> around the Sun takes 87.97
              Earth days, the <br /> shortest of all the Sun's planets. Mercury
              is one <br /> of four terrestrial planets in the Solar System,{" "}
              <br /> and is a rocky body like Earth.
            </p>
            <div className=" flex gap-[8px] !mt-[23px] ">
              <p className=" text-[14px] font-[400] text-[#fff] opacity-[0.5] ">
                Source :{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/Mercury_(planet)"
                  className=" cursor-pointer font-[700]"
                >
                  Wikipedia
                </Link>
              </p>
              <img src={arrow_img} alt="" />
            </div>
            <div className="flex flex-col items-center justify-center !mt-[39px] gap-[15px]">
              <button className=" hover:bg-[#419EBB] cursor-pointer gap-[28px]  flex items-center w-[350px] h-[48px] border-[1px] border-solid border-[#fff]">
                <p className=" !ml-[28px] text-[12px] font-[700] text-[#fff] tracking-[2.5px] opacity-[0.5]">
                  01
                </p>
                <p className="text-[12px] font-[700] text-[#fff] tracking-[2.5px]">
                  OVERVIEW
                </p>
              </button>
              <button className=" hover:bg-[#419EBB] cursor-pointer gap-[28px]  flex items-center  w-[350px] h-[48px] border-[1px] border-solid border-[#fff]">
                <p className="!ml-[28px] text-[12px] font-[700] text-[#fff] tracking-[2.5px] opacity-[0.5]">
                  02
                </p>{" "}
                <p className="text-[12px] font-[700] text-[#fff] tracking-[2.5px] ">
                  Internal Structure
                </p>
              </button>
              <button className=" hover:bg-[#419EBB] cursor-pointer gap-[28px]  flex items-center w-[350px] h-[48px] border-[1px] border-solid border-[#fff]">
                <p className="!ml-[28px] text-[12px] font-[700] text-[#fff] tracking-[2.5px] opacity-[0.5]">
                  03
                </p>{" "}
                <p className="text-[12px] font-[700] text-[#fff] tracking-[2.5px] ">
                  Surface Geology
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-[100%] justify-between !mt-[80px] !mb-[10px]">
          <div className=" flex flex-col justify-center !pl-[23px] border-[1px] border-solid border-[#fff] w-[255px] h-[128px]">
            <p className=" text-[11px] font-[700] text-[#fff] tracking-[1px]">
              ROTATION TIME
            </p>
            <p className=" text-[40px] text-[#fff] font-[400] tracking-[-1.5px]">
              58.6 days
            </p>
          </div>
          <div className=" flex flex-col justify-center !pl-[23px] border-[1px] border-solid border-[#fff] w-[255px] h-[128px]">
            <p className=" text-[11px] font-[700] text-[#fff] tracking-[1px]">
              REVOLUTION TIME
            </p>
            <p className=" text-[40px] text-[#fff] font-[400] tracking-[-1.5px]">
              87.97 days
            </p>
          </div>
          <div className=" flex flex-col justify-center !pl-[23px] border-[1px] border-solid border-[#fff] w-[255px] h-[128px]">
            <p className=" text-[11px] font-[700] text-[#fff] tracking-[1px]">
              radius
            </p>
            <p className=" text-[40px] text-[#fff] font-[400] tracking-[-1.5px]">
              2,439.7 km
            </p>
          </div>
          <div className="flex flex-col justify-center !pl-[23px] border-[1px] border-solid border-[#fff] w-[255px] h-[128px]">
            <p className=" text-[11px] font-[700] text-[#fff] tracking-[1px]">
              AVERAGE TEMP.
            </p>
            <p className=" text-[40px] text-[#fff] font-[400] tracking-[-1.5px]">
              430°c
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
