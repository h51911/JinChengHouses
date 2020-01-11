/**
 *  Redux-saga
    * 利用生成器函数实现业务逻辑
    * redux-saga在执行生成器函数时自动帮我们执行next()
 */

import { call, apply, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import {My} from '../../api';
import api from '../../api'
import { message } from 'antd'
import Axios from 'axios';
// import { Form, Icon, Input, Button, Checkbox, message, Alert } from 'antd';

//  function * helloSaga(){
//     console.log('start');
//     yield 'saga';
//     console.log(1)
//     yield 'mama';
//     console.log('end')
//  }

// function * getStock({payload}){

//     // My.get(`/goods/${payload.goods_id}/stock`)
//     let {data} = yield call(My.get,`/goods/${payload.goods_id}/stock`)

//     // 商品数量不允许超过库存数量
//     if(payload.goods_qty > data.stock){
//        payload.goods_qty = data.stock;
//        message.error('库存不足');
//     }

//     console.log('getStock',payload.goods_qty)
//     yield put({
//         type:'CHANGE_QTY',
//         payload
//     })

// }
//del
// function* del({ payload }) {
//     let { sid, user } = payload;
//     //删除数据库的商品
//     let data = await Axios.get('http://localhost:1912/goods2/del', {
//         params: {
//             sid,
//             user
//         }
//     })



//     //删除redux的cartlist数据({id})
//     yield put({
//         type: 'REMOVE_FROM_CART',
//         payload
//     })
// }
//添加商品
function * add({ payload }) {
    //数据库添加
    let data = yield Axios.get('http://localhost:1912/goods2/addShop', {
        params: {
            payload
        }
    });
    console.log(data, "插入的数据")
    if (data.data.code) {
        //本地
        yield put({
            type: 'ADD_TO_CART',
            payload
        })

        message.success('预约成功！');
    } else {
        message.error('预约失败，你已经预约了！');
    }


}
//获取数据
function * get() {
    // let data = await Axios.get('http://localhost:1912/goods2/getShop', {
    //     params: {
    //         payload
    //     }
    // })
    let data = yield Axios.get('http://localhost:1912/goods2/getShop', {
        params: {
            user: window.localStorage.getItem("user")
        }
    });

    console.log("get", data, data.data, '解构', ...(data.data))
    let res = data.data
    yield put({
        type: 'GET_CART',
        payload: res
    })


}
//清空购物车
function * clear() {
    let data = yield Axios.get('http://localhost:1912/goods2/clearShop', {
        params: {
            user: window.localStorage.getItem("user")
        }
    });

    yield put({
        type: 'CLEAR_CART',
    })
}
//登录
function* login() {

}

function* rootSaga() {
    console.log('rootSaga')
    // 监听用户指令
    // yield takeEvery("CHANGE_QTY_ASYNC", getStock)
    yield takeEvery("ADD_TO_CART_ASYNC", add)
    yield takeEvery("GET_CART_ASYNC", get)
    yield takeEvery("CLEAR_CART_ASYNC", clear)
    // yield takeLatest("CHANGE_QTY_ASYNC", getStock);//防抖
    // yield takeLatest("LOGIN_ASYNC", login);//防抖,方法,触发上面个的方法
}

export default rootSaga