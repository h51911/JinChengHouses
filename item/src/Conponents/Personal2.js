import React, { Component } from 'react';
import '../css/Personal2.scss'
import Menu from './Menu';
import { withRouter } from 'react-router-dom';
import { message, Button, Icon } from 'antd';
class Personal2 extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.success = this.success.bind(this)
        this.error = this.error.bind(this);
        this.goto = this.goto.bind(this);
    }
    //跳转
    goto(path) {
        this.props.history.push(path);
    }
    error() {
        message.error('请先登录，登录即可进入页面！');
    };
    success(str) {
        message.success(str)
    }
    logout = () => {
        this.success('退出成功！');
        window.localStorage.removeItem("user")
        this.goto('/home')
    }

    render() {
        return (
            <div className="Personal2">
                <header class="title-bar title-bar-hasbg">
                    <a class="iconfont back" onClick={() => this.props.history.goBack()}>‹</a>
                    <h1 class="ng-binding">个人资料</h1>
                    <div class="operate">

                    </div>
                </header>
                {/* body */}
                <div ui-view="content" >
                    <div class="my-info">
                        <div class="common-form">
                            <a class="common-form-ele pic-ele">
                                <div class="label">头像</div>
                                <div class="pic">
                                    <img src="http://uc.0356f.com/avatar.php?uid=1360&amp;size=big" onClick={() => this.props.history.goBack()} />
                                </div>
                            </a>
                            <a class="common-form-ele">
                                <div class="label">用户名</div>
                                <div class="text ng-binding">{window.localStorage.getItem('user')}</div>
                            </a>
                            <a class="common-form-ele" >
                                <div class="label">修改密码</div>
                                <div class="text has-arrow">
                                    <Icon type="right" />
                                </div>
                            </a>
                            <a class="common-form-ele">
                                <div class="label">手机号码</div>
                                <div class="text has-arrow">
                                    <span class="ng-binding">{window.localStorage.getItem('user').slice(0,3)}****{window.localStorage.getItem('user').slice(8)}</span>
                                    <Icon type="right" />
                                </div>
                            </a>
                        </div>
                        <a class="quit-btn" onClick={this.logout}>退出登录</a>
                    </div>
                </div>




            </div>
        )
    }
}
export default withRouter(Personal2);