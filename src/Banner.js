import React from "react";

export default function Banner() {
  return (
    <section className="relative mx-auto">
      <div className="">
        <div className="banner"></div>
        <div className="banner-content flex justify-center items-center absolute flex-col">
          <p className="text-3xl lg:text-7xl hero-text">Hi!</p>
          <p className="text-3xl lg:text-7xl hero-text">
            My name is Kevin, and I'm a developer.
          </p>
        </div>
      </div>
    </section>
  );
}
