import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Pagination from "./components/Pagination";

function App() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  useEffect(() => {
    setLoading(true);
    fetch("https://assessment.api.vweb.app/products")
      .then((res) => {
        if (!res.ok) {
          setLoading(false);
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  // console.log(currentProducts);

  const paginate = (pageNo) => {
    setCurrentPage(pageNo);
  };

  const totalChar = products?.length;
  const lastIndex = Math.floor(totalChar / 10) + 1;

  return (
    <div className="App">
      <nav>Products</nav>
      {loading ? (
        <div>Loading...</div>
      ) : !products ? (
        <h2>Sorry ,Currently no products</h2>
      ) : (
        <div className="product_cont">
          {currentProducts.map((item) => {
            return (
              <ProductCard item={item} key={item.product_id}></ProductCard>
            );
          })}
        </div>
      )}
      {!loading && (
        <Pagination
          currentPage={currentPage}
          paginate={paginate}
          currentListLength={currentProducts?.length}
          lastIndex={lastIndex}
        ></Pagination>
      )}
    </div>
  );
}

export default App;
