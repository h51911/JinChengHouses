import React, { Component } from 'react';
import '../css/inoic.css'
import '../css/house.css'
import { Form, Icon, Input, Button, Checkbox, message, Alert } from 'antd';
import CheckCode from './CheckCode';
import Axios from 'axios';
message.config({
    top: 250,
    duration: 2,
    maxCount: 3,
})
class PhoneLogin extends Component {
    constructor(props) {
        super(props);
        this.goto = this.goto.bind(this);
        this.state = {
            num1: Math.ceil(Math.random() * 100),
            num2: Math.ceil(Math.random() * 80),
            res: 0,
            phone: false,
            code: "",
            codeFlag: false,
            photoCode: false,
        }
        this.state.res = this.state.num1 + this.state.num2;
        this.fresh = this.fresh.bind(this);
        this.phoneBlue = this.phoneBlue.bind(this);
        this.sendCode = this.sendCode.bind(this);
    }
    //消息框
    info = (str) => {
        message.config({
            top: 250,
            maxCount: 3,
            duration: 5
        })
        message.info(str);
    };
    error = (str) => {
        message.error(str);
    };
    //表单提交事件
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.props.form)
        this.props.form.validateFields(async (err, values) => {
            console.log(values);
            if (!values.phone) {
                this.error("请输入手机号！")
                return;
            }
            if (!values.photo) {
                this.error("请输入图形验证码！");
                return;
            }
            if (!values.msgs) {
                this.error("请输入短信验证码！");
                return;
            }
            if (!err && this.state.codeFlag && this.state.photoCode) {
                // console.log('Received values of form: ', values);
                // console.log("正确");
                let { data } = await Axios.get('http://localhost:1912/user/login', {
                    params: {
                        user: values.phone,
                    }
                })
                console.log('登录成功！', data)
                if (window.localStorage.setItem("user", values.phone)) {//如果已经登录执行这分支
                    this.error("你已经登录了！");
                    this.props.history.push('/home')
                } else {//没登录时，执行这个分支

                    window.localStorage.setItem("user", values.phone);
                    this.props.history.push('/personal')
                }
            } else {
                console.log("登录失败");
            }
        });
    };
    // 手机号码失焦点
    phoneBlue(e) {
        let { value } = e.target;
        let exc = /^[1][3,4,5,7,8,9][0-9]{9}$/;
        value.match(exc) ? this.setState({ phone: true }) : this.setState({ phone: false });
        console.log(value)
        
    }
    //出席验证码
    sendCode() {
        if (this.state.phone) {
            let strNum = '';
            for (let i = 0; i < 4; i++) {
                strNum += Math.ceil(Math.random() * 8)
            }
            this.setState({ code: strNum });
            // console.log(strNum)
            this.info(`你的验证码是${strNum}`)
        } else {
            this.error('请输入手机号码!')
            this.setState({ code: '' });
        }
    }
    //验证码失去焦点
    codeBlur = (e) => {
        let { value } = e.target;
        if (value) {
            value == this.state.code ? this.setState({ codeFlag: true }) : this.setState({ codeFlag: false });
        } else {
            this.setState({ codeFlag: false });
        }
        console.log(this.state.codeFlag, this.state.code)
    }
    //加减的验证码失去焦点
    photoCodeBlur = e => {
        let { value } = e.target;
        value == this.state.res ? this.setState({ photoCode: true }) : this.setState({ photoCode: false });
        console.log(value);
    }




    //刷新验证码
    fresh() {
        let num1 = Math.ceil(Math.random() * 100);
        let num2 = Math.ceil(Math.random() * 80);
        this.setState({
            num1,
            num2,
            res: num1 + num2
        })
        console.log(this.state.num1, this.state.num2, this.state.res)
    }
    //跳转页面
    goto(path) {
        this.props.history.push(path)
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div ui-view="content"><div className="login">
                <div className="phone-nav">
                    <ul className="wrapper">
                        <li className="item">
                            <a onClick={this.goto.bind(this, '/userLogin')} >普通账户登录</a>
                        </li>
                        <li className="item">
                            <a className="on" onClick={this.goto.bind(this, '/phoneLogin')} >手机动态码登录</a>
                        </li>
                    </ul>
                </div>

                <Form onSubmit={this.handleSubmit} className="phoneLogin" >
                    <Form.Item label="手机号">
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, pattern: /^[1][3,4,5,7,8,9][0-9]{9}$/ }],
                        })(
                            <Input
                                placeholder="用户名/手机号"
                                onBlur={this.phoneBlue}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item label="图形验证码">
                        {getFieldDecorator('photo', {
                            rules: [{ required: true }],
                        })(
                            <Input
                                placeholder="请输入图形验证码"
                                onBlur={this.photoCodeBlur}
                            />,
                        )}
                    </Form.Item>
                    <CheckCode num1={this.state.num1} num2={this.state.num2} fresh={this.fresh} />
                    <Form.Item label="短信验证码">
                        {getFieldDecorator('msgs', {
                            rules: [{ required: true }],
                        })(
                            <Input
                                placeholder="请输入短信验证码"
                                onBlur={this.codeBlur}
                            />,
                        )}
                    </Form.Item>
                    <span className="getCode" onClick={this.sendCode}>获取验证码</span>
                    <div class="reg-ele wrapper">
                        <a ui-sref="pwd.forget" class="reg-link" >找回密码</a>
                        <span>|</span>
                        <a ui-sref="reg" class="reg-link" onClick={this.goto.bind(this, "/reg")}>立即注册</a>
                    </div>
                    <Form.Item>

                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
          </Button>
                    </Form.Item>


                </Form>
            </div>
            </div>
        )
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(PhoneLogin);
// export default WrappedNormalLoginForm;
export default Form.create({ name: 'normal_login' })(PhoneLogin);







{/* <form className="form ng-pristine ng-valid ng-valid-maxlength" my-validform="" ng-if="login_nav == 0" >
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
                </form> */}


