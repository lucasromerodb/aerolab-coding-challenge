import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { sortArrBy } from "../../utils";

import { historyCallRequest, selectHistory } from "../../ducks/historyDuck";
import ProductAlt from "../../components/product-alt";
import { selectRedeemMsg } from "../../ducks/productsDuck";
import { selectUser } from "../../ducks/userDuck";

function History({ history, redeemMsg, user, onGetHistory }) {
  useEffect(() => {
    onGetHistory();
  }, [onGetHistory, redeemMsg]);
  return (
    <section>
      {history.length && user.name.length
        ? history.map((p, i) => <ProductAlt key={p.createDate} {...p} index={i} />)
        : "No hay compras aún..."}
    </section>
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
