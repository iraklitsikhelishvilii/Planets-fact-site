import React from "react";

function Burger_menu({ burgermenu }) {
  return (
    <>
      <div
        className={`absolute z-3 top-20 left-0 ${
          burgermenu
            ? "  w-[100%] h-[100%] bg-[#070724]"
            : "h-[0px] bg-[#070724]"
        } `}
      ></div>
    </>
  );
}

export default Burger_menu;
