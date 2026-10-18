import "./App.css";
import ProductList from "./components/ProductList";
import Search from "./components/Search";
import { useState } from "react";
import SortProducts from "./components/SortProducts";
import AddProduct from "./components/AddProduct";
import { products } from "./data/products";

function App() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [productList, setProductList] = useState(products);
  const [showForm, setShowForm] = useState(false);

  function addProduct(newProduct) {
    setProductList((prevProducts) => [newProduct, ...prevProducts]);
  }

  return (
    <div>
      <h1>Магазин компьютерных комплектующих</h1>
      <button
        className="toggle-form__button"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Отмена" : "Добавить товар"}
      </button>

      {showForm && (
        <div className="form-animation">
          <AddProduct addProduct={addProduct} setShowForm={setShowForm} />
        </div>
      )}
      <div className="shop__controls">
        <Search search={search} setSearch={setSearch} />
        <SortProducts sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <ProductList search={search} sortBy={sortBy} products={productList} />
    </div>
  );
}

export default App;
