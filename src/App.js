import React from "react";

import productsData from "./vschoolProducts";
import ProductMapper from "./ProductMapper";

function App() {
  const productComponents = productsData.map((product) => (
    <ProductMapper
      key={product.id}
      name={product.name}
      price={product.price}
      description={product.description}
    />
  ));

  return <div>{productComponents}</div>;
}

export default App;
