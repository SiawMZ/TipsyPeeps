import React from "react";

export const PartnerList = () => {
  return (
    <>
      <div className=" top-32 mb-10 mt-10">
        <div className="text-center font-WorkSans font-semibold text-5xl ">
          Our Partner
        </div>
        <br />
        <section className="px-72 font-WorkSans font-medium text-center">
          <p className="leading-7">
            In collaboration with more than 100 restaurants and bar in Malaysia
            like...{" "}
          </p>
          <br />
        </section>
        <div className="mt-9 ml-10 grid grid-cols-4 gap-8 place-items-center">
          <img src="/bar logo/beer bank.jpg" className="w-24 h-24" />

          <img src="/bar logo/farmers bar.webp" className="w-24 h-24" />
          <img src="/bar logo/monster and beer.jpg" className="w-24 h-24" />
          <img src="/bar logo/eatdrinkkl.png" className="w-50 h-50" />
          <img src="/bar logo/wine at the peak.webp" className="w-50 h-50" />
          <img src="/bar logo/winekin.png" className="w-50 h-50" />
        </div>
      </div>
    </>
  );
};
