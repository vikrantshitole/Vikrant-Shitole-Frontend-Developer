import React, { useEffect, useState } from "react";
import rocket from "../../assets/rocketmoon.jpg";
import spacex from "../../assets/SPACEX.jpg";
import whatsspacex from "../../assets/rocketlaunch.jpg";
import "./Dashboard.css";
import CarouselItem from "./CarouselItem/CarouselItem";
let timeinterval;
function Dashboard() {
  const [carouselData] = useState([
    {
      id: 0,
      img: spacex,
    },
    {
      id: 1,
      img: rocket,
    },
    {
      id: 2,
      img: whatsspacex,
    },
  ]);
  useEffect(() => {
    timeinterval = setInterval(() => changeActiveSlide(), 10000);
    return () => {
      clearInterval(timeinterval);
    };
  }, []);
  const [activeslide, setActiveSlide] = useState(0);
  const changeActiveSlide = (direction) => {
    let active = activeslide;
    if (direction === "prev") {
      if (activeslide === 0) {
        active = carouselData.length - 1;
      } else {
        active = active - 1;
      }
    } else {
      if (activeslide === carouselData.length - 1) {
        active = 0;
      } else {
        active = active + 1;
      }
    }
    setActiveSlide(active);
  };
  return (
    <div className="carousel slide carousel-fade">
      <ol className="carousel-indicators" aria-label="carousel-indicators">
        {carouselData.map((s) => (
          <li
            data-slide-to={s.id}
            key={s.id}
            className={s.id === activeslide ? "active" : ""}
            aria-label="carousel-indicator"
          ></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {carouselData.map((s) => (
         <CarouselItem item={s} key={s.id} activeslide={activeslide} />
         ))}
      </div>
      <span
        className="carousel-control carousel-control-prev"
        role="button"
        data-slide="prev"
        aria-label="prev"
        onClick={() => changeActiveSlide("prev")}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </span>
      <span
        className="carousel-control carousel-control-next"
        role="button"
        data-slide="next"
        aria-label="next"
        onClick={() => changeActiveSlide("next")}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </span>
    </div>
  );
}
export default React.memo(Dashboard);
