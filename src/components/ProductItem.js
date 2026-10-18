function ProductItem(props) {
  return (
    <div className="product__card">
      <h3>{props.product.name}</h3>
      <p>{props.product.description}</p>
      <p>Цена: {props.product.price} ₸</p>
      <p>Год производства: {props.product.year}</p>
      <p>Производитель: {props.product.manufacturer}</p>
    </div>
  );
}

export default ProductItem;
