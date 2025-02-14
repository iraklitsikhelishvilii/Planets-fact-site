import React, { useState } from "react";
import arrow_img from "../../assets/images/external-link-square-with-an-arrow-in-right-diagonal.svg";
import planet_img from "../../assets/images/1.svg";
import Mercury_internal from "../../assets/images/planet-mercury-internal.svg";
import Mercury_geology from "../../assets/images/geology-mercury.png";
import { Link } from "react-router";
import Button_top_box from "../../components/__molecules/button_top_box/Button_top_box";
import Planet_img_box from "../../components/__atoms/planet_img_box/Planet_img_box";
import Content_box from "../../components/__molecules/content_box/Content_box";
import Main_button_box from "../../components/__molecules/main_button_box/Main_button_box";
import Info_box from "../../components/__molecules/info_box/Info_box";
function Main() {
  const [mercuryimg, setmercuryimg] = useState(planet_img);
  const [planetclicked, setplanetclicked] = useState(false);
  const PlanetClick = () => {
    setmercuryimg(planet_img);
    setvisible(false);
    setplanetclicked(true);
    setinternalcliked(false);
    setvisibleclicked(false);
  };
  const [internalclicked, setinternalcliked] = useState(false);
  const InternalClick = () => {
    setmercuryimg(Mercury_internal);
    setvisible(false);
    setinternalcliked(true);
    setplanetclicked(false);
    setvisibleclicked(false);
  };
  const [visibleclicked, setvisibleclicked] = useState(false);
  const [visible, setvisible] = useState(false);
  const SetVisible = () => {
    setmercuryimg(planet_img);
    setvisible(true);
    setvisibleclicked(true);
    setinternalcliked(false);
    setplanetclicked(false);
  };
  const element = ` Mercury is the smallest planet in the Solar System and the closest
      to the Sun. Its orbit around the Sun takes 87.97 Earth days, the
     shortest of all the Sun's planets. Mercury is one of four
      terrestrial planets in the Solar System, and is a rocky body like
      Earth.`;
  return (
    <>
      <Button_top_box
        PlanetClick={PlanetClick}
        planetclicked={planetclicked}
        hover_color={"#419EBB"}
        InternalClick={InternalClick}
        internalclicked={internalclicked}
        visibleclicked={visibleclicked}
        GeoVisible={SetVisible}
      />
      <div className=" max-w-[1100px] w-[100%] h-[100vh]  flex items-center justify-center flex-col max-[860px]:h-auto max-[860px]:!mt-[98px] max-[710px]:!mt-[74px]">
        <div className=" max-w-[1100px]  w-[100%]  flex items-center justify-between max-[860px]:flex-col">
          <Planet_img_box
            className={"max-[860px]:!ml-[0px] planet_img"}
            planetimg={mercuryimg}
            geologuvisible={visible}
            geology_img={Mercury_geology}
          />
          <div className="max-[860px]:flex max-[860px]:justify-between max-[860px]:w-[100%] max-[860px]:!px-[40px] max-[860px]:!mt-[79px] max-[710px]:justify-center ">
            <Content_box
              h1={"mercury"}
              p_content={element}
              link={"https://en.wikipedia.org/wiki/Mercury_(planet)"}
              arrow_img={arrow_img}
            />
            <Main_button_box
              InternalClick={InternalClick}
              PlanetClick={PlanetClick}
              hover_color={"#419EBB"}
              GeoVisible={visible}
              classname={
                " hover:bg-[#419EBB] cursor-pointer gap-[28px]  flex items-center w-[350px] h-[48px] border-[1px] border-solid border-[#ffffff80]  max-[860px]:h-[40px]  max-[860px]:w-[280px] max-[860px]:gap-[17px]"
              }
            />
          </div>
        </div>
        <Info_box
          rotation={"58.6 days"}
          revolution={"87.97 days"}
          radius={"2,439.7 km"}
          temp={"430°c"}
        />
      </div>
    </>
  );
}

export default Main;
