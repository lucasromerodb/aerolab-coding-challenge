import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  productsCallRequest,
  redeemCallRequest,
  selectFetching,
  selectProducts,
  selectRedeemMsg,
  selectError
} from "../../ducks/productsDuck";

// import { sortBy } from "../../utils";

import Product from "../../components/product";

function Products({ fetching, products, redeemMsg, error, onRequestProducts, onRequestRedeem }) {
  // function sortProductsByPrice(first = "low") {
  //   const sorted = sortBy(products, first);
  //   setProducts(sorted);
  // }

  // function sortProductsByRecent() {
  //   const sorted = sortBy(products, "high", "_id");
  //   setProducts(sorted);
  // }

  useEffect(() => {
    onRequestProducts();
    // getProducts(setProducts);
    // const timer = setTimeout(() => {
    //   setRedeemMsg("");
    // }, 3000);
    // return () => clearTimeout(timer);
  }, [onRequestProducts]);

  console.warn(products);
  return (
    <section>
      <h1>Products List</h1>
      {<span>{error}</span>}
      {fetching ? (
        <button disabled>Fetching products...</button>
      ) : (
        <button onClick={onRequestProducts}>REQUEST PRODUCTS</button>
      )}
      {/* <button onClick={() => sortProductsByPrice("low")}>Price LOW to high</button> */}
      {/* <button onClick={() => sortProductsByPrice("high")}>Price HIGH to low</button> */}
      {/* <button onClick={() => sortProductsByRecent()}>Recent</button> */}
      {/* <p>{redeemMsg}</p> */}
      <section>
        {products.length
          ? products.map(p => <Product key={p._id} {...p} onRequestRedeem={onRequestRedeem} />)
          : ""}
      </section>
    </section>
  );
}

const mapStateToProps = store => ({
  fetching: selectFetching(store),
  products: selectProducts(store),
  redeemMsg: selectRedeemMsg(store),
  error: selectError(store)
});

function mapDispatchToProps(dispatch) {
  return {
    onRequestProducts: () => dispatch(productsCallRequest()),
    onRequestRedeem: productId => dispatch(redeemCallRequest(productId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
