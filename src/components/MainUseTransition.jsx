import React, { useState, useTransition } from "react";
import { generateProducts } from "./transition/MockData";
import ProductList from "./transition/Product";
import "../styles/global.css";

const mockProducts = generateProducts();

function filterProducts(filterTerm) {
  if (!filterTerm) {
    return mockProducts;
  }
  return mockProducts.filter((product) => product.includes(filterTerm));
}

export default function MainUseTransition() {
  const [isPending, startTransition] = useTransition();

  const [filterTerm, setFilterTerm] = useState("");

  const filteredProducts = filterProducts(filterTerm);

  function updateFilterHandler(event) {
    startTransition(() => {
      // Wrapped the function that modified the state in order to give it a lower priority to that specific function
      setFilterTerm(event.target.value);
    });

    // setFilterTerm(event.target.value);
  }

  return (
    <>
      <input type="text" onChange={updateFilterHandler} />
      <ProductList products={filteredProducts} />
    </>
  );
}
