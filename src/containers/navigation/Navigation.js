import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  userCallRequest,
  pointsCallRequest,
  selectUser,
  selectPointsMsg
} from "../../ducks/userDuck";
import { selectRedeemMsg } from "../../ducks/productsDuck";

import User from "../../components/user";
import Points from "../../components/points";

import { Header } from "./Styles";

function Navigation({ user, pointsMsg, redeemMsg, onGetUser, onAddPoints }) {
  const { _id, name, points } = user;

  useEffect(() => {
    onGetUser();
  }, [pointsMsg, redeemMsg, onGetUser]);

  return (
    <Header>
      <User name={name} />
      <Points points={points} />
      <h2>{_id}</h2>
      <button onClick={() => onAddPoints(1000)}>Buy 1000 Points</button>
      <button onClick={() => onAddPoints(5000)}>Buy 5000 Points</button>
      <button onClick={() => onAddPoints(7500)}>Buy 7500 Points</button>
      <p>{pointsMsg}</p>
    </Header>
  );
}

const mapStateToProps = store => ({
  user: selectUser(store),
  pointsMsg: selectPointsMsg(store),
  redeemMsg: selectRedeemMsg(store)
});

const mapDispatchToProps = dispatch => ({
  onGetUser: () => dispatch(userCallRequest()),
  onAddPoints: amount => dispatch(pointsCallRequest(amount))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
