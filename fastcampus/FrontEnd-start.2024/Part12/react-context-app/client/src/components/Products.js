import React from "react";

const Products = ({ name, imagePath }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:4000/${imagePath}`}
        alt={`${name} product`}
      />
      <form>
        <label>{name}</label>
        <input type="number" name="quantity" defaultValue={0} min={0} />
      </form>
    </div>
  );
};

export default Products;
