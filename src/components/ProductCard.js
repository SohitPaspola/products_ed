import "./ProductCard.css";

const ProductCard = ({ item }) => {
  const { product_id, name, stock, selling_price } = item;
  return (
    <div className="product_card" key={product_id}>
      <div className="product_head">
        <h2>{name}</h2>
      </div>
      <div className="product_info">
        <p className="product_sp">
          <strong>Price: </strong>₹ {selling_price}
        </p>
        <p className="product_stock">
          <strong>Stock: </strong>
          {stock}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
