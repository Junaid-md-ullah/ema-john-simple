import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Manage from './components/Manage/Manage';
import Review from './components/Review/Review'
import NoMatch from './components/NoMatch/NoMatch'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductDetail from './components/ProductDetail/ProductDetail';
import Login from './components/Login/Login';
import { createContext } from 'react';

 export const UserContext=createContext();

function App() {
  const user={name:'kodumia',email:'kodu@chodu.com'}
  return (
    <div>
      <UserContext.Provider value={user.name}>  
      <Header></Header>
        <Router>
          <Switch>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/review">
                <Review></Review>
            </Route>
            <Route path="/manage">
                <Manage></Manage>
            </Route>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/product/:productKey">
              <ProductDetail></ProductDetail>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        </Router>
        
        </UserContext.Provider>
        
    </div>
  );
}




export default App;
