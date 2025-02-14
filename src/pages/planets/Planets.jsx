import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
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
import Button_top_box from "../../components/__molecules/button_top_box/Button_top_box";
import Planet_img_box from "../../components/__atoms/planet_img_box/Planet_img_box";
import Content_box from "../../components/__molecules/content_box/Content_box";
import Main_button_box from "../../components/__molecules/main_button_box/Main_button_box";
import Info_box from "../../components/__molecules/info_box/Info_box";

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

  const [planetclicked, setplanetclicked] = useState(false);
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
    setplanetclicked(true);
    setinternalclicked(false);
    setvisibleclicked(false);
  };
  const [internalclicked, setinternalclicked] = useState();
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
    setplanetclicked(false);
    setinternalclicked(true);
    setvisibleclicked(false);
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
  const [visibleclicked, setvisibleclicked] = useState(false);
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
    setvisibleclicked(true);
    setinternalclicked(false);
    setplanetclicked(false);
  };
  return (
    <>
      <Button_top_box
        PlanetClick={PlanetClick}
        planetclicked={planetclicked}
        hover_color={hover_color}
        InternalClick={InternalClick}
        internalclicked={internalclicked}
        visibleclicked={visibleclicked}
        GeoVisible={GeoVisible}
      />
      <div className="!px-[10px] max-w-[1100px] w-[100%] h-[100vh] flex items-center justify-center flex-col max-[860px]:!px-[0px] max-[860px]:h-auto max-[860px]:!mt-[98px] max-[710px]:!mt-[64px]">
        <div className=" max-w-[1100px]  w-[100%]  flex items-center justify-between max-[860px]:flex-col">
          <Planet_img_box
            className={` max-[860px]:!ml-[0px] ${
              location.state.name === "Saturn" ? "" : "planet_img"
            }`}
            planetimg={planetimg}
            geologuvisible={geologuvisible}
            geology_img={geology_img}
          />

          <div className="max-[860px]:flex max-[860px]:justify-between max-[860px]:w-[100%] max-[860px]:!px-[40px] max-[860px]:!mt-[79px]  max-[710px]:justify-center max-[710px]:!mt-[65px] ">
            <Content_box
              h1={location.state.name}
              p_content={location.state.geology.content}
              link={location.state.overview.source}
              arrow_img={arrow_img}
            />
            <Main_button_box
              InternalClick={InternalClick}
              PlanetClick={PlanetClick}
              hover_color={hover_color}
              MouseEnter={MouseEnter}
              MouseLeave={MouseLeave}
              GeoVisible={GeoVisible}
              index={index}
              classname={
                "!duration-[0.6s] ease-in-out cursor-pointer gap-[28px]  flex items-center w-[350px] h-[48px] border-[1px] border-solid border-[#ffffff80]  max-[860px]:h-[40px]  max-[860px]:w-[280px] max-[860px]:gap-[17px] "
              }
            />
          </div>
        </div>
        <Info_box
          rotation={location.state.rotation}
          revolution={location.state.revolution}
          radius={location.state.radius}
          temp={location.state.temperature}
        />
      </div>
    </>
  );
}

export default Planets;
