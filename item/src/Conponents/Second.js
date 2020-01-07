import React, { Component } from 'react';
import '../css/Second.css'
import Menu from './Menu';
import Interval from './Interval';
import Shop2 from './Shop2';
class Second extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menu: [
                { "title": "买新房", "img": "./img/home/menu500000008.png" },
                { "title": "二手房", "img": "./img/home/menu500000009.png" },
                { "title": "租房", "img": "./img/home/menu500000010.png" },
                { "title": "小区房价", "img": "./img/home/menu500000011.png" },
                { "title": "带看新房", "img": "./img/home/menu500000012.png" },
                { "title": "学校找房", "img": "./img/home/menu500000013.png" },
                { "title": "房产资讯", "img": "./img/home/menu500000014.png" },
                { "title": "地图找房", "img": "./img/home/menu500000015.png" }
            ],
            menu2: [{
                "path": "housecost",
                "img": "https://www.0356f.com/resoldwap/images/two-house.png",
                "title": "查房价"
            }, {
                "path": "list/shop",
                "img": "https://www.0356f.com/resoldwap/images/two-shop.png",
                "title": "找门店"
            }, {
                "path": "my/category",
                "img": "https://www.0356f.com/resoldwap/images/two-zf.png",
                "title": "我要出租"
            }, {
                "path": "new/calculator",
                "img": "https://www.0356f.com/resoldwap/images/two-calculator.png",
                "title": "计算器"
            }],
            shop2: [{
                "bigTitle": "为您推荐二手房",
                "shop": [{
                    "img": "https://pics-house.0356f.com/2019/1225/15772807490208457896.jpg?imageView2/1/w/196/h/146/interlace/1/q/100",
                    "title": "龙度华府2室1厅1卫89平米住宅出售",
                    "id": "detail/sell/zz/1513",
                    "name": ["龙度华府", "2室1厅", "89平"],
                    "tag": [{
                        "title2": "优选",
                        "clssName": "youxuan-tag"
                    }, {
                        "title2": "拎包入住",
                        "clssName": "house-tag"
                    }],
                    "pf": "7865元/㎡"
                }, {
                    "img": "https://pics-house.0356f.com/2019/1225/15772432254366103128.jpeg?imageView2/1/w/196/h/146/interlace/1/q/100",
                    "title": "祥泰园3室2厅1卫131.3平米住宅出售",
                    "id": "detail/sell/zz/1514",
                    "name": ["祥泰园", "3室2厅", "131平"],
                    "tag": [{
                        "title2": "优选",
                        "clssName": "youxuan-tag"
                    }],
                    "pf": ""
                }, {
                    "img": "https://pics-house.0356f.com/2019/1223/15770882471713590780.jpg?imageView2/1/w/196/h/146/interlace/1/q/100",
                    "title": "福泽小区3室1厅1卫114平米住宅出售",
                    "id": "detail/sell/zz/1486",
                    "name": ["福泽小区", "3室1厅", "114平"],
                    "tag": [{
                        "title2": "优选",
                        "clssName": "youxuan-tag"
                    }, {
                        "title2": "拎包入住",
                        "clssName": "house-tag"
                    }],
                    "pf": "8684元/㎡"
                }]
            }],


        }
    }
    render() {
        return (
            <div className="Second">
                {/* head */}
                <div className="top-bg background-image" style={{ background: 'url("./img/Second/1.png")  no-repeat' }}>
                    <div style={{ textAlign: "center" }}>
                        <img src="https://pics-house.0356f.com/2019/0127/154855783325488149.png" />
                    </div>
                    <div className="search-toolbar bg-fff" style={{ top: '0rem' }}>
                        <div className="index-search">
                            <div className="search-box" style={{ position: "absolute", left: '0.24rem', bottom: '0.3rem' }}>
                                <i className="iconfont icon-search"></i>
                                请输入小区名称或关键字</div>
                        </div>
                        <div className="search-page" style={{ display: 'none' }}>
                            <form>
                                <div className="search-header bd-bottom clearfix">
                                    <div className="fl search-container">
                                        <i className="iconfont icon-search"></i>
                                        <input type="text" placeholder="请输入小区名称或关键字" className="bg-f5" />
                                        <i className="iconfont icon-closed" style={{ display: 'none' }}></i>
                                    </div>
                                    <div className="fr cancle">取消</div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* menu */}
                <div className="Home-menu">
                    <Menu data={this.state.menu} />
                </div>
                <div className="other-navs clearfix">
                    <ul className="SecondMenu">
                        {
                            this.state.menu2.map(item => (
                                <li key={item.path} data-id={item.path}>
                                    <a>
                                        <img src={item.img} />
                                        <span>{item.title}</span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul></div>
                {/* 推荐二手 */}
                <div className="tj-lists">
                    <Interval />
                    <Shop2 shop2={this.state.shop2} condition="二手" />
                </div>
                {/* 底部 */}
                <div  className="container dcontact">
                    <a  href="tel:13223565678">
                        <div  className="tel-box">
                            <span >晋城房产网</span>
                            客服热线：<em >13223565678</em>
                        </div>
                        <i  className="iconfont icon-tubiao49"></i>
                    </a>
                </div>





            </div>
        )
    }




}
export default Second;