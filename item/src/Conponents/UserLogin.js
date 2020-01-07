import React, { Component } from 'react';
import '../css/inoic.css'
import '../css/house.css'
class UserLogin extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div ui-view="content">
                <div class="login">
                    <div class="phone-nav">
                        <ul class="wrapper">
                            <li class="item">
                                <a ng-click="change_login_nav(1)" ng-class="{on:login_nav === 1}" class="on">普通账户登录</a>
                            </li>
                            <li class="item">
                                <a ng-click="change_login_nav(0)" ng-class="{on:login_nav === 0}" >手机动态码登录</a>
                            </li>
                        </ul>
                    </div>
                    <form class="form dn ng-pristine ng-valid show" my-validform="" ng-class="{show:login_nav == 1}" data-tap-disabled="true">
                        <div class="ele">
                            <div class="wrapper">
                                <div class="label">账<span class="ml">户</span>
                                </div>
                                <input type="text" ng-model="user.username" placeholder="用户名/手机号" datatype="*" nullmsg="用户名/手机号" class="ng-pristine ng-untouched ng-valid ng-empty" />
                            </div>
                        </div>
                        <div class="ele last">
                            <div class="wrapper">
                                <div class="label">密<span class="ml">码</span>
                                </div>
                                <input type="text" ng-model="user.password" onfocus="this.type='password'" placeholder="请输入密码" datatype="*" nullmsg="请输入密码" class="ng-pristine ng-untouched ng-valid ng-empty" />
                            </div>
                        </div>
                        <div class="reg-ele wrapper">
                            <a ui-sref="pwd.forget" class="reg-link" href="#/pwd/forget">找回密码</a>
                            <span>|</span>
                            <a ui-sref="reg" class="reg-link" href="#/reg">立即注册</a>
                        </div>
                        <div class="btn wrapper">
                            <input type="submit" value="提 交" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default UserLogin;