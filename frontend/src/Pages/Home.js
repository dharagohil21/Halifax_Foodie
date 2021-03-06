import React from "react";
import UserPool from "../Utils/UserPool";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import {
  EMAIL_KEY,
  MFA_KEY,
  PROFILE_KEY,
  USER_PROFILE,
} from "../Utils/AccountUtils";
import styled from "styled-components";
import RestaurantsListing from "../Components/RestaurantsListing";
import RestaurantHome from "../Restaurant/pages/Home";

const HomePageContainer = styled(Container)`
  margin-top: 50px;
  & button {
    margin: 10px;
  }
`;

const Home = () => {
  const history = useHistory();
  const profile = localStorage.getItem(PROFILE_KEY);

  !localStorage.getItem(MFA_KEY) && history.push("mfa");

  const logOut = () => {
    const isUserThere = UserPool.getCurrentUser();
    if (isUserThere) {
      localStorage.removeItem(EMAIL_KEY);
      localStorage.removeItem(MFA_KEY);
      isUserThere.signOut();
      history.push("login");
    }
  };

  return (
    <>
      {profile === USER_PROFILE ? (
        <HomePageContainer>
          <Row>
          <Col xs="8" md="10">
            <h1 className="text-muted"> Home </h1>
          </Col>
          <Col xs="4" md="2">
            <Button variant="danger" onClick={logOut}>
              Log Out
            </Button>
          </Col>
        </Row>
        <Row>
            <RestaurantsListing />
        </Row>
        </HomePageContainer>
        ) : (
          <RestaurantHome/>
        )}
        </>
  );
};

export default Home;
