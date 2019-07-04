import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  productsCallRequest,
  redeemCallRequest,
  sortProducts,
  selectFetching,
  selectProducts,
  selectRedeemMsg,
  selectSortBy
} from "../../ducks/productsDuck";

// import { sortBy } from "../../utils";

import Product from "../../components/product";

function Products({
  fetching,
  products,
  redeemMsg,
  sortBy,
  onRequestProducts,
  onRequestRedeem,
  onSortProducts
}) {
  useEffect(() => {
    onRequestProducts();
  }, [sortBy, onRequestProducts]);

  return (
    <section>
      <h1>Products List</h1>
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
  sortBy: selectSortBy(store)
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
