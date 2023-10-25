import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landin from "./components/Landin/Landin";
import Header from "./components/Header/Header";
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { useEffect } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Page404 from './components/404/Page404';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Landin/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
