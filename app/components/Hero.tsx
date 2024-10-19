import { Fugaz_One } from "next/font/google";
import React from "react";

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: "400",
});

function Hero() {
  return (
    <div className="py-10 sm:py-14 md:py-20">
      <h1
        className={`${fugaz.className} text-5xl sm:text-6xl md:text-7xl text-center`}
      >
        <span className="textGradient">Broodl</span> helps you track your{" "}
        <span className="textGradient">daily</span> mood!
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-center">
        create your mood record and see how feel on{" "}
        <span className="font-medium">every day of every year.</span>
      </p>
    </div>
  );
}

export default Hero;
