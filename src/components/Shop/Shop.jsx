import React from "react";
import Products from "./Products/Products";
import Summary from "./Summary/Summary";

const Shop = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-4 ">
      <Products></Products>
      <Summary></Summary>
    </div>
  );
};

export default Shop;
