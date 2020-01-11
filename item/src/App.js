import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Conponents/Home';
import Second from './Conponents/Second';
import Personal from './Conponents/Personal';
import UserLogin from './Conponents/UserLogin';
import PhoneLogin from './Conponents/PhoneLogin';
import Issue from './Conponents/Issue';
import { Icon } from 'antd';
import 'antd/dist/antd.css'
import New from './Conponents/New';
import Detail from './Conponents/Detail';
import Reg from './Conponents/Reg';
import CheckCode from './Conponents/CheckCode';
import Cart from './Conponents/Cart';
import Personal2 from './Conponents/Personal2';
import { HashRouter, Route, Link, NavLink, Switch, Redirect, withRouter } from 'react-router-dom';
import './css/Footer.css'
import IconSite from './prot'//Icon项目网址
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: IconSite,
})
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedKeys: ['/home'],
      flag: true,
      flag2: false,
      menu: [{
        name: 'home',
        path: '/home',
        text: '首页',
        icon: 'home'
      }, {
        name: 'new',
        path: '/new',
        text: '新房',
        icon: 'bank',
        iconfont: "icon-building"
      }, {
        name: 'issue',
        path: '/issue',
        text: '发布',
        icon: 'plus-circle',
        class: "big"
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

      ],
      menu2: [{
        name: 'home',
        path: '/home',
        text: '首页',
        icon: 'home'
      }, {
        name: 'new',
        path: '/new',
        text: '新房',
        icon: 'bank',
        iconfont: "icon-building"
      }, {
        name: 'issue',
        path: '/issue',
        text: '发布',
        icon: 'plus-circle',
        class: "big"
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

  componentDidMount() {
    console.log("didMount", this.props)
    let local = this.props.location.pathname;
    if (local == "/personal") {
      if(window.localStorage.getItem('user')){
        let data = JSON.parse(JSON.stringify(this.state.menu2));
        data.pop();
        data.pop();
        this.setState({ menu: data, flag: true })
      }
    } else if (local == "/home" || local == "/new" || local == "/second") {
      let data = this.state.menu2;
      this.setState({ menu: data, flag: true })
    } else {
      this.setState({ flag: false })
    }

    // 监听路由变化
    this.props.history.listen(route => {
      console.log(route, '监听着！');
      if (route.pathname == "/personal") {
        if(window.localStorage.getItem('user')){
          let data = JSON.parse(JSON.stringify(this.state.menu2));
          data.pop();
          data.pop();
          this.setState({ menu: data, flag: true })
        }
      } else if (route.pathname == "/home" || route.pathname == "/new" || route.pathname == "/second") {
        let data = this.state.menu2;
        this.setState({ menu: data, flag: true })
      } else {
        this.setState({ flag: false })
      }

    })
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
          <Route path='/detail' component={Detail} />
          <Route path='/cart' component={Cart} />
          <Route path='/personal2' component={Personal2} />

          <Redirect from="/" to="/home" exact />
          {/* <Route path="/" component={Home} /> */}
        </Switch>
        {/* <Icon type="plus-circle" theme="filled" /> */}
        <footer class="footer-nav" style={this.state.flag ? { display: "block" } : { display: "none" }}>
          <ul>
            {
              this.state.menu.map(item => {
                return <li key={item.name}>
                  <NavLink to={item.path} activeStyle={{ color: 'red' }}>{item.iconfont ? <IconFont type={item.iconfont} /> : <Icon type={item.icon} className={item.class ? 'big' : ""} theme={item.class ? "filled" : ""} />} <p>{item.text}</p></NavLink>

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

export default withRouter(App);
