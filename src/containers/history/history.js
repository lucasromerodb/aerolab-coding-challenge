import React, { useEffect } from "react";

import { connect } from "react-redux";

import { historyCallRequest, selectHistory } from "../../ducks/historyDuck";
import { selectRedeemMsg } from "../../ducks/productsDuck";
import { selectUser } from "../../ducks/userDuck";

import ProductAlt from "../../components/product-alt";
import { GoTop, HistoryList } from "./Styles";

function History({ history, redeemMsg, user, onGetHistory }) {
  useEffect(() => {
    onGetHistory();
  }, [onGetHistory, redeemMsg]);

  function scrollTop() {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    });
  }

  return (
    <HistoryList>
      {history.length && user.name.length
        ? history.map((p, i) => <ProductAlt key={p.createDate} {...p} index={i} />)
        : ""}
      {history.length && user.name.length ? (
        <GoTop small primary onClick={scrollTop}>
          Back to top
        </GoTop>
      ) : (
        ""
      )}
    </HistoryList>
  );
}

const mapStateToProps = store => ({
  history: selectHistory(store),
  user: selectUser(store),
  redeemMsg: selectRedeemMsg(store)
});

const mapDispatchToProps = dispatch => ({
  onGetHistory: () => dispatch(historyCallRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
