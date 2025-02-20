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
import Burger_menu from "../burger_menu/Burger_menu";
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
    <header className=" !py-[10px] flex items-center justify-between  !px-[32px] w-full  border-b-[1px] border-solid border-[#ffffff80] max-[860px]:flex-col max-[860px]:gap-[39px] max-[860px]:!py-[27px] max-[860px]:!px-[51px] max-[710px]:!py-[14px] max-[710px]:!px-[24px]  max-[710px]:justify-between  max-[710px]:flex-row ">
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
            <p className="font_family_spartan !duration-[0.4s] ease-in-out opacity-[0.5] hover:opacity-[1]">
              {planet.name}
            </p>
          </button>
        ))}
      </div>
      <Burger_menu
        burgermenu={burgermenu}
        getPlanetImage={getPlanetImage}
        navigation={navigation}
        setburgermenu={setburgermenu}
        arrow_img={arrow_img}
      />
    </header>
  );
}

export default Header;
