import React from "react";
import Data from "../../Data.json";
import { useNavigate } from "react-router";
function Header() {
  const navigation = useNavigate();
  return (
    <header className=" !py-[10px] flex items-center justify-between  !pl-[32px] !pr-[32px] w-full  border-b-[1px] border-solid border-[#fff]">
      <button
        onClick={() => {
          window.location.reload();
        }}
        className=" cursor-pointer text-[#fff] text-[28px] font-[400] leading-[-1px]"
      >
        THE PLANETS
      </button>
      <div className=" flex gap-[33px]">
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
