import { Fugaz_One, Open_Sans } from "next/font/google";
import React from "react";
import Button from "./Button";
import Calendar from "./Calendar";

const opensans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
});
const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: "400",
});

function Hero() {
  return (
    <div className="py-10 md:py-10 flex flex-col gap-4 sm:gap-8">
      <h1
        className={`${fugaz.className} text-5xl sm:text-6xl md:text-7xl text-center`}
      >
        <span className="textGradient">Broodl</span> helps you track your{" "}
        <span className="textGradient">daily</span> mood!
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]">
        create your mood record and see how feel on{" "}
        <span className="font-semibold">every day of every year.</span>
      </p>
      <div className="grid grid-cols-2 gap-4 w-fit mx-auto">
        <Button text="Sign Up" />
        <Button text="Login" dark />
      </div>
      <Calendar />
    </div>
  );
}

export default Hero;
