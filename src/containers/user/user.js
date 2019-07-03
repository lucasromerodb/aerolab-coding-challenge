import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getUserMe, postPoints } from "../../api";
import { setUserAction, setPointsMsgAction, selectUser } from "../../ducks/userDuck";

import Points from "../../components/points/";

function User({ user, setUser, setPointsMsg }) {
  const { _id, name, points, pointsMsg } = user;

  function addPoints(amount) {
    postPoints(setPointsMsg, amount);
  }

  useEffect(() => {
    getUserMe(setUser);
    const timer = setTimeout(() => {
      setPointsMsg("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [pointsMsg, setPointsMsg, setUser]);

  return (
    <section>
      <h1>
        {name} <Points points={points} />
      </h1>
      <h2>{_id}</h2>
      <button onClick={() => addPoints(1000)}>Buy 1000 Points</button>
      <button onClick={() => addPoints(5000)}>Buy 5000 Points</button>
      <button onClick={() => addPoints(7500)}>Buy 7500 Points</button>
      <p>{pointsMsg}</p>
    </section>
  );
}

const mapStateToProps = store => ({
  user: selectUser(store)
});

function mapDispatchToProps(dispatch) {
  return {
    setUser: user => dispatch(setUserAction(user)),
    setPointsMsg: msg => dispatch(setPointsMsgAction(msg))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
