import React, { useEffect } from "react";
import { connect } from "react-redux";

import { historyCallRequest, selectHistory } from "../../ducks/historyDuck";
import ProductAlt from "../../components/product-alt";
import { selectRedeemMsg } from "../../ducks/productsDuck";

function History({ history, redeemMsg, onGetHistory }) {
  useEffect(() => {
    onGetHistory();
  }, [onGetHistory, redeemMsg]);

  return (
    <section>
      <h1>Products History</h1>
      {history.length
        ? history.map(p => <ProductAlt key={p.createDate} {...p} />)
        : "No hay compras aún..."}
    </section>
  );
}

const mapStateToProps = store => ({
  history: selectHistory(store),
  redeemMsg: selectRedeemMsg(store)
});

const mapDispatchToProps = dispatch => ({
  onGetHistory: () => dispatch(historyCallRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
