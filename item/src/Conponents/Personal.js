import React, { Component } from 'react';
import '../css/Personal.css'
import Menu from './Menu';
class Personal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shop2: [{
                "path": "my/category",
                "img": "./img/Personal/menu200000002.png",
                "title": "我要发布"
            }, {
                "path": "my/manage/sell",
                "img": "./img/Personal/menu200000003.png",
                "title": "管理出售"
            }, {
                "path": "my/manage/rent",
                "img": "./img/Personal/menu200000004.png",
                "title": "管理出租"
            }, {
                "path": "my/fav/2",
                "img": "./img/Personal/menu200000005.png",
                "title": "我的收藏"
            }, {
                "path": "my/manage/buy",
                "img": "./img/Personal/menu200000006.png",
                "title": "管理求购"
            }, {
                "path": "my/manage/askrent",
                "img": "./img/Personal/menu200000007.png",
                "title": "管理求租"
            }, {
                "path": "order/list",
                "img": "./img/Personal/menu200000008.png",
                "title": "我的订单"
            }, {
                "path": "order/refund/list",
                "img": "./img/Personal/menu200000009.png",
                "title": "我的退款"
            }, {
                "path": "help",
                "img": "./img/Personal/menu200000010.png",
                "title": "帮助中心"
            }]
        }
    }
    render() {
        return (
            <div className="Personal">
                <div ui-view="header" data-tap-disabled="true" class="PersonalTitle" >
                    <header class="title-bar title-bar-hasbg">
                        <a class="iconfont back">‹</a>
                        <h1 class="ng-binding">个人中心</h1>
                        {/* <div class="operate">
                            <a ui-sref="my" class="iconfont">&#xe630;</a>
                        </div> */}
                    </header>
                    {/* <div class="other-header">
                        <div class="left-side-menu">
                            <a>
                                <span class="icon-backs"></span>
                            </a>
                        </div>
                        <div class="right-side-menu">
                            <a ui-sref="my">
                                <span class="icon-homes"></span>
                            </a>
                        </div>
                    </div> */}
                </div>
                {/* body */}
                <div class="my-index"><div class="user-banner" ui-sref="my.info" href="#/my/info">
                    <div class="pic">
                        <img ng-src="http://uc.0356f.com/avatar.php?uid=1360&amp;size=big" alt="" src="http://uc.0356f.com/avatar.php?uid=1360&amp;size=big" />
                    </div>
                    <div class="name ng-binding">欢迎你，17825013321</div>
                </div>
                    <div class="menus">
                        <Menu data={this.state.shop2}/>
                        {/* <ul class="m1 menu">




                            <li>
                                <a ui-sref="my.category" href="#/my/category">
                                    <div class="myicon icon-myfabu">
                                    </div>
                                    <div class="title">我要发布</div>
                                </a>
                            </li>




                        </ul> */}
                    </div>
                    <div ng-if="!is_wxmini" class="recent-query">
                        <div class="title">
                            <span class="text">近期浏览</span>
                        </div>
                        <ul class="list" ng-if="myhistory.length > 0">
                            <li ng-repeat="x in myhistory">
                                <a ng-href="/resoldhome/esf/info?id=1486" class="ng-binding" href="/resoldhome/esf/info?id=1486">福泽小区3室1厅1卫114平米住宅出售</a>
                            </li>
                            <li ng-repeat="x in myhistory">
                                <a ng-href="/resoldhome/esf/info?id=1513" class="ng-binding" href="/resoldhome/esf/info?id=1513">龙度华府2室1厅1卫89平米住宅出售</a>
                            </li>
                        </ul>
                    </div>
                    <div ng-if="!is_wxmini" ad-block="" did="wapgrzx">
                    </div>
                </div>




            </div>
        )
    }
}
export default Personal;