import { useState } from "react";

function AddProduct(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [manufacturer, setManufacturer] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!name || !description || !price || !year || !manufacturer) {
      alert("Заполните все поля");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      description,
      price,
      year,
      manufacturer,
    };
    props.addProduct(newProduct);

    props.setShowForm(false);

    setName("");
    setDescription("");
    setPrice("");
    setYear("");
    setManufacturer("");
  }

  return (
    <div className="add-product">
      <h3 className="add-product__title">Добавить товар</h3>
      <form className="add-product__form" onSubmit={handleSubmit}>
        <input
          className="add-product__input"
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          name="name"
          placeholder="Название товара"
        />
        <input
          className="add-product__input"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          name="description"
          placeholder="Описание товара"
        />
        <input
          className="add-product__input"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          type="number"
          name="price"
          placeholder="Цена товара"
        />
        <input
          className="add-product__input"
          value={year}
          onChange={(event) => setYear(event.target.value)}
          type="number"
          name="year"
          placeholder="Год выпуска товара"
        />
        <input
          className="add-product__input"
          value={manufacturer}
          onChange={(event) => setManufacturer(event.target.value)}
          type="text"
          name="manufacturer"
          placeholder="Производитель товара"
        />
        <button className="add-product__button" type="submit">
          Добавить
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
