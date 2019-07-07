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
  selectSortBy,
  selectRedeemId
} from "../../ducks/productsDuck";
import { selectUserPoints, selectUserRedeemHistory, selectUser } from "../../ducks/userDuck";

import Product from "../../components/product";
import Pages from "../../components/filters/Filters";
import Pagination from "../../components/pagination/Pagination";
import Featured from "../../components/featured";

import { Toolbar } from "../../styles/Toolbar";
import { List, ProductsList } from "./Styles";

function Products({
  fetching,
  posting,
  products,
  redeemId,
  redeemMsg,
  sortBy,
  userPoints,
  userHistory,
  user,
  onRequestProducts,
  onRequestRedeem,
  onSortProducts
}) {
  const [prods, setProds] = useState([]);

  useEffect(() => {
    onRequestProducts();
  }, [sortBy, onRequestProducts]);

  return (
    <section>
      {user.name.length && products.length ? (
        <Featured
          {...products[1]}
          posting={posting}
          userPoints={userPoints}
          onRequestRedeem={onRequestRedeem}
          redeemId={redeemId}
        />
      ) : (
        ""
      )}
      {user.name.length ? (
        <List>
          <Toolbar>
            <Pages onSortProducts={onSortProducts} />
            <Pagination products={products} setProds={setProds} />
          </Toolbar>
          <p>{redeemMsg}</p>
          <ProductsList className="Products_list">
            {prods.length
              ? prods.map(p => {
                  const redeemedTimes = userHistory.filter(r => r.productId === p._id).length;
                  return (
                    <Product
                      key={p._id}
                      {...p}
                      posting={posting}
                      userPoints={userPoints}
                      onRequestRedeem={onRequestRedeem}
                      redeemId={redeemId}
                      redeemedTimes={redeemedTimes}
                    />
                  );
                })
              : ""}
          </ProductsList>
          <Toolbar>
            {prods.length} of {products.length} products
            <Pagination products={products} setProds={setProds} />
          </Toolbar>
        </List>
      ) : (
        ""
      )}
    </section>
  );
}

const mapStateToProps = store => ({
  fetching: selectFetching(store),
  posting: selectPosting(store),
  products: selectProducts(store),
  redeemId: selectRedeemId(store),
  redeemMsg: selectRedeemMsg(store),
  sortBy: selectSortBy(store),
  userPoints: selectUserPoints(store),
  userHistory: selectUserRedeemHistory(store),
  user: selectUser(store)
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
