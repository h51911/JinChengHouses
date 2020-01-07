import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Conponents/Home';
import Second from './Conponents/Second';
import Personal from './Conponents/Personal';
import UserLogin from './Conponents/UserLogin';
import PhoneLogin from './Conponents/PhoneLogin';
import Issue from './Conponents/Issue';
import { Menu, Icon,Row,Col,Button } from 'antd';
import 'antd/dist/antd.css'
import New from './Conponents/New';
import Detail from './Conponents/Detail';
import Reg from './Conponents/Reg';

function App() {
  console.log('env:',process.env)
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Home /> */}
      {/* <Second/> */}
      {/* <Personal/> */}
      {/* <UserLogin/> */}
      {/* <PhoneLogin/> */}
      {/* <Issue/> */}
      {/* <New/> */}
      {/* <Detail/> */}
      <Reg/>
    </div>
  );
}

export default App;
