import React from "react";
import img from "../images/yo.jpg";

export default function Image() {
  return (
    <>
      <img src={img} alt="Fere" className='profile-img'/>
    </>
  );
}