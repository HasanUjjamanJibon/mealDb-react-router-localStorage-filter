import React from "react";
import Baskets from "./Baskets";

const SingleBaskets = ({ basket }) => {
  const { image_url, title, category } = basket;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} className="w-full h-48 object-fill" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Category : {category}</p>
        
      </div>
    </div>
  );
};

export default SingleBaskets;
