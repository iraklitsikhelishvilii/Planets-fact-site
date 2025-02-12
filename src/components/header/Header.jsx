import React from "react";
import Data from "../../Data.json";
import { useNavigate } from "react-router";
function Header() {
  const navigation = useNavigate();
  return (
    <header className=" !py-[10px] flex items-center justify-between  !px-[32px] w-full  border-b-[1px] border-solid border-[#fff] max-[860px]:flex-col max-[860px]:gap-[39px] max-[860px]:!py-[27px] max-[860px]:!px-[51px] ">
      <button
        onClick={() => {
          window.location.reload();
        }}
        className=" cursor-pointer text-[#fff] text-[28px] font-[400] leading-[-1px]"
      >
        THE PLANETS
      </button>
      <div className=" flex gap-[33px] max-[860px]:w-[100%] max-[860px]:justify-between">
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
    </header>
  );
}

export default Header;
