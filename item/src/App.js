import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Conponents/Home';
import Second from './Conponents/Second';
import Personal from './Conponents/Personal';
import UserLogin from './Conponents/UserLogin';
import PhoneLogin from './Conponents/PhoneLogin';
import Issue from './Conponents/Issue';
import { Menu, Icon, Row, Col, Button } from 'antd';
import 'antd/dist/antd.css'
import New from './Conponents/New';
import Detail from './Conponents/Detail';
import Reg from './Conponents/Reg';
import CheckCode from './Conponents/CheckCode';
import { HashRouter, Route, Link, NavLink, Switch, Redirect, withRouter } from 'react-router-dom';
import './css/Footer.css'
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedKeys: ['/home'],
      menu: [{
        name: 'home',
        path: '/home',
        text: '首页',
        icon: 'home'
      }, {
        name: 'new',
        path: '/new',
        text: '新房',
        icon: 'bank'
      }, {
        name: 'issue',
        path: '/issue',
        text: '发布',
        icon: 'plus-circle'
      },
      {
        name: 'second',
        path: '/second',
        text: '二手房',
        icon: 'security-scan'
      },
      {
        name: 'personal',
        path: '/personal',
        text: '我的',
        icon: 'user'
      }

      ]
    }
  }
  render() {
    console.log('env:', process.env)

    return (
      <div className="App">
            <Switch>
          {/* 路由配置,当浏览器路径匹配path时,渲染component组件 */}
          <Route path='/home' component={Home} />
          {/* /discover/phone */}
          <Route path='/new' component={New} />
          <Route path='/issue' component={Issue} />
          <Route path='/second' component={Second} />
          <Route path='/personal' component={Personal} />
          <Route path='/phoneLogin' component={PhoneLogin} />
          <Route path='/userLogin' component={UserLogin} />
          <Route path='/checkCode' component={CheckCode} />
          <Route path='/reg' component={Reg} />
          {/* <Route path='/notfound' render={() => <h1>你访问的页面不存在</h1>} /> */}

          {/* "/" 跳转到 "/home" */}
          {/* <Redirect from="/" to="/home" exact /> */}
          {/* 404 */}
          {/* <Redirect to="/notfound" /> */}
          <Route path="/" component={Home}/>
        </Switch>
        <footer class="footer-nav">
          <ul>
            {
              this.state.menu.map(item => {
                return <li key={item.name}>
                  <NavLink to={item.path} activeStyle={{ color: 'red' }}> <Icon type={item.icon} /><p>{item.text}</p></NavLink>
                 
                </li>
              })
            }
          </ul>
        </footer>
      

       

        {/* <Home /> */}
        {/* <Second/> */}
        {/* <Personal/> */}
        {/* <UserLogin/> */}
        {/* <PhoneLogin/> */}
        {/* <Issue/> */}
        {/* <New/> */}
        {/* <Detail/> */}
        {/* <Reg /> */}
      </div>
    );
  }

}

export default App;
