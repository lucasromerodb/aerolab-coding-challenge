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
import Filters from "../../components/filters/Filters";
import Pagination from "../../components/pagination/Pagination";
import Featured from "../../components/featured";

import { sliceArr, pageNumbers } from "../../utils";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(16);
  const pages = pageNumbers(products, productsPerPage);

  useEffect(() => {
    onRequestProducts();
  }, [sortBy, onRequestProducts]);

  useEffect(() => {
    const sliced = sliceArr(products, currentPage, productsPerPage);
    setProds(sliced);
  }, [products, currentPage, productsPerPage, setProds]);

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
            <Filters onSortProducts={onSortProducts} />
            <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
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
            {currentPage * productsPerPage - productsPerPage + 1} - {currentPage * productsPerPage}{" "}
            of {products.length} products
            <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
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
