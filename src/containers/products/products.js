import React, { useState, useRef, useEffect } from "react";
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
  selectRedeemId,
  resetRedeemMsg
} from "../../ducks/productsDuck";
import { selectUserPoints, selectUserRedeemHistory, selectUser } from "../../ducks/userDuck";

import Product from "../../components/product";
import Filters from "../../components/filters/Filters";
import Pagination from "../../components/pagination/Pagination";
import Featured from "../../components/featured";

import { sliceArr, pageNumbers } from "../../utils";
import { Toolbar } from "../../styles/Toolbar";
import { List, ProductsList } from "./Styles";
import Alert from "../../components/alert";

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
  onSortProducts,
  onResetRedeemMsg
}) {
  const [prods, setProds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(16);
  const pages = pageNumbers(products, productsPerPage);
  let productsRef = useRef();

  const pageInfo = `${currentPage * productsPerPage - productsPerPage + 1} - ${currentPage *
    productsPerPage} of ${products.length} products`;

  function findItem() {
    const item = "5a0b35d7734d1d08bf7084c9"; // Nintendo Switch
    return products.find(i => i._id === item);
  }

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
        <>
          <Alert msg={redeemMsg} resetMsg={onResetRedeemMsg} />
          <Featured
            {...findItem()}
            posting={posting}
            userPoints={userPoints}
            onRequestRedeem={onRequestRedeem}
            redeemId={redeemId}
          />
        </>
      ) : (
        ""
      )}
      <div ref={productsRef}>
        {user.name.length && products.length ? (
          <List>
            <Toolbar>
              <Filters onSortProducts={onSortProducts} />
              <Pagination
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                currentRef={productsRef.current}
                pageInfo={pageInfo}
              />
            </Toolbar>
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
            <Toolbar single>
              <Pagination
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                currentRef={productsRef.current}
                pageInfo={pageInfo}
              />
            </Toolbar>
          </List>
        ) : (
          ""
        )}
      </div>
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
  onSortProducts: direction => dispatch(sortProducts(direction)),
  onResetRedeemMsg: () => dispatch(resetRedeemMsg())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
