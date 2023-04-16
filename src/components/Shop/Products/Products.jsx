import React from "react";
import SingleProducts from "./SingleProducts";

const Products = () => {
  return (
    <div className="col-span-2 grid lg:grid-cols-3 gap-4">
      <SingleProducts></SingleProducts>
      <SingleProducts></SingleProducts>
      <SingleProducts></SingleProducts>
      <SingleProducts></SingleProducts>
      <SingleProducts></SingleProducts>
      <SingleProducts></SingleProducts>
      <SingleProducts></SingleProducts>
      <SingleProducts></SingleProducts>
      <SingleProducts></SingleProducts>
    </div>
  );
};

export default Products;
