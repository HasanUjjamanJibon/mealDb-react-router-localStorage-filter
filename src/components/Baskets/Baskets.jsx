import React, { useEffect, useState } from "react";
import SingleBaskets from "./SingleBaskets";

const Baskets = () => {
  const [baskets, setBaskets] = useState([]);
  useEffect(() => {
    const previousData = JSON.parse(localStorage.getItem("meals"));
    setBaskets(previousData);
  }, []);

  const handleFilter = (e) => {
    const previousData = JSON.parse(localStorage.getItem("meals"));
    if (e.target.value == "Beef" || e.target.value == "Dessert") {
      const selectedItems = previousData?.filter(
        (mealsId) => mealsId.category == e.target.value
      );
      setBaskets(selectedItems);
    } else {
      setBaskets(previousData);
    }
    // if (e.target.value == "Beef") {
    //   const selectedItems = previousData?.filter(
    //     (mealsId) => mealsId.category == e.target.value
    //   );
    //   setBaskets(selectedItems);

    // } else if (e.target.value == "Dessert") {
    //   const selectedItems = previousData?.filter(
    //     (mealsId) => mealsId.category == e.target.value
    //   );
    //   setBaskets(selectedItems);
    
    // } else {
    //   setBaskets(previousData);
    // }
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold py-10 bg-slate-50">
        Basskets : {baskets?.length || 0}
      </h1>
      <div>
        <select onChange={handleFilter} className="select w-full max-w-xs">
          <option>All</option>
          <option>Beef</option>
          <option>Dessert</option>
        </select>
      </div>
      <div className="grid lg:grid-cols-4 gap-4">
        {baskets?.map((basket) => (
          <SingleBaskets basket={basket}></SingleBaskets>
        ))}
      </div>
    </div>
  );
};

export default Baskets;
