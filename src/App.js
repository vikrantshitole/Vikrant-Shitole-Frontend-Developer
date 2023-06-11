import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Container from './Components/Container/Container';
import React, { useEffect } from 'react';

function App() {
    return (
    <div className="container-fluid">
      <Header/>
      <Container/>
    </div>
  );
}

export default React.memo(App);
