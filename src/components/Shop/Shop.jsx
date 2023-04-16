import React, { useEffect, useState } from "react";
import Summary from "./Summary/Summary";
import SingleProducts from "./Products/SingleProducts";

const Shop = () => {
  const [meals, setMeals] = useState([]);
  const [MealsArray, setMealsArray] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  const handleAddToStorage = (idMeal, strMealThumb, strMeal, strCategory) => {
    const previousMeals = JSON.parse(localStorage.getItem("meals"));
    const mealsArray = [];
    const mealsData = {
      id: idMeal,
      image_url: strMealThumb,
      title: strMeal,
      category: strCategory,
    };

    if (previousMeals) {
      const restOfMeals = previousMeals.find((mealId) => mealId.id === idMeal);

      if (restOfMeals) {
        console.log("already added");
      } else {
        console.log("add");
        mealsArray.push(...previousMeals, mealsData);
        localStorage.setItem("meals", JSON.stringify(mealsArray));
        setMealsArray(mealsArray);
      }
    } else {
      mealsArray.push(mealsData);
      localStorage.setItem("meals", JSON.stringify(mealsArray));
      setMealsArray(mealsArray);
    }
  };
  const handleRemoveFromStorage = (id) => {
    const previousItem = JSON.parse(localStorage.getItem("meals"));
    const restOfList = previousItem?.filter((mealId) => mealId.id !== id);
    localStorage.setItem("meals", JSON.stringify(restOfList));
    setMealsArray(restOfList);
  };

  const handleRemoveAll = () => {
    const storageData = localStorage.removeItem("meals");
    setMealsArray(storageData);
  };

  return (
    <div className="grid lg:grid-cols-3 gap-4 ">
      <div className="col-span-2 grid lg:grid-cols-3 gap-4">
        {meals?.map((meal) => (
          <SingleProducts
            key={meal.idMeal}
            handleAddToStorage={handleAddToStorage}
            meal={meal}
          ></SingleProducts>
        ))}
      </div>
      {/* <Products meals={meals}></Products> */}
      <Summary
        MealsArray={MealsArray}
        handleRemoveFromStorage={handleRemoveFromStorage}
        handleRemoveAll={handleRemoveAll}
      ></Summary>
    </div>
  );
};

export default Shop;
