import React from "react";

const SingleProducts = ({ meal, handleAddToStorage }) => {
  const { idMeal, strMeal, strMealThumb, strCategory, strTags } = meal;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src={strMealThumb}
          className="h-48 object-fill w-full "
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{strMeal}</h2>
        <h3>Category : {strCategory}</h3>
        <h3>Tags : #{strTags}</h3>
        <div className="card-actions justify-end">
          <button
            onClick={() =>
              handleAddToStorage(idMeal, strMealThumb, strMeal, strCategory)
            }
            className="btn btn-primary"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
