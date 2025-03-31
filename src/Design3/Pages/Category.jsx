import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/product.json";

const CategoryProducts = () => {
  const { categoryId } = useParams();
  console.log("Category ID:", categoryId);

  const filteredProducts = productsData.products.filter(
    (product) => product.categoryId === categoryId
  );

  if (filteredProducts.length === 0) {
    return <h2>No products found in this category.</h2>;
  }

  return (
    <div>
      <h1>Category: {categoryId}</h1>
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryProducts;
