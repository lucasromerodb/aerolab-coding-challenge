import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  productsCallRequest,
  // setProductsAction,
  // setRedeemMsgAction,
  selectFetching,
  selectProducts,
  selectRedeemMsg,
  selectError
} from "../../ducks/productsDuck";

// import { getProducts, postRedeem } from "../../api";
// import { sortBy } from "../../utils";

import Product from "../../components/product";

function Products({
  fetching,
  products,
  redeemMsg,
  error,
  onRequestProducts
  // setProducts,
  // setRedeemMsg,
  // productsCallRequest
}) {
  // function redeemProduct(id) {
  //   postRedeem(setRedeemMsg, id);
  // }

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
          ? products.map(p => <Product key={p._id} {...p} /* redeemProduct={redeemProduct} */ />)
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
    onRequestProducts: () => dispatch(productsCallRequest())
    // setProducts: products => dispatch(setProductsAction(products)),
    // setRedeemMsg: msg => dispatch(setRedeemMsgAction(msg))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
