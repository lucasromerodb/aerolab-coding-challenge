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

function Navigation({ user, pointsMsg, redeemMsg, onGetUser, onAddPoints }) {
  const [openBuy, setOpenBuy] = useState(false);
  const { _id, name, points } = user;

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
            {openBuy ? (
              <BuyPointsWrapper>
                <BuyPoints onAddPoints={onAddPoints} setOpenBuy={setOpenBuy} />
              </BuyPointsWrapper>
            ) : (
              ""
            )}
            <a
              href="https://github.com/lucasromerodb/aerolab-coding-challenge"
              target="_blank"
              rel="noopener noreferrer"
              className="links"
            >
              GitHub »
            </a>
            <Link to="/" className="links">
              Products
            </Link>
            <Link to="/history" className="links">
              Redeem History
            </Link>
            <Points points={points} setOpenBuy={setOpenBuy} />
          </Nav>
        ) : (
          ""
        )}
      </div>
      {/* <h2>{_id}</h2> */}
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
