import React from "react";
import Data from "../../../Data.json";
import Burger_menu_btn from "../../__molecules/burger_menu_btn/Burger_menu_btn";
function Burger_menu({
  burgermenu,
  getPlanetImage,
  navigation,
  setburgermenu,
  arrow_img,
}) {
  return (
    <div
      className={` transition-all duration-[0.7s] ease z-2 left-0 top-[71px] absolute w-[100%] bg-[#070724] min-[710px]:hidden ${
        burgermenu ? "h-[950px]" : "h-[0px]"
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
            <Burger_menu_btn
              navigation={navigation}
              planet={planet}
              setburgermenu={setburgermenu}
              key={key}
              planetImg={planetImg}
              arrow_img={arrow_img}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Burger_menu;
