import React, { Component } from 'react';
import '../css/New.css'
// import { Icon } from 'antd';
import Interval from './Interval';
import { PageHeader, Drawer, Button, Radio } from 'antd';
class New extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         visible: false,
    //         placement: 'top'
    //     }

    // }
    state = { visible: false };
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
        console.log(this.state)
    };
    render() {
        return (
            <div className="new">
                <header class="header-nav">
                    <div class="flex flex-main-justify header-box">
                        <div class="header-left">
                            <a href="javascript:void(0);" class="iconfont icon-leftarrow">
                                ‹
                            </a>
                        </div>
                        <div class="header-middle text-overflow flex flex-cross-center">
                            <div class="title">买新房</div>
                        </div>
                        <div class="header-right">
                            <a href="javascript:void(0)" class="iconfont user-icon user">
                                <img src="http://uc.0356f.com/avatar.php?uid=1360&amp;size=big" />
                            </a>
                        </div>
                    </div>
                </header>
                {/* body */}
                <div className='xf-list flex-column'>

                    <div class="bg-f5" style={{ height: '1.84rem', flexGrow: 0, flexShrink: 0 }}>
                        <div class="search-toolbar bg-fff" style={{ top: '0.88rem' }}>
                            <div class="search-input bd-bottom bg-f5">
                                <div class="search-input-text c-999">
                                    <i class="iconfont icon-search"></i>请输入小区名称或关键字
      </div>
                            </div>
                            <div class="search-page" style={{ display: 'none' }}>
                                <form action="javascript:return true">
                                    <div class="search-header bd-bottom clearfix">
                                        <div class="fl search-container">
                                            <i class="iconfont icon-search"></i>
                                            <input type="text" placeholder="请输入小区名称或关键字" class="bg-f5" />
                                            <i class="iconfont icon-closed" style={{ display: 'none' }}></i>
                                        </div>
                                        <div class="fr cancle">取消</div>
                                    </div>
                                </form>
                                <div class="search-xf-filter">
                                    <div class="search-select">
                                        <ul >
                                            <li class="container">区域<span class="fr c-999">不限</span>
                                            </li>
                                            <li class="container">价格<span class="fr c-999">不限</span></li>
                                            <li class="container">特色<span class="fr c-999">不限</span></li>
                                        </ul>
                                        <div class="select-btn flex flex-main-justify">
                                            <button >重置</button>
                                            <button >确认</button>
                                        </div>
                                    </div>
                                    <div class="filter-container" style={{ display: 'none' }}>
                                        <div class="line-filter">
                                            <ul >
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 条件 */}
                        <div className="filter-wrapper">
                            <div class="confition" ><span onClick={this.showDrawer}>区域▼</span>
                                <Drawer
                                    title="区域"
                                    placement="top"
                                    // closable={false}
                                    onClose={this.onClose}
                                    visible={this.state.visible}
                                >
                                    <p>附近</p>
                                    <p>近学校</p>
                                    <p>进乡村</p>
                                </Drawer>
                            </div>
                            <div class="confition">价格▼</div>
                            <div class="confition">户型▼</div>
                            <div class="confition">筛选▼</div>

                        </div>
                    </div>


                    {/* list */}
                    <div class="list-layout" style={{ overflowY: 'auto', flexgrow: '1' }}>
                        <div class="xf-list-component">
                            <ul >
                                <li class="item">
                                    <div class="inner">
                                        <a href="#/new/detail/xf/565" >
                                            <div class="thumb">
                                                <img src="https://pics-house.0356f.com/2019/0223/15509190384995830240.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span class="status bg-l-blue">待售</span>
                                            </div>
                                            <div class="info flex flex-main-justify flex-dir-top">
                                                <div class="title">书香门第</div>
                                                <div class="area-distance c-999">
                                                    <span class="area">
                                                        <span >西北片区</span>
                                                        <span class="t">景西北路</span>
                                                    </span>
                                                </div>
                                                <div class="tags">
                                                    <span class="house-tag">小户型</span>
                                                    <span class="house-tag">配套商品房</span>
                                                    <span class="house-tag">投资地产</span>
                                                </div>
                                                <div class="price">
                                                    <span class="no">价格待定</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="tel:4008500356,8138" class="call iconfont icon-tel"></a>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="inner">
                                        <a href="#/new/detail/xf/565" >
                                            <div class="thumb">
                                                <img src="https://pics-house.0356f.com/2019/0223/15509190384995830240.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span class="status bg-l-blue">待售</span>
                                            </div>
                                            <div class="info flex flex-main-justify flex-dir-top">
                                                <div class="title">书香门第</div>
                                                <div class="area-distance c-999">
                                                    <span class="area">
                                                        <span >西北片区</span>
                                                        <span class="t">景西北路</span>
                                                    </span>
                                                </div>
                                                <div class="tags">
                                                    <span class="house-tag">小户型</span>
                                                    <span class="house-tag">配套商品房</span>
                                                    <span class="house-tag">投资地产</span>
                                                </div>
                                                <div class="price">
                                                    <span class="no">价格待定</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="tel:4008500356,8138" class="call iconfont icon-tel"></a>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="inner">
                                        <a href="#/new/detail/xf/565" >
                                            <div class="thumb">
                                                <img src="https://pics-house.0356f.com/2019/0223/15509190384995830240.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span class="status bg-l-blue">待售</span>
                                            </div>
                                            <div class="info flex flex-main-justify flex-dir-top">
                                                <div class="title">书香门第</div>
                                                <div class="area-distance c-999">
                                                    <span class="area">
                                                        <span >西北片区</span>
                                                        <span class="t">景西北路</span>
                                                    </span>
                                                </div>
                                                <div class="tags">
                                                    <span class="house-tag">小户型</span>
                                                    <span class="house-tag">配套商品房</span>
                                                    <span class="house-tag">投资地产</span>
                                                </div>
                                                <div class="price">
                                                    <span class="no">价格待定</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="tel:4008500356,8138" class="call iconfont icon-tel"></a>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="inner">
                                        <a href="#/new/detail/xf/565" >
                                            <div class="thumb">
                                                <img src="https://pics-house.0356f.com/2019/0223/15509190384995830240.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span class="status bg-l-blue">待售</span>
                                            </div>
                                            <div class="info flex flex-main-justify flex-dir-top">
                                                <div class="title">书香门第</div>
                                                <div class="area-distance c-999">
                                                    <span class="area">
                                                        <span >西北片区</span>
                                                        <span class="t">景西北路</span>
                                                    </span>
                                                </div>
                                                <div class="tags">
                                                    <span class="house-tag">小户型</span>
                                                    <span class="house-tag">配套商品房</span>
                                                    <span class="house-tag">投资地产</span>
                                                </div>
                                                <div class="price">
                                                    <span class="no">价格待定</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="tel:4008500356,8138" class="call iconfont icon-tel"></a>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="inner">
                                        <a href="#/new/detail/xf/565" >
                                            <div class="thumb">
                                                <img src="https://pics-house.0356f.com/2019/0223/15509190384995830240.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span class="status bg-l-blue">待售</span>
                                            </div>
                                            <div class="info flex flex-main-justify flex-dir-top">
                                                <div class="title">书香门第</div>
                                                <div class="area-distance c-999">
                                                    <span class="area">
                                                        <span >西北片区</span>
                                                        <span class="t">景西北路</span>
                                                    </span>
                                                </div>
                                                <div class="tags">
                                                    <span class="house-tag">小户型</span>
                                                    <span class="house-tag">配套商品房</span>
                                                    <span class="house-tag">投资地产</span>
                                                </div>
                                                <div class="price">
                                                    <span class="no">价格待定</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="tel:4008500356,8138" class="call iconfont icon-tel"></a>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="inner">
                                        <a href="#/new/detail/xf/565" >
                                            <div class="thumb">
                                                <img src="https://pics-house.0356f.com/2019/0223/15509190384995830240.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span class="status bg-l-blue">待售</span>
                                            </div>
                                            <div class="info flex flex-main-justify flex-dir-top">
                                                <div class="title">书香门第</div>
                                                <div class="area-distance c-999">
                                                    <span class="area">
                                                        <span >西北片区</span>
                                                        <span class="t">景西北路</span>
                                                    </span>
                                                </div>
                                                <div class="tags">
                                                    <span class="house-tag">小户型</span>
                                                    <span class="house-tag">配套商品房</span>
                                                    <span class="house-tag">投资地产</span>
                                                </div>
                                                <div class="price">
                                                    <span class="no">价格待定</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="tel:4008500356,8138" class="call iconfont icon-tel"></a>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="inner">
                                        <a href="#/new/detail/xf/565" >
                                            <div class="thumb">
                                                <img src="https://pics-house.0356f.com/2019/0223/15509190384995830240.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span class="status bg-l-blue">待售</span>
                                            </div>
                                            <div class="info flex flex-main-justify flex-dir-top">
                                                <div class="title">书香门第</div>
                                                <div class="area-distance c-999">
                                                    <span class="area">
                                                        <span >西北片区</span>
                                                        <span class="t">景西北路</span>
                                                    </span>
                                                </div>
                                                <div class="tags">
                                                    <span class="house-tag">小户型</span>
                                                    <span class="house-tag">配套商品房</span>
                                                    <span class="house-tag">投资地产</span>
                                                </div>
                                                <div class="price">
                                                    <span class="no">价格待定</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="tel:4008500356,8138" class="call iconfont icon-tel"></a>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="inner">
                                        <a href="#/new/detail/xf/565" >
                                            <div class="thumb">
                                                <img src="https://pics-house.0356f.com/2019/0223/15509190384995830240.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span class="status bg-l-blue">待售</span>
                                            </div>
                                            <div class="info flex flex-main-justify flex-dir-top">
                                                <div class="title">书香门第</div>
                                                <div class="area-distance c-999">
                                                    <span class="area">
                                                        <span >西北片区</span>
                                                        <span class="t">景西北路</span>
                                                    </span>
                                                </div>
                                                <div class="tags">
                                                    <span class="house-tag">小户型</span>
                                                    <span class="house-tag">配套商品房</span>
                                                    <span class="house-tag">投资地产</span>
                                                </div>
                                                <div class="price">
                                                    <span class="no">价格待定</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="tel:4008500356,8138" class="call iconfont icon-tel"></a>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="inner">
                                        <a href="#/new/detail/xf/565" >
                                            <div class="thumb">
                                                <img src="https://pics-house.0356f.com/2019/0223/15509190384995830240.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span class="status bg-l-blue">待售</span>
                                            </div>
                                            <div class="info flex flex-main-justify flex-dir-top">
                                                <div class="title">书香门第</div>
                                                <div class="area-distance c-999">
                                                    <span class="area">
                                                        <span >西北片区</span>
                                                        <span class="t">景西北路</span>
                                                    </span>
                                                </div>
                                                <div class="tags">
                                                    <span class="house-tag">小户型</span>
                                                    <span class="house-tag">配套商品房</span>
                                                    <span class="house-tag">投资地产</span>
                                                </div>
                                                <div class="price">
                                                    <span class="no">价格待定</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="tel:4008500356,8138" class="call iconfont icon-tel"></a>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="inner">
                                        <a href="#/new/detail/xf/565" >
                                            <div class="thumb">
                                                <img src="https://pics-house.0356f.com/2019/0223/15509190384995830240.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span class="status bg-l-blue">待售</span>
                                            </div>
                                            <div class="info flex flex-main-justify flex-dir-top">
                                                <div class="title">书香门第</div>
                                                <div class="area-distance c-999">
                                                    <span class="area">
                                                        <span >西北片区</span>
                                                        <span class="t">景西北路</span>
                                                    </span>
                                                </div>
                                                <div class="tags">
                                                    <span class="house-tag">小户型</span>
                                                    <span class="house-tag">配套商品房</span>
                                                    <span class="house-tag">投资地产</span>
                                                </div>
                                                <div class="price">
                                                    <span class="no">价格待定</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="tel:4008500356,8138" class="call iconfont icon-tel"></a>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="inner">
                                        <a href="#/new/detail/xf/565" >
                                            <div class="thumb">
                                                <img src="https://pics-house.0356f.com/2019/0223/15509190384995830240.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span class="status bg-l-blue">待售</span>
                                            </div>
                                            <div class="info flex flex-main-justify flex-dir-top">
                                                <div class="title">书香门第</div>
                                                <div class="area-distance c-999">
                                                    <span class="area">
                                                        <span >西北片区</span>
                                                        <span class="t">景西北路</span>
                                                    </span>
                                                </div>
                                                <div class="tags">
                                                    <span class="house-tag">小户型</span>
                                                    <span class="house-tag">配套商品房</span>
                                                    <span class="house-tag">投资地产</span>
                                                </div>
                                                <div class="price">
                                                    <span class="no">价格待定</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="tel:4008500356,8138" class="call iconfont icon-tel"></a>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="inner">
                                        <a href="#/new/detail/xf/565" >
                                            <div class="thumb">
                                                <img src="https://pics-house.0356f.com/2019/0223/15509190384995830240.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span class="status bg-l-blue">待售</span>
                                            </div>
                                            <div class="info flex flex-main-justify flex-dir-top">
                                                <div class="title">书香门第</div>
                                                <div class="area-distance c-999">
                                                    <span class="area">
                                                        <span >西北片区</span>
                                                        <span class="t">景西北路</span>
                                                    </span>
                                                </div>
                                                <div class="tags">
                                                    <span class="house-tag">小户型</span>
                                                    <span class="house-tag">配套商品房</span>
                                                    <span class="house-tag">投资地产</span>
                                                </div>
                                                <div class="price">
                                                    <span class="no">价格待定</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="tel:4008500356,8138" class="call iconfont icon-tel"></a>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="inner">
                                        <a href="#/new/detail/xf/565" >
                                            <div class="thumb">
                                                <img src="https://pics-house.0356f.com/2019/0223/15509190384995830240.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span class="status bg-l-blue">待售</span>
                                            </div>
                                            <div class="info flex flex-main-justify flex-dir-top">
                                                <div class="title">书香门第</div>
                                                <div class="area-distance c-999">
                                                    <span class="area">
                                                        <span >西北片区</span>
                                                        <span class="t">景西北路</span>
                                                    </span>
                                                </div>
                                                <div class="tags">
                                                    <span class="house-tag">小户型</span>
                                                    <span class="house-tag">配套商品房</span>
                                                    <span class="house-tag">投资地产</span>
                                                </div>
                                                <div class="price">
                                                    <span class="no">价格待定</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="tel:4008500356,8138" class="call iconfont icon-tel"></a>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="inner">
                                        <a href="#/new/detail/xf/565" >
                                            <div class="thumb">
                                                <img src="https://pics-house.0356f.com/2019/0223/15509190384995830240.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span class="status bg-l-blue">待售</span>
                                            </div>
                                            <div class="info flex flex-main-justify flex-dir-top">
                                                <div class="title">书香门第</div>
                                                <div class="area-distance c-999">
                                                    <span class="area">
                                                        <span >西北片区</span>
                                                        <span class="t">景西北路</span>
                                                    </span>
                                                </div>
                                                <div class="tags">
                                                    <span class="house-tag">小户型</span>
                                                    <span class="house-tag">配套商品房</span>
                                                    <span class="house-tag">投资地产</span>
                                                </div>
                                                <div class="price">
                                                    <span class="no">价格待定</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="tel:4008500356,8138" class="call iconfont icon-tel"></a>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="inner">
                                        <a href="#/new/detail/xf/565" >
                                            <div class="thumb">
                                                <img src="https://pics-house.0356f.com/2019/0223/15509190384995830240.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span class="status bg-l-blue">待售</span>
                                            </div>
                                            <div class="info flex flex-main-justify flex-dir-top">
                                                <div class="title">书香门第</div>
                                                <div class="area-distance c-999">
                                                    <span class="area">
                                                        <span >西北片区</span>
                                                        <span class="t">景西北路</span>
                                                    </span>
                                                </div>
                                                <div class="tags">
                                                    <span class="house-tag">小户型</span>
                                                    <span class="house-tag">配套商品房</span>
                                                    <span class="house-tag">投资地产</span>
                                                </div>
                                                <div class="price">
                                                    <span class="no">价格待定</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="tel:4008500356,8138" class="call iconfont icon-tel"></a>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="inner">
                                        <a href="#/new/detail/xf/565" >
                                            <div class="thumb">
                                                <img src="https://pics-house.0356f.com/2019/0223/15509190384995830240.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span class="status bg-l-blue">待售</span>
                                            </div>
                                            <div class="info flex flex-main-justify flex-dir-top">
                                                <div class="title">书香门第</div>
                                                <div class="area-distance c-999">
                                                    <span class="area">
                                                        <span >西北片区</span>
                                                        <span class="t">景西北路</span>
                                                    </span>
                                                </div>
                                                <div class="tags">
                                                    <span class="house-tag">小户型</span>
                                                    <span class="house-tag">配套商品房</span>
                                                    <span class="house-tag">投资地产</span>
                                                </div>
                                                <div class="price">
                                                    <span class="no">价格待定</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="tel:4008500356,8138" class="call iconfont icon-tel"></a>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="inner">
                                        <a href="#/new/detail/xf/565" >
                                            <div class="thumb">
                                                <img src="https://pics-house.0356f.com/2019/0223/15509190384995830240.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span class="status bg-l-blue">待售</span>
                                            </div>
                                            <div class="info flex flex-main-justify flex-dir-top">
                                                <div class="title">书香门第</div>
                                                <div class="area-distance c-999">
                                                    <span class="area">
                                                        <span >西北片区</span>
                                                        <span class="t">景西北路</span>
                                                    </span>
                                                </div>
                                                <div class="tags">
                                                    <span class="house-tag">小户型</span>
                                                    <span class="house-tag">配套商品房</span>
                                                    <span class="house-tag">投资地产</span>
                                                </div>
                                                <div class="price">
                                                    <span class="no">价格待定</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="tel:4008500356,8138" class="call iconfont icon-tel"></a>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="inner">
                                        <a href="#/new/detail/xf/565" >
                                            <div class="thumb">
                                                <img src="https://pics-house.0356f.com/2019/0223/15509190384995830240.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span class="status bg-l-blue">待售</span>
                                            </div>
                                            <div class="info flex flex-main-justify flex-dir-top">
                                                <div class="title">书香门第</div>
                                                <div class="area-distance c-999">
                                                    <span class="area">
                                                        <span >西北片区</span>
                                                        <span class="t">景西北路</span>
                                                    </span>
                                                </div>
                                                <div class="tags">
                                                    <span class="house-tag">小户型</span>
                                                    <span class="house-tag">配套商品房</span>
                                                    <span class="house-tag">投资地产</span>
                                                </div>
                                                <div class="price">
                                                    <span class="no">价格待定</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="tel:4008500356,8138" class="call iconfont icon-tel"></a>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="inner">
                                        <a href="#/new/detail/xf/565" >
                                            <div class="thumb">
                                                <img src="https://pics-house.0356f.com/2019/0223/15509190384995830240.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span class="status bg-l-blue">待售</span>
                                            </div>
                                            <div class="info flex flex-main-justify flex-dir-top">
                                                <div class="title">书香门第</div>
                                                <div class="area-distance c-999">
                                                    <span class="area">
                                                        <span >西北片区</span>
                                                        <span class="t">景西北路</span>
                                                    </span>
                                                </div>
                                                <div class="tags">
                                                    <span class="house-tag">小户型</span>
                                                    <span class="house-tag">配套商品房</span>
                                                    <span class="house-tag">投资地产</span>
                                                </div>
                                                <div class="price">
                                                    <span class="no">价格待定</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="tel:4008500356,8138" class="call iconfont icon-tel"></a>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="inner">
                                        <a href="#/new/detail/xf/565" >
                                            <div class="thumb">
                                                <img src="https://pics-house.0356f.com/2019/0223/15509190384995830240.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span class="status bg-l-blue">待售</span>
                                            </div>
                                            <div class="info flex flex-main-justify flex-dir-top">
                                                <div class="title">书香门第</div>
                                                <div class="area-distance c-999">
                                                    <span class="area">
                                                        <span >西北片区</span>
                                                        <span class="t">景西北路</span>
                                                    </span>
                                                </div>
                                                <div class="tags">
                                                    <span class="house-tag">小户型</span>
                                                    <span class="house-tag">配套商品房</span>
                                                    <span class="house-tag">投资地产</span>
                                                </div>
                                                <div class="price">
                                                    <span class="no">价格待定</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="tel:4008500356,8138" class="call iconfont icon-tel"></a>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="inner">
                                        <a href="#/new/detail/xf/565" >
                                            <div class="thumb">
                                                <img src="https://pics-house.0356f.com/2019/0223/15509190384995830240.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span class="status bg-l-blue">待售</span>
                                            </div>
                                            <div class="info flex flex-main-justify flex-dir-top">
                                                <div class="title">书香门第</div>
                                                <div class="area-distance c-999">
                                                    <span class="area">
                                                        <span >西北片区</span>
                                                        <span class="t">景西北路</span>
                                                    </span>
                                                </div>
                                                <div class="tags">
                                                    <span class="house-tag">小户型</span>
                                                    <span class="house-tag">配套商品房</span>
                                                    <span class="house-tag">投资地产</span>
                                                </div>
                                                <div class="price">
                                                    <span class="no">价格待定</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="tel:4008500356,8138" class="call iconfont icon-tel"></a>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="inner">
                                        <a href="#/new/detail/xf/565" >
                                            <div class="thumb">
                                                <img src="https://pics-house.0356f.com/2019/0223/15509190384995830240.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span class="status bg-l-blue">待售</span>
                                            </div>
                                            <div class="info flex flex-main-justify flex-dir-top">
                                                <div class="title">书香门第</div>
                                                <div class="area-distance c-999">
                                                    <span class="area">
                                                        <span >西北片区</span>
                                                        <span class="t">景西北路</span>
                                                    </span>
                                                </div>
                                                <div class="tags">
                                                    <span class="house-tag">小户型</span>
                                                    <span class="house-tag">配套商品房</span>
                                                    <span class="house-tag">投资地产</span>
                                                </div>
                                                <div class="price">
                                                    <span class="no">价格待定</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="tel:4008500356,8138" class="call iconfont icon-tel"></a>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="inner">
                                        <a href="#/new/detail/xf/565" >
                                            <div class="thumb">
                                                <img src="https://pics-house.0356f.com/2019/0223/15509190384995830240.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span class="status bg-l-blue">待售</span>
                                            </div>
                                            <div class="info flex flex-main-justify flex-dir-top">
                                                <div class="title">书香门第</div>
                                                <div class="area-distance c-999">
                                                    <span class="area">
                                                        <span >西北片区</span>
                                                        <span class="t">景西北路</span>
                                                    </span>
                                                </div>
                                                <div class="tags">
                                                    <span class="house-tag">小户型</span>
                                                    <span class="house-tag">配套商品房</span>
                                                    <span class="house-tag">投资地产</span>
                                                </div>
                                                <div class="price">
                                                    <span class="no">价格待定</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="tel:4008500356,8138" class="call iconfont icon-tel"></a>
                                    </div>
                                </li>





























                            </ul>
                        </div>
                        <div style={{ display: 'none' }}>
                            <div class="content-wrap bg-fff">
                                <div class="empty-msg c-999">
                                    暂无找到相关内容，看看别的吧
    </div>
                            </div>
                        </div>
                        <div class="infinite-loading-container bd-top" style={{ width: '100%', height: '1px' }}>
                            <div class="infinite-status-prompt" style={{ color: 'rgb(102, 102, 102)', fontSize: '14px', padding: '10px 0px', display: 'none' }}>
                                <span class="loading-bubbles" spinner="bubbles">
                                    <span class="bubble-item"></span>
                                    <span class="bubble-item"></span>
                                    <span class="bubble-item"></span>
                                    <span class="bubble-item"></span>
                                    <span class="bubble-item"></span>
                                    <span class="bubble-item"></span>
                                    <span class="bubble-item"></span>
                                    <span class="bubble-item"></span>
                                </span>
                            </div>
                            <div class="infinite-status-prompt" >
                                <span ></span>
                            </div>
                            <div class="infinite-status-prompt" style={{ display: 'none' }}>
                                <span ></span>
                            </div>
                            <div class="infinite-status-prompt" style={{ color: 'rgb(102, 102, 102)', fontSize: '14px', padding: '10px 0px', display: 'none' }}>

                                <br />
                                <button class="btn-try-infinite">Retry</button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}
export default New;