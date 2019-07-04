import React, { useEffect } from "react";
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
          ? products.map(p => (
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
