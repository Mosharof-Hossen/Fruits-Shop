import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import CheckOut from './Components/CheckOut/CheckOut';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRouter/PrivateRouter';
import Admin from './Components/Admin/Admin';
import Orders from './Components/Orders/Orders';
import AddBook from './Components/AddBook/AddBook';

export const UserContext = createContext()


function App() {
  const [loggedInUser ,setLoggedInUser] = useState({})
  console.log(loggedInUser)
  return (
    <UserContext.Provider value = {[loggedInUser ,setLoggedInUser]} className="App text-center">
      <Router>
        <Header></Header>

        <Switch>
          <Route exact  path ="/">
            <Home></Home>
          </Route>

          <Route path ="/home">
            <Home></Home>
          </Route>

          <PrivateRoute path ="/CheckOut/:name">
            <CheckOut></CheckOut>
          </PrivateRoute>

          <PrivateRoute path ="/order">
            <Orders></Orders>
          </PrivateRoute>

          <PrivateRoute path = "/admin">
            <Admin></Admin>
          </PrivateRoute>

          <Route path = "/addBook">
            <AddBook></AddBook>
          </Route>

          <Route path ="/login">
            <Login></Login>
          </Route>

          <Route path ="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
