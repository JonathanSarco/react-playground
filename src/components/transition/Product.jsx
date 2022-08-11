import React from "react";
import "../../styles/global.css";

export default function ProductList({ products }) {
  if (!products) return <div>Empty...</div>;

  return (
    <ul>
      {products.map((p) => (
        <li className="list-item">{p}</li>
      ))}
    </ul>
  );
}
