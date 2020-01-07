import React, { Component } from 'react';
import '../css/inoic.css'
import '../css/house.css'
class PhoneLogin extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div ui-view="content"><div className="login"><div className="phone-nav"><ul className="wrapper">
                <li className="item">
                    <a ng-click="change_login_nav(1)" ng-className="{on:login_nav === 1}" >普通账户登录</a>
                </li>
                <li className="item">
                    <a ng-click="change_login_nav(0)" ng-className="{on:login_nav === 0}" className="on" >手机动态码登录</a>
                </li>
            </ul>
            </div>
                <form className="form ng-pristine ng-valid ng-valid-maxlength" my-validform="" ng-if="login_nav == 0" >
                    <div className="ele">
                        <div className="wrapper">
                            <div className="label">手机号</div>
                            <input type="tel" className="long ng-pristine ng-untouched ng-valid ng-empty ng-valid-maxlength" maxlength="11" ng-model="user.phone" placeholder="请输入手机号" datatype="m" nullmsg="请输入手机号" errormsg="手机号码格式错误" />
                        </div>
                    </div>
                    <div className="ele">
                        <div className="wrapper">
                            <div className="label">图形验证码</div>
                            <input type="text" className="long ng-pristine ng-untouched ng-valid ng-empty" ng-model="user.piccode" placeholder="请输入图形验证码" datatype="*" nullmsg="请输入图形验证码" />
                            <span ui-captcha="">
                                <div className="captchaBlock">
                                    <img ng-click="refresh()" alt="" className="captchaBlock-img" ng-src="/uc/api/captcha/v/5e1212816b364/" src="/uc/api/captcha/v/5e1212816b364/" />
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="ele last">
                        <div className="wrapper">
                            <div className="label">短信验证码</div>
                            <input type="tel" maxlength="6" className="long ng-pristine ng-untouched ng-valid ng-empty ng-valid-maxlength" ng-model="user.captcha" placeholder="请输入短信验证码" datatype="*" nullmsg="请输入短信验证码" />
                            <a className="get-code ng-binding hover" ng-className="{hover:code.is_start || user.phone.length == 0 || user.piccode.length == 0}" ng-click="send_captcha(user.phone,'yzmLogin',user.piccode)" ng-bind="code.is_start ? code.time + 's' : '获取验证码'">获取验证码</a>
                        </div>
                    </div>
                    <div className="reg-ele wrapper">
                        <a ui-sref="reg" className="reg-link" href="#/reg">立即注册</a>
                    </div>
                    <div className="btn wrapper">
                        <input type="submit" value="提 交" />
                    </div>
                </form>
                <form className="form dn ng-pristine ng-valid" my-validform="" ng-className="{show:login_nav == 1}" data-tap-disabled="true" >
                    <div className="ele">
                        <div className="wrapper">
                            <div className="label">账<span className="ml">户</span>
                            </div>
                            <input type="text" ng-model="user.username" placeholder="用户名/手机号" datatype="*" nullmsg="用户名/手机号" className="ng-pristine ng-valid ng-empty ng-touched" />
                        </div>
                    </div>
                    <div className="ele last">
                        <div className="wrapper">
                            <div className="label">密<span className="ml">码</span>
                            </div>
                            <input type="password" ng-model="user.password" onfocus="this.type='password'" placeholder="请输入密码" datatype="*" nullmsg="请输入密码" className="ng-pristine ng-valid ng-empty ng-touched" />
                        </div>
                    </div>
                    <div className="reg-ele wrapper">
                        <a ui-sref="pwd.forget" className="reg-link" href="#/pwd/forget">找回密码</a>
                        <span>|</span>
                        <a ui-sref="reg" className="reg-link" href="#/reg">立即注册</a>
                    </div>
                    <div className="btn wrapper">
                        <input type="submit" value="提 交" />
                    </div>
                </form>
            </div>
            </div>
        )
    }
}
export default PhoneLogin;