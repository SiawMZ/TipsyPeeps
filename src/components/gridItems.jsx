import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function GridItems() {
  //const [description1, setDescription1] = useState(false);
  //const [description2, setDescription2] = useState(false);
  //const [description3, setDescription3] = useState(false);
  //const [description4, setDescription4] = useState(false);

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
          <Link to="community">
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
          </Link>
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
                className="grayscale card-body bg-cover bg-center h-[300px] rounded-lg hover:grayscale-0"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/2611814/pexels-photo-2611814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
              >
                {" "}
              </div>
            </a>
            {/* {description1 && <p className="absolute left-28 top-14">testing</p>} */}
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
                className="grayscale card-body bg-cover bg-center rounded-lg h-[300px] hover:grayscale-0"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
              ></div>
            </a>
            {/* {description2 && <p className="absolute left-28 top-14">testing</p>} */}
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
                className="grayscale card-body bg-cover bg-center h-[300px] hover:grayscale-0"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/1267287/pexels-photo-1267287.jpeg?auto=compress&cs=tinysrgb&w=600)",
                }}
              ></div>
            </a>
            {/* {description3 && <p className="absolute left-28 top-14">testing</p>} */}
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
                className="grayscale card-body bg-cover bg-center h-[300px] hover:grayscale-0"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/4691224/pexels-photo-4691224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
              ></div>
            </a>
            {/* {description4 && <p className="absolute left-28 top-14">testing</p>} */}
            <div className="static card-title text-3xl font-WorkSans justify-center">
              Bar Hopping
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
