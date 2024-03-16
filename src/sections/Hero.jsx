import React from "react";
import { Button, WatchCard } from "../components";
import { arrowRight } from "../assets/icons";
import { statistics, Watches } from "../constants";

import "./animation.css";
import { useState } from "react";
import { Watch1 } from "../assets/images";

const Hero = () => {
  const [heroWatchImage, setHeroWatchImage] = useState(Watch1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-[#FFBE98] text-xl font-montserrat">
          Our New collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px]  font-bold">
          <span className="xl:whitespace-nowrap relative  pr-10">Quality</span>
          <br />
          <span>Watches</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Echo</span>
        </h1>

        <Button label="Order now" iconURL={arrowRight} />
        <div
          className="flex
        
        justify-start flex-wrap items-start w-full mt-19  gap-16"
        >
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl max-sm:text-[2rem] font-palanquin font-bold">
                {stat.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40  bg-hero bg-cover bg-center h-64">
        <img
          src={heroWatchImage}
          alt="watch collection"
          width={610}
          height={500}
          className="object-contain relative "
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[1%] sm:left[-10%] max-sm:px-6">
          {Watches.map((images, index) => (
            <div key={index}>
              <WatchCard
                imgURL={images}
                changeHeroWatchImage={(watchCollection) =>
                  setHeroWatchImage(watchCollection)
                }
                heroWatchImage={heroWatchImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
