import React from "react";
import Navbar from "./Navbar";

export default function Banner() {
  return (
    <section className="relative mx-auto">
      <div className="">
        <div className="banner"></div>
        <div className="banner-content flex justify-center items-center absolute flex-col">
          <p className="text-7xl">Hi!</p>
          <p className="text-7xl">My name is Kevin, and I'm a developer.</p>
        </div>
      </div>
    </section>
  );
}
