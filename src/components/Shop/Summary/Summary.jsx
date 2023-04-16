import React, { useEffect, useState } from "react";
import SingleRow from "./SingleRow";
import { Link } from "react-router-dom";

const Summary = ({ MealsArray, handleRemoveFromStorage, handleRemoveAll }) => {
  const [mealsArr, setMealsArr] = useState(MealsArray);

  useEffect(() => {
    const previousMealdata = JSON.parse(localStorage.getItem("meals"));
    setMealsArr(previousMealdata);
  }, [MealsArray]);

  let counter = 1;

  return (
    <div className="h-[200px] sticky top-0 w-full bg-slate-300">
      <h2>Cart Item : </h2>
      <div className="my-6">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full min-h-[200px]">
            {/* head */}
            <thead>
              <tr>
                <th>Sl.</th>
                <th>Image</th>
                <th>Titile</th>
                <th>remarks</th>
              </tr>
            </thead>
            <tbody>
              {mealsArr?.map((meal) => (
                <SingleRow
                  meal={meal}
                  handleRemoveFromStorage={handleRemoveFromStorage}
                  counter={counter++}
                ></SingleRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <Link to="/baskets" className="btn btn-success block w-full">
          View Basket
        </Link>
        <button onClick={handleRemoveAll} className="btn btn-error w-full">
          Clear Item
        </button>
      </div>
    </div>
  );
};

export default Summary;
