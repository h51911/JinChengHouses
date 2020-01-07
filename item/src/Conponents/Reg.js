import React, { Component } from 'react';
import '../css/Reg.css'
class Reg extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div class="reg">
                <form class="form ng-pristine ng-valid ng-valid-maxlength" my-validform="">
                    <div class="ele">
                        <div class="wrapper">
                            <div class="label">用户名</div>
                            <input type="text" class="long ng-pristine ng-untouched ng-valid ng-empty" ng-model="user.username" placeholder="请输入用户名" datatype="*" nullmsg="请输入用户名" name="username" />
                        </div>
                    </div>
                    <div class="ele">
                        <div class="wrapper">
                            <div class="label">手机号</div>
                            <input type="tel" class="long ng-pristine ng-untouched ng-valid ng-empty ng-valid-maxlength" maxlength="11" ng-model="user.phone" placeholder="请输入手机号" datatype="m" nullmsg="请输入手机号" errormsg="手机号格式错误" name="phone" />
                        </div>
                    </div>
                    <div class="ele">
                        <div class="wrapper">
                            <div class="label">图形验证码</div>
                            <input type="text" class="long ng-pristine ng-untouched ng-valid ng-empty" ng-model="user.piccode" placeholder="请输入图形验证码" datatype="*" nullmsg="请输入图形验证码" />
                            <span ui-captcha="">
                                <div class="captchaBlock">
                                    <img ng-click="refresh()" alt="" class="captchaBlock-img" ng-src="/uc/api/captcha/v/5e136bd115668/" src="/uc/api/captcha/v/5e136bd115668/" />
                                </div>
                            </span>
                        </div>
                    </div>
                    <div class="ele">
                        <div class="wrapper">
                            <div class="label">短信验证码</div>
                            <input type="tel" maxlength="6" class="long ng-pristine ng-untouched ng-valid ng-empty ng-valid-maxlength" ng-model="user.captcha" placeholder="请输入短信验证码" datatype="*" nullmsg="请输入短信验证码" />
                            <a class="get-code ng-binding hover" ng-class="{hover:code.is_start || user.phone.length == 0 || user.piccode.length == 0}" ng-click="reg_send_captcha()" ng-bind="code.is_start ? code.time + 's' : '获取验证码'">获取验证码</a>
                        </div>
                    </div>
                    <div class="ele last">
                        <div class="wrapper">
                            <div class="label">密<span class="ml">码</span>
                            </div>
                            <input type="password" class="long ng-pristine ng-untouched ng-valid ng-empty" ng-model="user.password" placeholder="请输入密码" datatype="*" nullmsg="请输入密码" />
                        </div>
                    </div>
                    <div class="reg-ele wrapper">
                        <a ui-sref="login" class="reg-link" href="#/login">已有账号？<span class="em">登录</span></a>
                    </div>
                    <div class="btn wrapper">
                        <input type="submit" value="注 册" />
                    </div>
                </form>
            </div>
        )
    }
}
export default Reg