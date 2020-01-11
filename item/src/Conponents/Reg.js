import React, { Component } from 'react';
import '../css/inoic.css'
import '../css/house.css'
import { Form, Icon, Input, Button, Checkbox, message, Alert } from 'antd';
import CheckCode from './CheckCode';
import '../css/Reg.css'
import Axios from 'axios';
message.config({
    top: 250,
    duration: 2,
    maxCount: 3,
})
class Reg extends Component {
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
        message.config({
            top: 250,
            duration: 2,
            maxCount: 3,
        })
        message.error(str);
    };
    success=(str)=>{
        message.config({
            duration: 3
        })
        message.success(str);
    }
    //表单提交事件
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.props.form)
        this.props.form.validateFields(async (err, values) => {
            let { phone, photo, msgs, password } = values;
            console.log(values);
            if (!phone) {
                this.error("请输入手机号！")
                return;
            }
            if (!photo) {
                this.error("请输入图形验证码！");
                return;
            }
            if (!msgs) {
                this.error("请输入短信验证码！");
                return;
            }
            if (!password) {
                this.error("请输入密码！");
                return;
            }

            if (!err && this.state.codeFlag && this.state.photoCode) {
                let { data } = await Axios.post('http://localhost:1912/user/reg',
                    {
                        user: phone,
                        pwd:password,
                        condition:'reg'
                    })
                    console.log(data);
                    if(data.code){
                        this.success('注册成功！')
                        this.props.history.push('/userLogin')
                    }else{
                        this.error("注册失败！");
                    }


            } else {
                console.log("登录失败");
            }
        });
    };
    // 手机号码失焦点
    async phoneBlue(e) {
        let { value } = e.target;
        let exc = /^[1][3,4,5,7,8,9][0-9]{9}$/;
        value.match(exc) ? this.setState({ phone: true }) : this.setState({ phone: false });
        let { data } = await Axios.post('http://localhost:1912/user/reg',
            {
                user: value,
            })
        if (!data.code) {
            this.error("你输入的账号已被占用！");
        }

        console.log(value, data, '验证code')
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
            <div ui-view="content">
                <div className="reg">
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
                        <Form.Item label="密码">
                            {getFieldDecorator('password', {
                                rules: [{ required: true, min: 6, max: 12 }],
                            })(
                                <Input
                                    type="password"
                                    placeholder="请输入密码"
                                />,
                            )}
                        </Form.Item>
                        <div class="reg-ele wrapper">
                            <span>已有账号?</span>
                            <a ui-sref="reg" class="reg-link" onClick={this.goto.bind(this, "/phoneLogin")}>登录</a>
                        </div>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="reg-form-button">
                                注册
          </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Reg);
export default Form.create({ name: 'normal_login' })(Reg);