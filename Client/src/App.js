import './App.css';
//import React, {Component} from 'react';
//import ApolloClient from 'apolloboost';
//import {ApolloProvider} from 'react-apollo';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './components/LoginPage';
import DashboardAGPage from './components/DashboardAllGoalsPage'
import Signup from './components/Signup'
import NewGoals from './components/NewGoals';
import Layout from './components/Layout'
function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element= {<LoginPage/>} />
            <Route path="/allgoals/:login" element= {<DashboardAGPage/>} />
            <Route path="/register" element ={<Signup/>} />
            <Route path="/newgoals/:login" element= {<NewGoals/>} />
            <Route path="/Signup" element ={<Signup/>} />
          </Route>
        </Routes>
        </BrowserRouter>
      </div>
  );
}
export default App;