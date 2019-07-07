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
import Product from "../../components/product";
import { selectUserPoints, selectUserRedeemHistory, selectUser } from "../../ducks/userDuck";

import { sliceArr, pageNumbers } from "../../utils";
import Featured from "../../components/featured";
import { Button, ButtonGroup } from "../../styles/Button";
import { List, ProductsList, Filters } from "./Styles";

const sortItems = [
  { by: "time", text: "Most recent" },
  { by: "asc", text: "Lowest price" },
  { by: "desc", text: "Highest price" }
];

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
  const [sort, setSort] = useState("time");
  const pages = pageNumbers(products, productsPerPage);

  function onSort(e) {
    const id = e.target.id;
    onSortProducts(id);
    setSort(id);
  }

  useEffect(() => {
    onRequestProducts();
  }, [sortBy, onRequestProducts]);

  useEffect(() => {
    const sliced = sliceArr(products, currentPage, productsPerPage);
    setProds(sliced);
  }, [products, currentPage, productsPerPage]);

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
          <Filters>
            <div>
              <span>Sort by</span>
              <ButtonGroup>
                {sortItems.map(i => (
                  <Button
                    small
                    key={i.by}
                    id={i.by}
                    primary={sort === i.by}
                    disabled={sort === i.by}
                    onClick={e => onSort(e)}
                  >
                    {i.text}
                  </Button>
                ))}
              </ButtonGroup>
            </div>
            <div>
              <span>Page</span>
              <ButtonGroup>
                {pages.length > 1
                  ? pages.map(i => {
                      const page = i + 1;
                      return (
                        <Button
                          small={true}
                          key={`page_${page}`}
                          disabled={page === currentPage}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </Button>
                      );
                    })
                  : ""}
              </ButtonGroup>
            </div>
          </Filters>
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
