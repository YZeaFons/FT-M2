import React from "react";
import styleCard from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ name, image, id }) {
  return (
    <div className={styleCard.container}>
      <h4>{name}</h4>
      <Link to={`/cruises/${id}`}>
        <img src={image} alt="" />
      </Link>
    </div>
  );
}
