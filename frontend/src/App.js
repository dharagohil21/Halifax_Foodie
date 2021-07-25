import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import {
  PROFILE_KEY
} from "./Utils/AccountUtils";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import { GlobalStyle } from "./GlobalStyles.styled";
import Home from "./Pages/Home";
import MFA from "./Pages/MFA";
import RestaurantHome from "./Restaurant/pages/Home";
import RestaurantMenu from "./Restaurant/pages/Menu";
import Restaurant from "./Pages/Restaurant";
import MenuItem from "./Restaurant/pages/menuItem";
import Chat from "./Restaurant/pages/Chat";
import OrderFood from "./Pages/OrderFood";
import FeedbackPage from "./Feedback/pages/FeedbackPage";
import LexChatBot from "./Feedback/components/LexChatBot";

const App = () => {

  
  const profile = localStorage.getItem(PROFILE_KEY);
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/mfa">
            <MFA />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/restaurant/:id">
          <Restaurant />
        </Route>
        <Route exact path="/orderFood">
          <OrderFood />
        </Route>
        <Route exact path="/">
          <Redirect to="login" />
        </Route>
        <Route exact path="/restaurantHome">
          <RestaurantHome />
        </Route>
        <Route exact path="/restaurantMenu">
          <RestaurantMenu />
        </Route>
        <Route exact path="/menuItem/:id">
          <MenuItem/>
        </Route>
        <Route exact path="/chat">
          <Chat role={profile}/>
        </Route>
        <Route exact path="/feedback/:id">
          <FeedbackPage/>
          <LexChatBot />
        </Route>
      </Router>
    </React.Fragment>
  );
};

export default App;
