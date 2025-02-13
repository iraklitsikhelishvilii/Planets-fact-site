import Data from "../../../Data.json";
import { useNavigate } from "react-router";
import burger_menu from "../../../assets/images/burgermenu.svg";
import React, { useState } from "react";
import Venus_img from "../../../assets/images/planet_venus.svg";
import Mercury_img from "../../../assets/images/1.svg";
import Earth_img from "../../../assets/images/Earth.svg";
import Mars_img from "../../../assets/images/Mars.svg";
import Jupiter_img from "../../../assets/images/Jupiter.svg";
import Saturn_img from "../../../assets/images/Saturn.svg";
import Uranus_img from "../../../assets/images/Uranus.svg";
import Neptune_img from "../../../assets/images/Neptune.svg";
import arrow_img from "../../../assets/images/Path3.svg";
function Header() {
  const navigation = useNavigate();

  const [burgermenu, setburgermenu] = useState(false);
  const BurgerMenu = () => {
    setburgermenu(!burgermenu);
  };

  const getPlanetImage = (planetName) => {
    if (planetName === "Mercury") return Mercury_img;
    if (planetName === "Venus") return Venus_img;
    if (planetName === "Earth") return Earth_img;
    if (planetName === "Mars") return Mars_img;
    if (planetName === "Jupiter") return Jupiter_img;
    if (planetName === "Saturn") return Saturn_img;
    if (planetName === "Uranus") return Uranus_img;
    if (planetName === "Neptune") return Neptune_img;
    return null;
  };

  return (
    <header className=" !py-[10px] flex items-center justify-between  !px-[32px] w-full  border-b-[1px] border-solid border-[#fff] max-[860px]:flex-col max-[860px]:gap-[39px] max-[860px]:!py-[27px] max-[860px]:!px-[51px] max-[710px]:!py-[14px] max-[710px]:!px-[24px]  max-[710px]:justify-between  max-[710px]:flex-row ">
      <button
        onClick={() => {
          window.location.reload();
        }}
        className=" cursor-pointer text-[#fff] text-[28px] font-[400] leading-[-1px]"
      >
        THE PLANETS
      </button>
      <img
        onClick={BurgerMenu}
        className=" cursor-pointer min-[710px]:hidden"
        src={burger_menu}
        alt=""
      />
      <div className=" flex gap-[33px] max-[860px]:w-[100%] max-[860px]:justify-between max-[710px]:hidden ">
        {Data.map((planet, key) => (
          <button
            onClick={() =>
              navigation(`/planets/${planet.name}`, {
                state: planet,
              })
            }
            key={key}
            className=" cursor-pointer text-[11px] font-[700] leading-[1px] text-[#fff]"
          >
            {planet.name}
          </button>
        ))}
      </div>
      <div
        className={` transition-all duration-[0.7s] ease z-2 left-0 top-[71px] absolute w-[100%] bg-[#070724] min-[710px]:hidden ${
          burgermenu ? "h-[100%]" : "h-[0px]"
        }`}
      >
        <div
          className={`delay-[1s] flex flex-col !pt-[44px] h-[100%] ${
            burgermenu ? "visible" : "hidden"
          }`}
        >
          {Data.map((planet, key) => {
            const planetImg = getPlanetImage(planet.name);
            return (
              <button
                onClick={() => {
                  navigation(`/planets/${planet.name}`, {
                    state: planet,
                  });
                  setburgermenu(false);
                }}
                key={key}
                className="  !mt-[20px] !px-[34px] flex items-center justify-between !py-[20px] border-b-solid border-b-[1px] border-b-[#fff] h-[44px] cursor-pointer text-[15px] font-[700] leading-[1.3px] text-[#fff]"
              >
                <div className=" gap-[25px] flex justify-center items-center">
                  {planetImg && (
                    <img
                      className="w-[20px] h-[20px]"
                      src={planetImg}
                      alt={planet.name}
                    />
                  )}
                  {planet.name}
                </div>
                <img src={arrow_img} alt="" />
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}

export default Header;
