import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './components/menuComponent'
import './App.css';

function App() {
  return (
    <div>
        <Navbar dark color="primary">
            <div className="container">
                <NavbarBrand href="/">Hello</NavbarBrand>
            </div>
        </Navbar>
        <Menu />
    </div>
  );
}

export default App;
