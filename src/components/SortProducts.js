function SortProducts(props) {
  return (
    <div className="sort">
      <select className="sort__select" value={props.sortBy} onChange={(event)=>props.setSortBy(event.target.value)}>
        <option value="default">Без сортировки</option>
        <option value="asc">Сначала дешевые</option>
        <option value="desc">Сначала дорогие</option>
      </select>
    </div>
  );
}

export default SortProducts;
