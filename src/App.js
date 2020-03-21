import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from "./components/dashboard";
import Appnav from "./components/appnav";

function App() {
  return (
    <div className="App">
        <Appnav></Appnav>
      <Dashboard/>
    </div>
  );
}

export default App;
