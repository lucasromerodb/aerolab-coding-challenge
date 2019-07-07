import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  userCallRequest,
  pointsCallRequest,
  selectUser,
  selectPointsMsg
} from "../../ducks/userDuck";
import { selectRedeemMsg } from "../../ducks/productsDuck";

import User from "../../components/user";
import Points from "../../components/points";

import { Header, Nav, BuyPointsWrapper } from "./Styles";
import BuyPoints from "../../components/buypoints";
import NavItems from "../../components/navitems";

function Navigation({ user, pointsMsg, redeemMsg, onGetUser, onAddPoints }) {
  const [openBuy, setOpenBuy] = useState(false);
  const { name, points } = user;

  useEffect(() => {
    onGetUser();
  }, [pointsMsg, redeemMsg, onGetUser]);

  return (
    <Header>
      <Link to="/">
        <User name={name} />
      </Link>
      <div>
        {points ? (
          <Nav>
            <NavItems />
            <Points points={points} setOpenBuy={setOpenBuy} />
            {openBuy ? (
              <BuyPointsWrapper>
                <BuyPoints onAddPoints={onAddPoints} setOpenBuy={setOpenBuy} />
              </BuyPointsWrapper>
            ) : (
              ""
            )}
          </Nav>
        ) : (
          ""
        )}
      </div>
      {/* <p>{pointsMsg}</p> */}
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
