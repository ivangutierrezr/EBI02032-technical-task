import React from 'react';
import logo from './logo.svg';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//Main App Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Views
import HomeView from './views/homeView/HomeView';
import DataView from './views/dataView/DataView';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="*" element={<HomeView />} />
        <Route path="/data" element={<DataView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
