import React, { Component } from "react";
import '../css/Cart.scss'
import Axios from 'axios';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const mapStateToProps = state => {
    return {
        cartlist: state.cart.cartlist,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        //获取数据
        getDate() {
            dispatch({
                type: 'GET_CART_ASYNC',
                // payload: goods
            })
        },
        // 清空数据
        clear() {
            dispatch({
                type: 'CLEAR_CART_ASYNC',
                // payload: goods
            })
        }


    }

    // 工作中有可能使用的方式：
    // return bindActionCreators(cartActions,dispatch);
}

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    //生命周期
    componentDidMount() {
        //获取本地的数据
        if (!this.props.cartlist.length) {
            this.props.getDate();
        }
        console.log(this.props.cartlist, '获取的数据')
        console.log(this.props, '获取的数据')
        console.log("aaaaaaaaaaa")
        console.log('flag', this.state.flag)
    }
    render() {
        let { cartlist, clear } = this.props;
        return (
            <div id="cart">
                <div className="cart-head">
                    <a ng-click="header_back()" class="iconfont back" onClick={() => this.props.history.goBack()}>‹</a>
                    <h1 ng-bind="config.title" class="ng-binding">我的收藏</h1>
                </div >
                <div className="cart-body">
                    <ul>
                        {
                            cartlist.map(item => (
                                <li>
                                    <div class="infos" >
                                        <div class="pic">
                                            <img src={item.img} />
                                        </div>
                                        <div class="content" ng-class="{'disable' : x.sale_status != 1}">
                                            <div class="title ng-binding">{item.title}120平米住宅出售</div>
                                            <div class="aside" flex="main:justify">
                                                <div class="area ng-binding" ng-if="x.category == 1">3室2厅1卫 | 97㎡| 西南片区</div>
                                                <div class="price" ng-if="type == 2 &amp;&amp; x.price > 0">
                                                    <span class="em ng-binding">{(item.pf * 120) / 10}</span>万</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }

                    </ul>



                </div >
                <div className="cart-foot" onClick={clear.bind(this)}>
                    <span>一键清空</span>
                </div >
            </div>
        )
    }
}
Cart = connect(mapStateToProps, mapDispatchToProps)(Cart);
export default withRouter(Cart);