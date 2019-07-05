import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import {
  productsCallRequest,
  redeemCallRequest,
  sortProducts,
  selectFetching,
  selectProducts,
  selectPosting,
  selectRedeemMsg,
  selectSortBy
} from "../../ducks/productsDuck";
import Product from "../../components/product";
import { selectUserPoints } from "../../ducks/userDuck";

import { sliceArr } from "../../utils";

function Products({
  fetching,
  posting,
  products,
  redeemMsg,
  sortBy,
  userPoints,
  onRequestProducts,
  onRequestRedeem,
  onSortProducts
}) {
  const [prods, setProds] = useState([]);
  const [productsPerPage] = useState(8);

  function onSelectPage(page) {
    // const page = e.target.id;
    const sliced = sliceArr(products, page, productsPerPage);
    console.warn("-sliced-", sliced.map(i => i.name));
    setProds(sliced);
  }

  useEffect(() => {
    onRequestProducts();
  }, [sortBy, onRequestProducts]);

  useEffect(() => {
    const sliced = sliceArr(products, 1, productsPerPage);
    setProds(sliced);
  }, [products, productsPerPage]);

  useEffect(() => {});

  console.warn("- PRODS -", prods);

  return (
    <section>
      <h1>Products List</h1>
      {Array.from(Array(Math.ceil(products.length / productsPerPage)).keys()).map(i => (
        <button key={"page_" + i + 1} onClick={() => onSelectPage(i + 1)}>
          {i + 1}
        </button>
      ))}
      {/* <button onClick={() => setCurrentPage(currentPage - 1)}>«</button> */}
      {/* <button onClick={() => setCurrentPage(currentPage + 1)}>»</button> */}
      {fetching ? (
        <button disabled>Fetching products...</button>
      ) : (
        <button onClick={onRequestProducts}>REQUEST PRODUCTS</button>
      )}
      <button onClick={() => onSortProducts("asc")}>Price LOW to high</button>
      <button onClick={() => onSortProducts("desc")}>Price HIGH to low</button>
      <button onClick={() => onSortProducts(null)}>Recent</button>
      <p>{redeemMsg}</p>
      <section>
        {prods.length
          ? prods.map(p => (
              <Product
                key={p._id}
                {...p}
                posting={posting}
                userPoints={userPoints}
                onRequestRedeem={onRequestRedeem}
              />
            ))
          : ""}
      </section>
    </section>
  );
}

const mapStateToProps = store => ({
  fetching: selectFetching(store),
  posting: selectPosting(store),
  products: selectProducts(store),
  redeemMsg: selectRedeemMsg(store),
  sortBy: selectSortBy(store),
  userPoints: selectUserPoints(store)
});

const mapDispatchToProps = dispatch => ({
  onRequestProducts: () => dispatch(productsCallRequest()),
  onRequestRedeem: productId => dispatch(redeemCallRequest(productId)),
  onSortProducts: direction => dispatch(sortProducts(direction))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
