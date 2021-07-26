import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import AddUsers from "./components/AddUsers";
import AllUsers from "./components/AllUsers";
import EditUsers from "./components/EditUsers";
import NotFound from "./components/NotFound";
import {BrowserRouter, Route ,Switch} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/all" component={AllUsers} />
        <Route exact path="/add" component={AddUsers} />
        <Route exact path="/edit/:id" component={EditUsers} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App
