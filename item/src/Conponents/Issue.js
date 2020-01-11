import React, { Component } from 'react';
import '../css/Issue.css'
import { Icon } from 'antd';
import Interval from './Interval';
import { message } from 'antd';
import { withRouter } from 'react-router-dom';
class Issue extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [{
                "title": "房源出售",
                "data": [{
                    "title1": "住宅",
                    "title2": "出售住宅二手房",
                    "img": "./img/Issue/menu100000006.png"
                }, {
                    "title1": "商铺",
                    "title2": "出售商铺房源例如卖场、摊位、店铺",
                    "img": "./img/Issue/menu100000003.png"
                }, {
                    "title1": "写字楼",
                    "title2": "出售写字楼房源例如写字楼、商务中心等",
                    "img": "./img/Issue/menu100000009.png"
                }]
            }, {
                "title": "房源求购",
                "data": [{
                    "title1": "我要求购",
                    "title2": "求购住宅二手房",
                    "img": "./img/Issue/menu100000005.png"
                }]
            }, {
                "title": "房源出租",
                "data": [{
                    "title1": "住宅",
                    "title2": "出租住宅二手房",
                    "img": "./img/Issue/menu100000006.png"
                }, {
                    "title1": "商铺出租",
                    "title2": "出租商铺房源例如卖场、摊位、店铺",
                    "img": "./img/Issue/menu100000007.png"
                }, {
                    "title1": "商铺转让",
                    "title2": "转让商铺房源例如卖场、摊位、店铺",
                    "img": "./img/Issue/menu100000008.png"
                }, {
                    "title1": "写字楼",
                    "title2": "出租写字楼房源例如写字楼、商务中心等",
                    "img": "./img/Issue/menu100000009.png"
                }]
            }, {
                "title": "房源求租",
                "data": [{
                    "title1": "我要求租",
                    "title2": "求租住宅二手房",
                    "img": "./img/Issue/menu100000010.png"
                }]
            }]
        }
        this.goto = this.goto.bind(this);
    }
    error() {
        message.error('请先登录，登录即可进入页面！');
    };
    //生命周期
    componentDidMount() {
        if (!window.localStorage.getItem("user")) {
            this.error();
            this.props.history.push('/userLogin')
        }
    }
    //跳转
    goto(path) {
        this.props.history.push(path);
    }
    render() {
        return (
            <>
                <div ui-view="header" data-tap-disabled="true">
                    <header class="title-bar title-bar-hasbg">
                        <a ng-click="header_back()" class="iconfont back" onClick={() => this.props.history.goBack()}>
                            ‹
                        </a>
                        <h1 ng-bind="config.title" class="ng-binding">选择发布类目</h1>
                        <div class="operate">
                            <a class="iconfont" onClick={this.goto.bind(this, '/home')}><Icon type="home" /></a>
                        </div>
                    </header>
                    <div class="other-header">
                        <div class="left-side-menu">
                            <a ng-click="header_back()">
                                <span class="icon-backs"></span>
                            </a>
                        </div>
                        <div class="right-side-menu">
                            <a ng-click="go_my()">
                                <span class="icon-homes"></span>
                            </a>
                        </div>
                    </div>
                </div>


                <div ui-view="content" class="">
                    <div class="my_fabu">
                        {
                            this.state.data.map(item => (
                                <div class="fabu_column" ng-if="!special_type || type == 0">
                                    <div class="fabu_column_title">{item.title}</div>
                                    <ul>
                                        {
                                            item.data.map(item2 => (
                                                <li>
                                                    <a ng-click="fabu('sell', {category:1})">
                                                        <i class="fabu_column_icon fabu_column_icon_1"><img src={item2.img} /></i>
                                                        <dt>{item2.title1}</dt>
                                                        <dd>{item2.title2}</dd>
                                                        <i class="iconfont icon-rightarrow">›</i>
                                                    </a>
                                                </li>
                                            ))
                                        }

                                        {/* <li ng-if="site.commercial_open=='1'">
                                            <a ng-click="fabu('sell', {category:2})">
                                                <i class="fabu_column_icon fabu_column_icon_2"></i>
                                                <dt>商铺</dt>
                                                <dd>出售商铺房源例如卖场、摊位、店铺</dd>
                                                <i class="iconfont icon-rightarrow"></i>
                                            </a>
                                        </li>
                                        <li ng-if="site.commercial_open=='1'">
                                            <a ng-click="fabu('sell', {category:3})" class="">
                                                <i class="fabu_column_icon fabu_column_icon_3"></i>
                                                <dt>写字楼</dt>
                                                <dd>出售写字楼房源例如写字楼、商务中心等</dd>
                                                <i class="iconfont icon-rightarrow"></i>
                                            </a>
                                        </li> */}
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                    <Interval />
                </div>
            </>
        )
    }
}
export default withRouter(Issue);