import React from "react";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import Home from "./home";
import SignIn from "./signin";
import SignUp from "./signup";
import CreditDetails from "./creditCard";
import ShowTrains from "./showtrains";
import selectTrain from "./selecttrain";
import Ticket from "./ticket";
import ContactUs from "./contact";
import Network from "./network";
import EditProfile from "./editprofile";
import BookTicket from "./bookTicket";
import Admin from "./Admin";

function Controller() {
  var { path } = useParams();
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/credit" component={CreditDetails} />
        <Route exact path="/showtrains" component={ShowTrains} />
        <Route exact path="/selecttrain" component={selectTrain} />
        <Route exact path="/ticket" component={Ticket} />
        <Route exact path="/network" component={Network} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/editprofile" component={EditProfile} />
        <Route exact path="/book" component={BookTicket} />
        <Route exact path="/Admin" component={Admin} />
       
        
      </Switch>
    </BrowserRouter>
  );
}

export default Controller;
