import React from "react";

function Top_btn(clickfunc, planetclicked, hover_color, content) {
  return (
    <button
      onClick={clickfunc ? clickfunc : undefined}
      style={
        planetclicked
          ? {
              borderBottom: `4px solid ${hover_color}`,
            }
          : {}
      }
      className={`!py-[24px] cursor-pointer text-[9px] text-[#fff] font-[700] leading-[1.9px]`}
    >
      <p className=" opacity-[0.5] hover:opacity-[1]">{content}</p>
    </button>
  );
}

export default Top_btn;
