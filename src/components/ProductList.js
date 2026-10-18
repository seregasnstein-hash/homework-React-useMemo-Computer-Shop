import ProductItem from "./ProductItem.js";
import { useMemo } from "react";

function ProductList(props) {
  const filteredProducts = useMemo(() => {
    return props.products.filter((product) => {
      return product.name.toLowerCase().includes(props.search.toLowerCase());
    });
  }, [props.products, props.search]);

  const sortedProducts = useMemo(() => {
    const result = [...filteredProducts];

    if (props.sortBy === "asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (props.sortBy === "desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [filteredProducts, props.sortBy]);

  return (
    <div className="product__list">
      {sortedProducts.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductList;
