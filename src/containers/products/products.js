import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  setProductsAction,
  setRedeemMsgAction,
  selectProducts,
  selectRedeemMsg
} from "../../ducks/productsDuck";
import { getProducts, postRedeem } from "../../api";
import { sortBy } from "../../utils";

import Product from "../../components/product";

function Products({ products, setProducts, redeemMsg, setRedeemMsg }) {
  function redeemProduct(id) {
    postRedeem(setRedeemMsg, id);
  }

  function sortProductsByPrice(first = "low") {
    const sorted = sortBy(products, first);
    setProducts(sorted);
  }

  function sortProductsByRecent() {
    const sorted = sortBy(products, "high", "_id");
    setProducts(sorted);
  }

  useEffect(() => {
    getProducts(setProducts);
    const timer = setTimeout(() => {
      setRedeemMsg("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [setProducts, redeemMsg, setRedeemMsg]);

  return (
    <section>
      <h1>Products List</h1>
      <button onClick={() => sortProductsByPrice("low")}>Price LOW to high</button>
      <button onClick={() => sortProductsByPrice("high")}>Price HIGH to low</button>
      <button onClick={() => sortProductsByRecent()}>Recent</button>
      <p>{redeemMsg}</p>
      <section>
        {products.length
          ? products.map(p => <Product key={p._id} {...p} redeemProduct={redeemProduct} />)
          : ""}
      </section>
    </section>
  );
}

const mapStateToProps = store => ({
  products: selectProducts(store),
  redeemMsg: selectRedeemMsg(store)
});

function mapDispatchToProps(dispatch) {
  return {
    setProducts: products => dispatch(setProductsAction(products)),
    setRedeemMsg: msg => dispatch(setRedeemMsgAction(msg))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
