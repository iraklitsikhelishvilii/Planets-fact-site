import React, { useState } from "react";
import arrow_img from "../../assets/images/external-link-square-with-an-arrow-in-right-diagonal.svg";
import planet_img from "../../assets/images/1.svg";
import Mercury_internal from "../../assets/images/planet-mercury-internal.svg";
import Mercury_geology from "../../assets/images/geology-mercury.png";
import { Link } from "react-router";
function Main() {
  const [mercuryimg, setmercuryimg] = useState(planet_img);
  const PlanetClick = () => {
    setmercuryimg(planet_img);
    setvisible(false);
  };
  const InternalClick = () => {
    setmercuryimg(Mercury_internal);
    setvisible(false);
  };
  const [visible, setvisible] = useState(false);
  const SetVisible = () => {
    setmercuryimg(planet_img);
    setvisible(true);
  };
  return (
    <>
      <div className=" flex border-b-[1px] border-b-solid border-b-[#fff] !py-[24px] w-full items-center justify-between !px-[24px] min-[710px]:hidden">
        <button
          onClick={PlanetClick}
          className=" hover:border-b-[#419EBB] cursor-pointer text-[9px] text-[#fff] font-[700] leading-[1.9px]"
        >
          OVERVIEW
        </button>
        <button
          onClick={InternalClick}
          className="cursor-pointer text-[9px] text-[#fff] font-[700] leading-[1.9px]"
        >
          Structure
        </button>
        <button
          onClick={SetVisible}
          className="cursor-pointer text-[9px] text-[#fff] font-[700] leading-[1.9px]"
        >
          Surface{" "}
        </button>
      </div>
      <div className=" max-w-[1100px] w-[100%]  flex items-center justify-center flex-col max-[860px]:h-auto max-[860px]:!mt-[98px] max-[710px]:!mt-[74px]">
        <div className=" max-w-[1100px]  w-[100%]  flex items-center justify-between max-[860px]:flex-col">
          <div className="  h-[550px] w-[490px] flex justify-center items-center max-[860px]:w-[300px] max-[860px]:h-[auto] max-[710px]:w-[200px]">
            <img
              className=" max-[860px]:!ml-[0px] planet_img"
              src={mercuryimg}
              alt=""
            />
            {visible && (
              <img
                className=" w-[160px] h-[190px] absolute  bottom-[250px] max-[710px]:w-[110px] max-[710px]:h-[130px] max-[710px]:bottom-[400px]"
                src={Mercury_geology}
                alt=""
              />
            )}
          </div>
          <div className="max-[860px]:flex max-[860px]:justify-between max-[860px]:w-[100%] max-[860px]:!px-[40px] max-[860px]:!mt-[79px] max-[710px]:justify-center ">
            <div className=" flex flex-col max-[710px]:justify-center max-[710px]:items-center ">
              <h1 className="text-[80px] font-[400] text-[#fff] max-[860px]:text-[48px]">
                mercury
              </h1>
              <p className=" text-[14px] font-[400] leading-[25px] text-[#fff] !mt-[23px]  max-[860px]:text-[11px]  max-[860px]:leading-[22px] max-[710px]:text-center">
                Mercury is the smallest planet in the Solar <br /> System and
                the closest to the Sun. Its orbit <br /> around the Sun takes
                87.97 Earth days, the <br /> shortest of all the Sun's planets.
                Mercury is one <br /> of four terrestrial planets in the Solar
                System, <br /> and is a rocky body like Earth.
              </p>
              <div className=" flex gap-[8px] !mt-[23px] ">
                <p className=" text-[14px] font-[400] text-[#fff] opacity-[0.5]  max-[860px]:text-[12px] ">
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
            </div>
            <div className="flex flex-col items-center justify-center !mt-[39px] gap-[15px] max-[860px]:!mt-[56px] max-[710px]:hidden">
              <button
                onClick={PlanetClick}
                className=" hover:bg-[#419EBB] cursor-pointer gap-[28px]  flex items-center w-[350px] h-[48px] border-[1px] border-solid border-[#fff]  max-[860px]:h-[40px]  max-[860px]:w-[280px] max-[860px]:gap-[17px] "
              >
                <p className=" !ml-[28px] text-[12px] font-[700] text-[#fff] tracking-[2.5px] opacity-[0.5]  max-[860px]:text-[9px]  max-[860px]:!ml-[20px]">
                  01
                </p>
                <p className="text-[12px] font-[700] text-[#fff] tracking-[2.5px] max-[860px]:text-[9px]">
                  OVERVIEW
                </p>
              </button>
              <button
                onClick={InternalClick}
                className=" hover:bg-[#419EBB] cursor-pointer gap-[28px]  flex items-center  w-[350px] h-[48px] border-[1px] border-solid border-[#fff]  max-[860px]:h-[40px]  max-[860px]:w-[280px] max-[860px]:gap-[17px]"
              >
                <p className="!ml-[28px] text-[12px] font-[700] text-[#fff] tracking-[2.5px] opacity-[0.5] max-[860px]:text-[9px] max-[860px]:!ml-[20px]">
                  02
                </p>{" "}
                <p className="text-[12px] font-[700] text-[#fff] tracking-[2.5px] max-[860px]:text-[9px] ">
                  Internal Structure
                </p>
              </button>
              <button
                onClick={SetVisible}
                className=" hover:bg-[#419EBB] cursor-pointer gap-[28px]  flex items-center w-[350px] h-[48px] border-[1px] border-solid border-[#fff]  max-[860px]:h-[40px]  max-[860px]:w-[280px] max-[860px]:gap-[17px]"
              >
                <p className="!ml-[28px] text-[12px] font-[700] text-[#fff] tracking-[2.5px] opacity-[0.5] max-[860px]:text-[9px] max-[860px]:!ml-[20px]">
                  03
                </p>{" "}
                <p className="text-[12px] font-[700] text-[#fff] tracking-[2.5px] max-[860px]:text-[9px] ">
                  Surface Geology
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className=" gap-[8px] flex w-[100%] justify-between !mt-[80px] !mb-[10px] max-[860px]:!px-[40px] max-[860px]:!mt-[27px] max-[860px]:!mb-[27px] max-[710px]:flex-col max-[710px]:w-[100%] max-[710px]:!px-[24px]">
          <div className="flex flex-col justify-center !pl-[23px] border-[1px] border-solid border-[#fff] w-[255px] h-[128px] max-[860px]:w-[164px] max-[860px]:h-[88px]  max-[860px]:!pl-[15px] max-[710px]:w-[100%] max-[710px]:h-[48px] max-[710px]:flex-row max-[710px]:items-center max-[710px]:justify-between max-[710px]:!px-[24px]">
            <p className=" text-[11px] font-[700] text-[#fff] tracking-[1px] max-[860px]:text-[8px] max-[860px]:leading-[16px] max-[860px]:tracking-[0.7px]">
              ROTATION TIME
            </p>
            <p className=" text-[36px] text-[#fff] font-[400] tracking-[-1.5px] max-[860px]:text-[24px]  max-[860px]:tracking-[-0.9px] max-[710px]:text-[20px]">
              58.6 days
            </p>
          </div>
          <div className=" flex flex-col justify-center !pl-[23px] border-[1px] border-solid border-[#fff] w-[255px] h-[128px] max-[860px]:w-[164px] max-[860px]:h-[88px]  max-[860px]:!pl-[15px] max-[710px]:w-[100%] max-[710px]:h-[48px] max-[710px]:flex-row max-[710px]:items-center max-[710px]:justify-between max-[710px]:!px-[24px]">
            <p className=" text-[11px] font-[700] text-[#fff] tracking-[1px] max-[860px]:text-[8px] max-[860px]:leading-[16px] max-[860px]:tracking-[0.7px]">
              REVOLUTION TIME
            </p>
            <p className=" text-[36px] text-[#fff] font-[400] tracking-[-1.5px] max-[860px]:text-[24px]  max-[860px]:tracking-[-0.9px] max-[710px]:text-[20px]">
              87.97 days
            </p>
          </div>
          <div className=" flex flex-col justify-center !pl-[23px] border-[1px] border-solid border-[#fff] w-[255px] h-[128px] max-[860px]:w-[164px] max-[860px]:h-[88px]  max-[860px]:!pl-[15px] max-[710px]:w-[100%] max-[710px]:h-[48px] max-[710px]:flex-row max-[710px]:items-center max-[710px]:justify-between max-[710px]:!px-[24px]">
            <p className=" text-[11px] font-[700] text-[#fff] tracking-[1px] max-[860px]:text-[8px] max-[860px]:leading-[16px] max-[860px]:tracking-[0.7px]">
              radius
            </p>
            <p className="text-[36px] text-[#fff] font-[400] tracking-[-1.5px] max-[860px]:text-[24px]  max-[860px]:tracking-[-0.9px] max-[710px]:text-[20px]">
              2,439.7 km
            </p>
          </div>
          <div className="flex flex-col justify-center !pl-[23px] border-[1px] border-solid border-[#fff] w-[255px] h-[128px] max-[860px]:w-[164px] max-[860px]:h-[88px]  max-[860px]:!pl-[15px] max-[710px]:w-[100%] max-[710px]:h-[48px] max-[710px]:flex-row max-[710px]:items-center max-[710px]:justify-between max-[710px]:!px-[24px]">
            <p className=" text-[11px] font-[700] text-[#fff] tracking-[1px] max-[860px]:text-[8px] max-[860px]:leading-[16px] max-[860px]:tracking-[0.7px]">
              AVERAGE TEMP.
            </p>
            <p className="text-[36px] text-[#fff] font-[400] tracking-[-1.5px] max-[860px]:text-[24px]  max-[860px]:tracking-[-0.9px] max-[710px]:text-[20px]">
              430°c
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
