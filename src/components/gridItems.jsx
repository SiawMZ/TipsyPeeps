import React, { useState } from "react";

export default function GridItems() {
  const [description1, setDescription1] = useState(false);
  const [description2, setDescription2] = useState(false);
  const [description3, setDescription3] = useState(false);
  const [description4, setDescription4] = useState(false);

  const handleClass1 = () => {
    window.location.href =
      "https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-creating-a-grid";
  };

  const handleClass2 = () => {
    window.location.href = "https://vinepair.com/spirits-101/";
  };

  const handleClass3 = () => {
    window.location.href =
      "https://www.freecodecamp.org/learn/front-end-development-libraries/";
  };

  const handleClass4 = () => {
    window.location.href =
      "https://www.freecodecamp.org/learn/front-end-development-libraries/";
  };

  return (
    <>
      {/* big grid */}
      <div className="grid grid-cols-4 grid-rows-5 gap-4 px-28 ">
        <div className="col-span-2 row-span-4 bg-base-100 image-full rounded-lg">
          <div className=" card flex ">
            <figure>
              <img
                src="https://images.pexels.com/photos/1993691/pexels-photo-1993691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="hover:opacity-45"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-3xl font-WorkSans justify-center">
                Community
              </h2>
              <p className="relative text-center">
                Tried something tasty or bad? Share your thought with us too!!
              </p>
            </div>
          </div>
        </div>

        {/* grid 1 */}
        <div className="row-span-2 col-start-3 rounded-lg bg-base-100 shadow-xl image-full relative">
          <div
            className="card flex"
            onMouseEnter={() => setDescription1(true)}
            onMouseLeave={() => setDescription1(false)}
          >
            <a
              href="https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-creating-a-grid"
              onClick={(e) => {
                e.preventDefault();
                handleClass1();
              }}
            >
              <div
                className=" card-body bg-cover bg-center h-[300px] rounded-lg hover:opacity-45"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/19401971/pexels-photo-19401971/free-photo-of-close-up-of-a-man-in-a-suit-stirring-his-cocktail.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
              >
                {" "}
              </div>
            </a>
            {description1 && <p className="absolute left-28 top-14">testing</p>}
            <div className=" static card-title text-3xl font-WorkSans justify-center ">
              Mixology
            </div>
          </div>
        </div>

        {/* grid 2 */}
        <div className="row-span-2 col-start-4 rounded-lg bg-base-100 shadow-xl image-full relative">
          <div
            onMouseEnter={() => setDescription2(true)}
            onMouseLeave={() => setDescription2(false)}
            className="card flex"
          >
            <a
              href="https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-creating-a-grid"
              onClick={(e) => {
                e.preventDefault();
                handleClass2();
              }}
            >
              <div
                className="card-body bg-cover bg-center rounded-lg h-[300px] hover:opacity-45"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/8090043/pexels-photo-8090043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
              ></div>
            </a>
            {description2 && <p className="absolute left-28 top-14">testing</p>}
            <div className="static card-title text-3xl font-WorkSans justify-center">
              Spirits Guide
            </div>
          </div>
        </div>

        {/* grid 3 */}
        <div className="row-span-2 col-start-3 row-start-3 rounded-lg bg-base-100 shadow-xl image-full relative">
          <div
            onMouseEnter={() => setDescription3(true)}
            onMouseLeave={() => setDescription3(false)}
            className="card flex"
          >
            <a
              href="https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-creating-a-grid"
              onClick={(e) => {
                e.preventDefault();
                handleClass3();
              }}
            >
              <div
                className="card-body bg-cover bg-center h-[300px] hover:opacity-45"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/13966548/pexels-photo-13966548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
              ></div>
            </a>
            {description3 && <p className="absolute left-28 top-14">testing</p>}
            <div className="static card-title text-3xl font-WorkSans justify-center">
              Craft Beers
            </div>
          </div>
        </div>

        {/* grid 4 */}
        <div className="row-span-2 col-start-4 row-start-3 rounded-lg bg-base-100 shadow-xl image-full relative">
          <div
            onMouseEnter={() => setDescription4(true)}
            onMouseLeave={() => setDescription4(false)}
            className="card flex"
          >
            <a
              href="https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-creating-a-grid"
              onClick={(e) => {
                e.preventDefault();
                handleClass4();
              }}
            >
              <div
                className="card-body bg-cover bg-center h-[300px] hover:opacity-45"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
              ></div>
            </a>
            {description4 && <p className="absolute left-28 top-14">testing</p>}
            <div className="static card-title text-3xl font-WorkSans justify-center">
              Bar Hopping
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
