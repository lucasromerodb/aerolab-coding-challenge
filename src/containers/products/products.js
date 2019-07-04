import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  productsCallRequest,
  redeemCallRequest,
  selectFetching,
  selectProducts,
  selectRedeemMsg
} from "../../ducks/productsDuck";

// import { sortBy } from "../../utils";

import Product from "../../components/product";

function Products({ fetching, products, redeemMsg, onRequestProducts, onRequestRedeem }) {
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
  }, [onRequestProducts]);

  console.warn(products);
  return (
    <section>
      <h1>Products List</h1>
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
  redeemMsg: selectRedeemMsg(store)
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
