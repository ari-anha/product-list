import React from "react";

function ProductMapper(props) {
  return (
    <div>
      <h1 style={{ color: "#FF1493" }}>{props.name}</h1>
      <h2 style={{ color: "#FF8C00" }}>£{props.price}</h2>
      <p>{props.description}</p>
      <hr />
    </div>
  );
}

export default ProductMapper;
