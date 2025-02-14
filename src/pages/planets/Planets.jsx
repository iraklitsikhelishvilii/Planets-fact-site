import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import arrow_img from "../../assets/images/external-link-square-with-an-arrow-in-right-diagonal.svg";
import Venus_img from "../../assets/images/planet_venus.svg";
import Mercury_img from "../../assets/images/1.svg";
import Earth_img from "../../assets/images/Earth.svg";
import Mars_img from "../../assets/images/Mars.svg";
import Jupiter_img from "../../assets/images/Jupiter.svg";
import Saturn_img from "../../assets/images/Saturn.svg";
import Uranus_img from "../../assets/images/Uranus.svg";
import Neptune_img from "../../assets/images/Neptune.svg";
import Venus_internal from "../../assets/images/planet-venus-internal.svg";
import Mercury_internal from "../../assets/images/planet-mercury-internal.svg";
import Earth_internal from "../../assets/images/planet-earth-internal.svg";
import Mars_internal from "../../assets/images/planet-mars-internal.svg";
import Jupiter_internal from "../../assets/images/planet-jupiter-internal.svg";
import Saturn_internal from "../../assets/images/planet-saturn-internal.svg";
import Uranus_internal from "../../assets/images/planet-uranus-internal.svg";
import Neptune_internal from "../../assets/images/planet-neptune-internal.svg";
import Venus_geology from "../../assets/images/geology-venus.png";
import Mercury_geology from "../../assets/images/geology-mercury.png";
import Earth_geology from "../../assets/images/geology-earth.png";
import Mars_geology from "../../assets/images/geology-mars.png";
import Jupiter_geology from "../../assets/images/geology-jupiter.png";
import Saturn_geology from "../../assets/images/geology-saturn.png";
import Uranus_geology from "../../assets/images/geology-uranus.png";
import Neptune_geology from "../../assets/images/geology-neptune.png";

function Planets() {
  const location = useLocation();

  const [index, setindex] = useState(null);
  let hover_color;
  if (location.state.name === "Mercury") {
    hover_color = "#419EBB";
  } else if (location.state.name === "Venus") {
    hover_color = "#EDA249";
  } else if (location.state.name === "Earth") {
    hover_color = "#6D2ED5";
  } else if (location.state.name === "Mars") {
    hover_color = "#D14C32";
  } else if (location.state.name === "Jupiter") {
    hover_color = "#D83A34";
  } else if (location.state.name === "Saturn") {
    hover_color = "#CD5120";
  } else if (location.state.name === "Uranus") {
    hover_color = "#1EC1A2";
  } else if (location.state.name === "Neptune") {
    hover_color = "#2D68F0";
  }
  const MouseEnter = (index) => {
    setindex(index);
  };
  const MouseLeave = () => {
    setindex(null);
  };
  const [planetimg, setplanetimg] = useState();

  useEffect(() => {
    if (location.state.name === "Mercury") {
      setplanetimg(Mercury_img);
    } else if (location.state.name === "Venus") {
      setplanetimg(Venus_img);
    } else if (location.state.name === "Earth") {
      setplanetimg(Earth_img);
    } else if (location.state.name === "Mars") {
      setplanetimg(Mars_img);
    } else if (location.state.name === "Jupiter") {
      setplanetimg(Jupiter_img);
    } else if (location.state.name === "Saturn") {
      setplanetimg(Saturn_img);
    } else if (location.state.name === "Uranus") {
      setplanetimg(Uranus_img);
    } else if (location.state.name === "Neptune") {
      setplanetimg(Neptune_img);
    }
  }, [location.state.name]);
  const PlanetClick = () => {
    if (location.state.name === "Mercury") {
      setplanetimg(Mercury_img);
    } else if (location.state.name === "Venus") {
      setplanetimg(Venus_img);
    } else if (location.state.name === "Earth") {
      setplanetimg(Earth_img);
    } else if (location.state.name === "Mars") {
      setplanetimg(Mars_img);
    } else if (location.state.name === "Jupiter") {
      setplanetimg(Jupiter_img);
    } else if (location.state.name === "Saturn") {
      setplanetimg(Saturn_img);
    } else if (location.state.name === "Uranus") {
      setplanetimg(Uranus_img);
    } else if (location.state.name === "Neptune") {
      setplanetimg(Neptune_img);
    }
    setgeologyvisible(false);
  };
  const InternalClick = () => {
    if (location.state.name === "Mercury") {
      setplanetimg(Mercury_internal);
    } else if (location.state.name === "Venus") {
      setplanetimg(Venus_internal);
    } else if (location.state.name === "Earth") {
      setplanetimg(Earth_internal);
    } else if (location.state.name === "Mars") {
      setplanetimg(Mars_internal);
    } else if (location.state.name === "Jupiter") {
      setplanetimg(Jupiter_internal);
    } else if (location.state.name === "Saturn") {
      setplanetimg(Saturn_internal);
    } else if (location.state.name === "Uranus") {
      setplanetimg(Uranus_internal);
    } else if (location.state.name === "Neptune") {
      setplanetimg(Neptune_internal);
    }
    setgeologyvisible(false);
  };

  let geology_img;
  if (location.state.name === "Mercury") {
    geology_img = Mercury_geology;
  } else if (location.state.name === "Venus") {
    geology_img = Venus_geology;
  } else if (location.state.name === "Earth") {
    geology_img = Earth_geology;
  } else if (location.state.name === "Mars") {
    geology_img = Mars_geology;
  } else if (location.state.name === "Jupiter") {
    geology_img = Jupiter_geology;
  } else if (location.state.name === "Saturn") {
    geology_img = Saturn_geology;
  } else if (location.state.name === "Uranus") {
    geology_img = Uranus_geology;
  } else if (location.state.name === "Neptune") {
    geology_img = Neptune_geology;
  }

  const [geologuvisible, setgeologyvisible] = useState(false);
  const GeoVisible = () => {
    if (location.state.name === "Mercury") {
      setplanetimg(Mercury_img);
    } else if (location.state.name === "Venus") {
      setplanetimg(Venus_img);
    } else if (location.state.name === "Earth") {
      setplanetimg(Earth_img);
    } else if (location.state.name === "Mars") {
      setplanetimg(Mars_img);
    } else if (location.state.name === "Jupiter") {
      setplanetimg(Jupiter_img);
    } else if (location.state.name === "Saturn") {
      setplanetimg(Saturn_img);
    } else if (location.state.name === "Uranus") {
      setplanetimg(Uranus_img);
    } else if (location.state.name === "Neptune") {
      setplanetimg(Neptune_img);
    }
    setgeologyvisible(true);
  };
  return (
    <>
      <div className=" flex border-b-[1px] border-b-solid border-[#ffffff80] !py-[24px] w-full items-center justify-between !px-[24px] min-[710px]:hidden">
        <button
          onClick={PlanetClick}
          style={{
            backgroundColor: index === 1 ? hover_color : "",
          }}
          onMouseEnter={() => MouseEnter(1)}
          onMouseLeave={MouseLeave}
          className="  cursor-pointer text-[9px] text-[#fff] font-[700] leading-[1.9px]"
        >
          <p className=" opacity-[0.5] hover:opacity-[1]">OVERVIEW</p>
        </button>
        <button
          style={{
            backgroundColor: index === 2 ? hover_color : "",
          }}
          onMouseEnter={() => MouseEnter(2)}
          onMouseLeave={MouseLeave}
          onClick={InternalClick}
          className="cursor-pointer text-[9px] text-[#fff] font-[700] leading-[1.9px]"
        >
          <p className=" opacity-[0.5] hover:opacity-[1]">Structure</p>
        </button>
        <button
          style={{
            backgroundColor: index === 3 ? hover_color : "",
          }}
          onMouseEnter={() => MouseEnter(3)}
          onMouseLeave={MouseLeave}
          onClick={GeoVisible}
          className="cursor-pointer text-[9px] text-[#fff] font-[700] leading-[1.9px]"
        >
          <p className=" opacity-[0.5] hover:opacity-[1]">Surface</p>
        </button>
      </div>
      <div className=" max-w-[1100px] w-[100%] h-[100vh] flex items-center justify-center flex-col max-[860px]:h-auto max-[860px]:!mt-[98px] max-[710px]:!mt-[64px]">
        <div className=" max-w-[1100px]  w-[100%]  flex items-center justify-between max-[860px]:flex-col">
          <div className="  h-[550px] w-[490px] flex justify-center items-center max-[860px]:w-[300px] max-[860px]:h-[auto] max-[710px]:w-[200px]">
            <img
              className={` max-[860px]:!ml-[0px] ${
                location.state.name === "Saturn" ? "" : "planet_img"
              }`}
              src={planetimg}
              alt=""
            />
            {geologuvisible && (
              <img
                className=" w-[160px] h-[190px] absolute  bottom-[250px] max-[710px]:w-[110px] max-[710px]:h-[130px] max-[710px]:bottom-[400px]"
                src={geology_img}
                alt=""
              />
            )}
          </div>
          <div className="max-[860px]:flex max-[860px]:justify-between max-[860px]:w-[100%] max-[860px]:!px-[40px] max-[860px]:!mt-[79px]  max-[710px]:justify-center max-[710px]:!mt-[65px] ">
            <div className=" flex flex-col  max-[710px]:items-center ">
              <h1 className="text-[80px] font-[400] text-[#fff] max-[860px]:text-[48px] max-[710px]:text-[40px]">
                {location.state.name}
              </h1>
              <p className="w-[350px] text-[14px] font-[400] leading-[25px] text-[#fff] !mt-[23px]  max-[860px]:text-[11px]  max-[860px]:leading-[22px]  max-[860px]:w-[335px] max-[710px]:text-center">
                {location.state.geology.content}
              </p>
              <div className=" flex gap-[8px] !mt-[23px] ">
                <p className=" text-[14px] font-[400] text-[#fff] opacity-[0.5]  max-[860px]:text-[12px] ">
                  Source :{" "}
                  <Link
                    to={location.state.overview.source}
                    className=" cursor-pointer font-[700]"
                  >
                    Wikipedia
                  </Link>
                </p>
                <img src={arrow_img} alt="" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center !mt-[39px] gap-[15px] max-[860px]:!mt-[56px] max-[710px]:hidden ">
              <button
                onClick={PlanetClick}
                style={{
                  backgroundColor: index === 1 ? hover_color : "",
                }}
                onMouseEnter={() => MouseEnter(1)}
                onMouseLeave={MouseLeave}
                className={`  cursor-pointer gap-[28px]  flex items-center w-[350px] h-[48px] border-[1px] border-solid border-[#fff]  max-[860px]:h-[40px]  max-[860px]:w-[280px] max-[860px]:gap-[17px] `}
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
                style={{
                  backgroundColor: index === 2 ? hover_color : "",
                }}
                onMouseEnter={() => MouseEnter(2)}
                onMouseLeave={MouseLeave}
                className={` cursor-pointer gap-[28px]  flex items-center  w-[350px] h-[48px] border-[1px] border-solid border-[#fff]  max-[860px]:h-[40px]  max-[860px]:w-[280px] max-[860px]:gap-[17px]`}
              >
                <p className="!ml-[28px] text-[12px] font-[700] text-[#fff] tracking-[2.5px] opacity-[0.5] max-[860px]:text-[9px] max-[860px]:!ml-[20px]">
                  02
                </p>{" "}
                <p className="text-[12px] font-[700] text-[#fff] tracking-[2.5px] max-[860px]:text-[9px] ">
                  Internal Structure
                </p>
              </button>
              <button
                onClick={GeoVisible}
                style={{
                  backgroundColor: index === 3 ? hover_color : "",
                }}
                onMouseEnter={() => MouseEnter(3)}
                onMouseLeave={MouseLeave}
                className={` cursor-pointer gap-[28px]  flex items-center  w-[350px] h-[48px] border-[1px] border-solid border-[#fff]  max-[860px]:h-[40px]  max-[860px]:w-[280px] max-[860px]:gap-[17px]`}
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
        <div className=" gap-[8px]  flex w-[100%] justify-between !mt-[80px] !mb-[10px] max-[860px]:!px-[40px] max-[860px]:!mt-[27px] max-[860px]:!mb-[27px] max-[710px]:flex-col max-[710px]:w-[100%] max-[710px]:!px-[24px]">
          <div className=" flex flex-col justify-center !pl-[23px] border-[1px] border-solid border-[#ffffff80] w-[255px] h-[128px] max-[860px]:w-[164px] max-[860px]:h-[88px]  max-[860px]:!pl-[15px] max-[710px]:w-[100%] max-[710px]:h-[48px] max-[710px]:flex-row max-[710px]:items-center max-[710px]:justify-between max-[710px]:!px-[24px]">
            <p className=" opacity-[0.5] text-[11px] font-[700] text-[#fff] tracking-[1px] max-[860px]:text-[8px] max-[860px]:leading-[16px] max-[860px]:tracking-[0.7px]">
              ROTATION TIME
            </p>
            <p className=" text-[36px] text-[#fff] font-[400] tracking-[-1.5px] max-[860px]:text-[24px]  max-[860px]:tracking-[-0.9px] max-[710px]:text-[20px]">
              {location.state.rotation}
            </p>
          </div>
          <div className=" flex flex-col justify-center !pl-[23px] border-[1px] border-solid border-[#ffffff80] w-[255px] h-[128px] max-[860px]:w-[164px] max-[860px]:h-[88px] max-[860px]:!pl-[15px] max-[710px]:w-[100%] max-[710px]:h-[48px] max-[710px]:flex-row max-[710px]:items-center max-[710px]:justify-between max-[710px]:!px-[24px]">
            <p className="  opacity-[0.5] text-[11px] font-[700] text-[#fff] tracking-[1px] max-[860px]:text-[8px] max-[860px]:leading-[16px] max-[860px]:tracking-[0.7px]">
              REVOLUTION TIME
            </p>
            <p className=" text-[36px] text-[#fff] font-[400] tracking-[-1.5px] max-[860px]:text-[24px]  max-[860px]:tracking-[-0.9px] max-[710px]:text-[20px]">
              {location.state.revolution}
            </p>
          </div>
          <div className=" flex flex-col justify-center !pl-[23px] border-[1px] border-solid border-[#ffffff80] w-[255px] h-[128px] max-[860px]:w-[164px] max-[860px]:h-[88px] max-[860px]:!pl-[15px] max-[710px]:w-[100%] max-[710px]:h-[48px] max-[710px]:flex-row max-[710px]:items-center max-[710px]:justify-between max-[710px]:!px-[24px]">
            <p className="  opacity-[0.5] text-[11px] font-[700] text-[#fff] tracking-[1px] max-[860px]:text-[8px] max-[860px]:leading-[16px] max-[860px]:tracking-[0.7px]">
              radius
            </p>
            <p className=" text-[36px] text-[#fff] font-[400] tracking-[-1.5px] max-[860px]:text-[24px]  max-[860px]:tracking-[-0.9px] max-[710px]:text-[20px]">
              {location.state.radius}
            </p>
          </div>
          <div className="flex flex-col justify-center !pl-[23px] border-[1px] border-solid border-[#ffffff80] w-[255px] h-[128px] max-[860px]:w-[164px] max-[860px]:h-[88px] max-[860px]:!pl-[15px] max-[710px]:w-[100%] max-[710px]:h-[48px] max-[710px]:flex-row max-[710px]:items-center max-[710px]:justify-between max-[710px]:!px-[24px]">
            <p className=" opacity-[0.5] text-[11px] font-[700] text-[#fff] tracking-[1px] max-[860px]:text-[8px] max-[860px]:leading-[16px] max-[860px]:tracking-[0.7px]">
              AVERAGE TEMP.
            </p>
            <p className=" text-[36px] text-[#fff] font-[400] tracking-[-1.5px] max-[860px]:text-[24px]  max-[860px]:tracking-[-0.9px] max-[710px]:text-[20px]">
              {location.state.temperature}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Planets;
