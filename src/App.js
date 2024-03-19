import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./pages/Layout";
import {Home} from "./pages/Home";
import {Blogs} from "./pages/Blogs";
import {Contact} from "./pages/Contact";
import {NoPage} from "./pages/NoPage";
import logo from './logo.svg';
import Parent from "./Parent";
import NumberList from "./NumberList";

export default function App() {
  const numbers = [1, 2, 3, 4, 5];

  return (
      <div className="App">
        <header className="App-header">
          <h1>Exercise 1-5</h1>
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <Parent></Parent>
          </p>
          <hr/>
          <h1>Exercise 6</h1>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="blogs" element={<Blogs/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="*" element={<NoPage/>}/>
              </Route>
            </Routes>
          </BrowserRouter>
          <hr/>
          <h1>Exercise 7-8</h1>
          <NumberList numbers={numbers}/>
        </header>
      </div>
  );
}
