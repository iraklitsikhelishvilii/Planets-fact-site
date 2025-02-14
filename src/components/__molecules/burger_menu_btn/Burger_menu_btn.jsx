import React from "react";

function Burger_menu_btn({
  navigation,
  planet,
  setburgermenu,
  index,
  planetImg,
  arrow_img,
}) {
  return (
    <button
      onClick={() => {
        navigation(`/planets/${planet.name}`, {
          state: planet,
        });
        setburgermenu(false);
      }}
      key={index}
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
}

export default Burger_menu_btn;
