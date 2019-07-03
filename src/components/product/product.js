import React from "react";
import { connect } from "react-redux";
import { postRedeem } from "../../api";
import { setRedeemMsgAction } from "../../ducks/products";

function Product({ _id, name, cost, category, img, setRedeemMsg }) {
  function redeemProduct() {
    postRedeem(setRedeemMsg, _id);
  }

  return (
    <section>
      <img src={img.url} alt={name} />
      <h1>{name}</h1>
      <small>{_id}</small>
      <h2>$ {cost}</h2>
      <h3>{category}</h3>
      <button onClick={redeemProduct}>Redeem</button>
    </section>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    setRedeemMsg: msg => dispatch(setRedeemMsgAction(msg))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Product);
