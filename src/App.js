import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from "./components/dashboard";
import News from "./components/news";
import Appnav from "./components/appnav";
import Appfooter from "./components/appfooter";

function App() {
  return (
    <div className="App">
        <Appnav></Appnav>
      <Dashboard/>
      <News/>
      <Appfooter/>
    </div>
  );
}

export default App;
