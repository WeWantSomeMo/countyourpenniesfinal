import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import NavbarSetup from './components/NavbarSetup';
import LoginPage from './components/LoginPage';
import DashboardNGPage from './components/DashboardNewGoalPage';
import DashboardAGPage from './components/DashboardAllGoalsPage'
import Signup from './components/Signup.js'

function App() {
  return (
      <div className="App">
        <NavbarSetup  />
        <BrowserRouter>
        <Routes>
          <Route path="/" element= {<LoginPage/>} />
          <Route path="/allgoals" element= {<DashboardAGPage/>} />
          <Route path="/register" element ={<Signup/>} />
          <Route path="/newgoals" elenent= {<DashboardNGPage/>} />
        </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;