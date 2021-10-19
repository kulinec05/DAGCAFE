import React, {useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from "./Components/NaviBar";
import Home from "./Components/Home";
import Discounts from "./Components/Discounts";
import Contacts from "./Components/Contacts";




const App=()=> {

    return (
      <BrowserRouter>
          <NaviBar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/discounts' component={Discounts}/>
          <Route path='/contacts' component={Contacts}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
