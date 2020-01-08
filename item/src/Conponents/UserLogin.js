import React, { Component } from 'react';
import '../css/inoic.css'
import '../css/house.css'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import '../css/Login.css'
import Interval from './Interval';
import Axios from 'axios';
class UserLogin extends React.Component {
    constructor(props) {
        super(props);
        this.goto = this.goto.bind(this);
        console.log(this.props)
    }
    //跳转页面
    goto(path) {
        this.props.history.push(path)
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.props.form)
        this.props.form.validateFields(async (err, values) => {
            let { username, password } = values;
            console.log(values);
            if (!username) {
                this.error("请输入账号！")
                return;
            }
            if (!password) {
                this.error("请输入密码！");
                return;
            }
            if (!err) {
                // console.log('Received values of form: ', values);
                // console.log("正确");
              
                let  {data}  = await Axios.post('http://localhost:1912/user/getUser', {
                    user: username,
                    pwd: password
                })

                if(data.code){
                    if(window.localStorage.setItem("user",username)){//如果已经登录执行这分支
                      this.error("你已经登录了！");
                      this.props.history.push('/home')
                    }else{//没登录时，执行这个分支

                        window.localStorage.setItem("user",username);
                        // history.back();
                        this.props.history.push('/personal')
                    }
                }
                // let { datas } = await Axios.get('http://localhost:1912/user/getUser', {
                // params:{

                //     user: username,
                //         pwd: password
                // }    
                // })
                // console.log(data, 'sdfff');
            }
        });
    };
    //提示
    error = (str) => {
        message.config({
            top: 250,
            duration: 2,
            maxCount: 3,
        });
        message.error(str);
    };
    handleConfirmBlur = e => {
        const { value } = e.target;
        console.log(value);
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div class="login">
                <div class="phone-nav">
                    <ul class="wrapper">
                        <li class="item">
                            <a class="on" onClick={this.goto.bind(this, '/userLogin')}>普通账户登录</a>
                        </li>
                        <li class="item">
                            <a onClick={this.goto.bind(this, '/phoneLogin')}>手机动态码登录</a>
                        </li>
                    </ul>
                    <Interval />
                </div>
                <Form onSubmit={this.handleSubmit} >
                    <Form.Item label="账户">
                        {getFieldDecorator('username', {
                            rules: [{ required: true }],
                        })(
                            // <div class="label">账<span class="ml">户</span>
                            //              </div>
                            <Input
                                placeholder="用户名/手机号"
                                onBlur={this.handleConfirmBlur}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item label="密码">
                        {getFieldDecorator('password', {
                            rules: [{ required: true }],
                        })(
                            // <div class="label"><span class="ml">户</span>
                            //                              </div>
                            <Input
                                type="password"
                                placeholder="请输入密码"
                            />,
                        )}
                    </Form.Item>
                    <div class="reg-ele wrapper">
                        <a ui-sref="pwd.forget" class="reg-link" href="#/pwd/forget">找回密码</a>
                        <span>|</span>
                        <a ui-sref="reg" class="reg-link" onClick={this.goto.bind(this, "/reg")}>立即注册</a>
                    </div>
                    <Form.Item>
                        {/* 
                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a> */}

                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
          </Button>
                        {/* Or <a href="">register now!</a> */}
                    </Form.Item>


                </Form>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(UserLogin);


export default WrappedNormalLoginForm