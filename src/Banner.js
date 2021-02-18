import React from "react";
import Navbar from "./Navbar";

export default function Banner() {
  return (
    <section className="relative mx-auto">
      <div className="">
        <div className="banner"></div>
        <Navbar />
        <div className="banner-content flex justify-center items-center absolute">
          <p>test</p>
        </div>
      </div>
    </section>
  );
}
