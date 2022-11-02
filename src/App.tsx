import React from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Layout from './pages/layout';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Layout/>
    </div>
  );
}

export default App;
