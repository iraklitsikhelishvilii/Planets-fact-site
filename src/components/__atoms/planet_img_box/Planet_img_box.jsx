import React from "react";

function Planet_img_box({ className, planetimg, geologuvisible, geology_img }) {
  return (
    <div className=" relative  h-[550px] w-[490px] flex justify-center items-center max-[860px]:w-[300px] max-[860px]:h-[auto] max-[710px]:w-[200px]">
      <img className={className} src={planetimg} alt="" />
      {geologuvisible && (
        <img
          className=" w-[160px] h-[190px] absolute top-[320px] max-[860px]:top-[200px] max-[710px]:w-[110px] max-[710px]:h-[130px] max-[710px]:top-[130px]"
          src={geology_img}
          alt=""
        />
      )}
    </div>
  );
}

export default Planet_img_box;
