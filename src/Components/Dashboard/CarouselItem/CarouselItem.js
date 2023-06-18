import React from "react";

export default function CarouselItem(props) {
  return (
    <div
      className={
        props.item.id === props.activeslide ? "carousel-item active" : "carousel-item"
      }
    >
      <img
        className="d-block w-100 fixed-height"
        src={props.item.img}
        alt={props.item.id + "slide"}
      />
    </div>
  );
}
