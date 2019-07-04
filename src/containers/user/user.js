import React, { useEffect } from "react";
import { connect } from "react-redux";

import { postPoints } from "../../api";
import { userCallRequest, selectUser } from "../../ducks/userDuck";
import { selectRedeemMsg } from "../../ducks/productsDuck";

import Points from "../../components/points/";

function User({ user, onUserCallRequest, redeemMsg }) {
  const { _id, name, points, pointsMsg } = user;

  // function addPoints(amount) {
  //   postPoints(setPointsMsg, amount);
  // }

  useEffect(() => {
    onUserCallRequest();
    // const timer = setTimeout(() => {
    //   setPointsMsg("");
    // }, 3000);
    // return () => clearTimeout(timer);
  }, [onUserCallRequest, redeemMsg]);
  console.warn("-- user --", user);

  return (
    <section>
      <h1>
        {name} <Points points={points} />
      </h1>
      <h2>{_id}</h2>
      {/* <button onClick={() => addPoints(1000)}>Buy 1000 Points</button>
      <button onClick={() => addPoints(5000)}>Buy 5000 Points</button>
      <button onClick={() => addPoints(7500)}>Buy 7500 Points</button> */}
      <p>{pointsMsg}</p>
    </section>
  );
}

const mapStateToProps = store => ({
  user: selectUser(store),
  redeemMsg: selectRedeemMsg(store)
});

function mapDispatchToProps(dispatch) {
  return {
    onUserCallRequest: () => dispatch(userCallRequest())
    // setUser: user => dispatch(setUserAction(user)),
    // setPointsMsg: msg => dispatch(setPointsMsgAction(msg))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
