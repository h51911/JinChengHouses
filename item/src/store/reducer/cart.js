export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHANGE_QTY = 'CHANGE_QTY';
export const CLEAR_CART = 'CLEAR_CART';
export const GET_CART = 'GET_CART'
//State ： 初始数据
let initState = {
    totalPrice:0,
    cartlist:[],
}
//Reducer:修改state方法，重写覆盖
const reducer = function(state=initState,{type,payload}){
    //修改state的代码
    switch(type){
        //获取数据
        case GET_CART:
            return {
                ...state,
                cartlist:[...payload,...state.cartlist]
            }


        //添加商品
        case ADD_TO_CART:
            return {
                ...state,
                cartlist:[payload,...state.cartlist]
            }
        //删除商品:{type:'REMOVE_FROM_CART',payload:id}
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartlist:state.cartlist.filter(item=>item.goods_id!=payload)
            }
        
        //修改数量{type:"change_qty",payload:{goods_id,goods_qty}}
        case CHANGE_QTY:
            return {
                ...state,
                cartlist:state.cartlist.map(item=>{
                    if(item.goods_id === payload.goods_id){
                        item.goods_qty = payload.goods_qty
                    }
                    return item;
                })
            }
        
        //清空购物车
        case CLEAR_CART:
            return {
                ...state,
                cartlist:[]
            }

        default:
            return state;






    }
}
export default reducer;