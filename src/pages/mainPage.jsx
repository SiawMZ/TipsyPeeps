import { React, useState, useEffect } from "react";

import GridItems from "../components/gridItems";
import { PartnerList } from "../components/partnerList";
//import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Parallax, Background } from "react-parallax";

export default function MainPage() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate horizontal offset based on scroll position
  const offsetX = -scrollPosition;
  const offsetx2 = scrollPosition;

  return (
    <>
      <Parallax
        strength={500}
        bgImage="https://images.pexels.com/photos/339696/pexels-photo-339696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="bg-contain h-screen "
      >
        {/* title part */}
        {/* <div className=""> */}
        {/* <div
            className=" bg-center h-[600px] "
            style={{
              backgroundImage: "url()",
            }}
          ></div> */}
        <div className="">
          <h1
            className=" absolute top-48 left-72 text-9xl font-PTSerif italic"
            id="titleText1"
            style={{ transform: `translateX(${offsetX}px)` }}
          >
            Le Nez
          </h1>
          <h1
            className="absolute top-80 right-32 text-9xl font-PTSerif italic"
            id="titleText2"
            style={{ transform: `translateX(${offsetx2}px)` }}
          >
            du Vin
          </h1>
        </div>
        {/* </div> */}
      </Parallax>

      {/* platform */}
      <Parallax strength={600} className=" h-[1100px] ">
        <Background className="bg-black w-screen py-10 ">
          <div className="text-center font-WorkSans font-semibold text-5xl py-9">
            Stay Tipsy
          </div>

          <GridItems />
        </Background>
      </Parallax>

      {/* content */}

      <Parallax
        strength={500}
        blur={{ min: -7, max: 15 }}
        className=" bg-contain h-[780px] grayscale hover:grayscale-0 "
        bgImage="https://images.pexels.com/photos/2802904/pexels-photo-2802904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      >
        <div className=" top-32 mb-10 mt-20">
          <div className="text-center font-WorkSans font-semibold text-6xl ">
            Spirits of Life
          </div>
          <br />
          <section className="px-72 font-WorkSans text-center text-xl">
            <p className="leading-7">
              Spirits, distilled from grains, fruits, or botanicals, offer a
              diverse spectrum of flavors and experiences. From the smooth
              warmth of whisky to the aromatic complexity of gin, each spirit
              reflects the artistry of its distillation process and the
              character of its ingredients. Spirits have a versatility that
              lends itself to creative mixology, inspiring innovative cocktails
              and timeless classics alike.{" "}
            </p>
            <br />
          </section>
        </div>
      </Parallax>

      <Parallax strength={600} className="bg-black bg-contain h-[900px] ">
        <PartnerList />
      </Parallax>
    </>
  );
}
