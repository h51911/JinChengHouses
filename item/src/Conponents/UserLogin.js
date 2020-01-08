import React, { Component } from 'react';
import '../css/inoic.css'
import '../css/house.css'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import '../css/Login.css'
import Interval from './Interval';
// class UserLoginForm extends Component {
//     constructor(props) {
//         super(props);
//         this.goto = this.goto.bind(this);
//         console.log(this.props)
//     }
//     //跳转页面
//     goto(path) {
//         this.props.history.push(path)
//     }
//     error() {
//         message.error('请先登录，登录即可进入页面！');
//       };
//     //提交事件
//     handleSubmit = e => {

//         console.dir(this.props.form)
//         e.preventDefault();
//         this.props.form.validateFields((err, values) => {
//             if (!err) {
//                 // console.log('Received values of form: ', values);
//         //   this.error()
//         alert("szdfsdf")
//             }
//         });
//     };

//     render() {
//         const { getFieldDecorator } = this.props.form;
//         return (
//             <div ui-view="content">
//                 <div class="login">
//                     <div class="phone-nav">
//                         <ul class="wrapper">
//                             <li class="item">
//                                 <a class="on" onClick={this.goto.bind(this, '/userLogin')}>普通账户登录</a>
//                             </li>
//                             <li class="item">
//                                 <a onClick={this.goto.bind(this, '/phoneLogin')}>手机动态码登录</a>
//                             </li>
//                         </ul>
//                         <Interval/>
//                     </div>


//                     <Form onSubmit={this.handleSubmit} className="login-form">
//                         <Form.Item class="ele">
//                             {getFieldDecorator('username', {
//                                 rules: [{ required: true, message: 'Please input your username!' }],
//                             })(
//                                 <>
//                                 <div class="label">账<span class="ml">户</span>
//                                 </div>
//                                 <Input
//                                     placeholder="用户名/手机号"
//                                 />
//                                 </>
//                                 ,
//                             )}
//                         </Form.Item>
//                         <Form.Item>
//                             {getFieldDecorator('password', {
//                                 rules: [{ required: true, message: 'Please input your Password!' }],
//                             })(
//                                 <>
//                                 <div class="label">密<span class="ml">码</span>
//                                 </div>
//                                 <Input
//                                     type="password"
//                                     placeholder="请输入密码"
//                                 />
//                                 </>
//                                 ,
//                             )}
//                         </Form.Item>
//                         {/* <a className="login-form-forgot" href="">
//                                 Forgot password
//                             </a> */}
//                                <div class="reg-ele wrapper">
//                             <a ui-sref="pwd.forget" class="reg-link" href="#/pwd/forget">找回密码</a>
//                             <span>|</span>
//                             <a ui-sref="reg" class="reg-link" href="#/reg">立即注册</a>
//                         </div>
//                         <Form.Item className="LRButton">

//                             <Button type="primary" htmlType="submit" className="login-form-button">
//                                 Log in
//                             </Button>

//                         </Form.Item>
//                     </Form>
//                     {/* ); */}








//                     {/* <form class="form dn ng-pristine ng-valid show" my-validform="" ng-class="{show:login_nav == 1}" data-tap-disabled="true">
//                         <div class="ele">
//                             <div class="wrapper">
//                                 <div class="label">账<span class="ml">户</span>
//                                 </div>
//                                 <input type="text" ng-model="user.username" placeholder="用户名/手机号" datatype="*" nullmsg="用户名/手机号" class="ng-pristine ng-untouched ng-valid ng-empty" />
//                             </div>
//                         </div>
//                         <div class="ele last">
//                             <div class="wrapper">
//                                 <div class="label">密<span class="ml">码</span>
//                                 </div>
//                                 <input type="text" ng-model="user.password" onfocus="this.type='password'" placeholder="请输入密码" datatype="*" nullmsg="请输入密码" class="ng-pristine ng-untouched ng-valid ng-empty" />
//                             </div>
//                         </div>
//                         <div class="reg-ele wrapper">
//                             <a ui-sref="pwd.forget" class="reg-link" href="#/pwd/forget">找回密码</a>
//                             <span>|</span>
//                             <a ui-sref="reg" class="reg-link" href="#/reg">立即注册</a>
//                         </div>
//                         <div class="btn wrapper">
//                             <input type="submit" value="提 交" />
//                         </div>
//                     </form> */}






//                 </div>
//             </div>
//         )
//     }
// }
// const WrappedNormalLoginForm = Form.create({ name: 'user_login' })(UserLoginForm);


// text222222222222222222222222222222222222222


// class NormalLoginForm extends React.Component {
// // constructor(props){
// //   super(props);
// // }
//   handleSubmit = e => {
//     e.preventDefault();
//     console.log(this.props.form)
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         console.log('Received values of form: ', values);
//       }
//     });
//   };

//  //跳转页面
//     // goto(path) {
//     //     this.props.history.push(path)
//     // }

//   handleConfirmBlur = e => {
//     const { value } = e.target;
//     // this.setState({ confirmDirty: this.state.confirmDirty || !!value });
//     console.log(value);
//     this.error();
//   };
//   error = () => {
//     message.config({
//       top: 250,
//       duration: 2,
//       maxCount: 3,
//     });
//     message.error('请输入账号！');

//   };
//   render() {
//     const { getFieldDecorator } = this.props.form;
//     return (

//         // <>


//           // <Form onSubmit={this.handleSubmit} className="login-form">
//           //   <Form.Item>
//           //     {getFieldDecorator('username', {
//           //       rules: [{ required: true, message: 'Please input your username!' }],
//           //     })(
//           //       <Input
//           //         prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//           //         placeholder="Username"
//           //         onBlur={this.handleConfirmBlur}
//           //       />,
//           //     )}
//           //   </Form.Item>
//           //   <Form.Item>
//           //     {getFieldDecorator('password', {
//           //       rules: [{ required: true, message: 'Please input your Password!' }],
//           //     })(
//           //       <Input
//           //         prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
//           //         type="password"
//           //         placeholder="Password"
//           //       />
//           //     )}
//           //   </Form.Item>
//           //   <Form.Item>

//           //     <a className="login-form-forgot" href="">
//           //       Forgot password
//           // </a>
//           //     <Button type="primary" htmlType="submit" className="login-form-button">
//           //       Log in
//           // </Button>
//           //     Or <a href="">register now!</a>
//           //   </Form.Item>
//           // </Form>
//       //     <Form onSubmit={this.handleSubmit} className="login-form">
//       //   <Form.Item>
//       //     {getFieldDecorator('username', {
//       //       rules: [{ required: true, message: 'Please input your username!' }],
//       //     })(
//       //       <Input
//       //         prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//       //         placeholder="Username"
//       //       />,
//       //     )}
//       //   </Form.Item>
//       //   <Form.Item>
//       //     {getFieldDecorator('password', {
//       //       rules: [{ required: true, message: 'Please input your Password!' }],
//       //     })(
//       //       <Input
//       //         prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
//       //         type="password"
//       //         placeholder="Password"
//       //       />,
//       //     )}
//       //   </Form.Item>
//       //   <Form.Item>

//       //     <a className="login-form-forgot" href="">
//       //       Forgot password
//       //     </a>
//       //     <Button type="primary" htmlType="submit" className="login-form-button">
//       //       Log in
//       //     </Button>
//       //     Or <a href="">register now!</a>
//       //   </Form.Item>
//       // </Form>
//           // </>

//     );
//   }
// }

// const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);





// text33333333333333333333333

// class NormalLoginForm extends React.Component {
//     handleSubmit = e => {
//       e.preventDefault();
//       this.props.form.validateFields((err, values) => {
//         if (!err) {
//           console.log('Received values of form: ', values);
//         }
//       });
//     };

//     render() {
//       const { getFieldDecorator } = this.props.form;
//       return (
//         <Form onSubmit={this.handleSubmit} className="login-form">
//           <Form.Item>
//             {getFieldDecorator('username', {
//               rules: [{ required: true, message: 'Please input your username!' }],
//             })(
//               <Input
//                 prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                 placeholder="Username"
//               />,
//             )}
//           </Form.Item>
//           <Form.Item>
//             {getFieldDecorator('password', {
//               rules: [{ required: true, message: 'Please input your Password!' }],
//             })(
//               <Input
//                 prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                 type="password"
//                 placeholder="Password"
//               />,
//             )}
//           </Form.Item>
//           <Form.Item>
//             {getFieldDecorator('remember', {
//               valuePropName: 'checked',
//               initialValue: true,
//             })(<Checkbox>Remember me</Checkbox>)}
//             <a className="login-form-forgot" href="">
//               Forgot password
//             </a>
//             <Button type="primary" htmlType="submit" className="login-form-button">
//               Log in
//             </Button>
//             Or <a href="">register now!</a>
//           </Form.Item>
//         </Form>
//       );
//     }
//   }

//   const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);










// text44444444444444444444444444444444444444444444444444444...............



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
        this.props.form.validateFields((err, values) => {
            console.log(values);
            if (!values.username) {
                this.error("请输入账号！")
                return;
            }
            if (!values.password) {
                this.error("请输入密码！");
                return;
            }
            if (!err) {
                // console.log('Received values of form: ', values);
                // console.log("正确");
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
                        <a ui-sref="reg" class="reg-link"onClick={this.goto.bind(this,"/reg")}>立即注册</a>
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