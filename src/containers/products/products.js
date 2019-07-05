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

import { sliceArr, pageNumbers } from "../../utils";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const pages = pageNumbers(products, productsPerPage);

  useEffect(() => {
    onRequestProducts();
  }, [sortBy, onRequestProducts]);

  useEffect(() => {
    const sliced = sliceArr(products, currentPage, productsPerPage);
    setProds(sliced);
  }, [products, currentPage, productsPerPage]);

  return (
    <section>
      <h1>Products List</h1>

      {pages.length > 1 &&
        pages.map(i => {
          const page = i + 1;
          return (
            <button
              key={`page_${page}`}
              disabled={page === currentPage}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          );
        })}
      {fetching ? (
        <button disabled>Fetching products...</button>
      ) : (
        <button onClick={onRequestProducts}>REQUEST PRODUCTS</button>
      )}
      <button onClick={() => onSortProducts("asc")}>Lowest price</button>
      <button onClick={() => onSortProducts("desc")}>Highest price</button>
      <button onClick={() => onSortProducts(null)}>Most recent</button>
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
