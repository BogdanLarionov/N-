import React from "react";
import Button from "./Button";

export default function Vino({ id, winery, wine, rating, location, image }) {
  const container_style = {
    border: "1px solid black",
    borderRadius: "10px",
    padding: "10px",
    width: "200px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const img_style = {
    // higth: "100px",
    // width: "100px",
    maxWidth: "100%",
    objectFit: "cover",
  };

  return (
    <div style={container_style}>
      <p>ID: {id}</p>
      <p>Winery: {winery}</p>
      <p>Wine: {wine}</p>
      <p>
        Rating: {rating.average} {rating.reviews}
      </p>
      <p>Location: {location}</p>
      <img src={image} alt={`${winery} - ${wine}`} style={img_style} />
      <Button />
    </div>
  );
}
