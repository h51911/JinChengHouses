import React, { Component } from 'react';
import '../css/New.css'
// import { Icon } from 'antd';
import Interval from './Interval';
import { Drawer, Spin, Icon ,message} from 'antd';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
class New extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            visible2: false,
            datas: [],
            page: 1,
            num: 10,
            sort: '',
            isok: true,
            totalPage: 0,
            flags: false,
            scroll: 0
        }
        this.goto = this.goto.bind(this);
        // console.log(Boolean(this.state.sort),'看值是对还是错')
        this.scrolls = this.scrolls.bind(this);
    }
    showDrawer = () => {
        this.setState({ visible: true });
    };
    showDrawer2 = () => {
        this.setState({ visible2: true })
    };
    onClose = () => {
        this.setState({ visible: false })
    }
    onClose3 = () => {
        this.setState({ visible2: false })
    }
    onClose2 = async (str, e) => {
        this.setState({
            visible2: false,
        });
        if (e) {
            Array.from(e.target.parentElement.children).forEach(item => item.style.color = "");
            e.target.style.color = "red"

            let { page, num, sort } = this.state;
            let { data } = await Axios.get('http://localhost:1912/goods2/getList', {
                params: {
                    page: 1,
                    num,
                    sort: str,
                }
            })
            console.log(data, '排序的')
            this.setState({
                page: 1,
                datas: data.list,
                sort: str,
            })
            message.success(`共搜到${data.total}个楼盘`);
        }
   
    };
    //生命周期
    async componentDidMount() {
        let { page, num, sort } = this.state;
        let { data } = await Axios.get('http://localhost:1912/goods2/getList', {
            params: {
                page,
                num,
                sort
            }
        })
        console.log(data, 'axios的值')
        this.setState({ datas: data.list, totalPage: data.totalPage })
        console.log(this.state.datas, '打印数据')
        message.success(`共搜到${data.total}个楼盘`);
    }
    //滚动事件
    async scrolls(e) {
        this.setState({ scroll: e.target.scrollTop })
        // console.log(e.target.scrollTop)
        e.target.scrollTop > 500 ? this.setState({ flags: true }) : this.setState({ flags: false })//判断返回顶部是否显示

        if (this.state.page < this.state.totalPage) {
            if (e.target.scrollTop >= e.target.scrollHeight - e.target.offsetHeight - 1) {
                if (this.state.isok) {
                    let { page, num, sort, datas } = this.state;
                    page = page + 1;
                    this.setState({ isok: false })
                    setTimeout(async () => {
                        let { data } = await Axios.get('http://localhost:1912/goods2/getList', {
                            params: {
                                page,
                                num,
                                sort
                            }
                        })
                        data.list.forEach(item => datas.push(item));
                        this.setState({
                            page,
                            datas,
                            isok: true,
                        })
                    }, 300)
                }

            }
        }

    }
    //返回顶部
    goTop = () => {
        let goNum = this.state.scroll;
        let timer = setInterval(() => {
            let goNum2 = Math.floor(-goNum / 5);
            goNum+=goNum2;
            document.querySelector(".xf-list-component").scrollTop = goNum;
            console.log(goNum)
            if (goNum <=0) {
                clearInterval(timer);
            }

        },13)
    }
    //跳转路由
    goto(id) {
        // this.props.history.push({ path : '/detail' ,params:{id:123} })
        // console.log(id)
        this.props.history.push('/detail/' + id)

    }
    render() {
        return (
            <div className="new">
                <header class="header-nav">
                    <div class="flex flex-main-justify header-box">
                        <div class="header-left">
                            <a href="javascript:void(0);" class="iconfont icon-leftarrow" onClick={() => this.props.history.goBack()}>
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
                                    <p style={{ color: "red" }} onClick={this.onClose}>附近</p>

                                </Drawer>
                            </div>
                            <div class="confition">
                                <span onClick={this.showDrawer2}>价格▼</span>
                                <Drawer
                                    title="价格"
                                    placement="top"
                                    // closable={false}
                                    onClose={this.onClose2}
                                    visible={this.state.visible2}
                                >
                                    <p onClick={this.onClose2.bind(this, 'ASC')}>价格从低到高</p>
                                    <p onClick={this.onClose2.bind(this, 'DESC')}>价格从高到低</p>

                                </Drawer>
                            </div>
                            <div class="confition">户型▼</div>
                            <div class="confition">筛选▼</div>

                        </div>
                    </div>


                    {/* list */}
                    <div class="list-layout" style={{ overflowY: 'auto', flexgrow: '1' }}>
                        <div class="xf-list-component" onScroll={this.scrolls}>
                            <Icon type="up-circle" theme="twoTone" className="goTop" style={this.state.flags ? { display: "block" } : { display: "none" }} onClick={this.goTop} />
                            <ul >
                                {
                                    this.state.datas.map(item => (
                                        <li class="item" data-id={item.id} onClick={this.goto.bind(this, item.sid)}>
                                            <div class="inner">
                                                <a>
                                                    <div class="thumb">
                                                        <img src={item.img} />
                                                        <span class="status bg-l-blue">待售</span>
                                                    </div>
                                                    <div class="info flex flex-main-justify flex-dir-top">
                                                        <div class="title">{item.title}</div>
                                                        <div class="area-distance c-999">
                                                            <span class="area">
                                                                {/* <span >西北片区</span>
                                                                <span class="t">景西北路</span> */}
                                                                {
                                                                    console.log(typeof (JSON.parse(`"${item.name}"`)))
                                                                    // JSON.parse(item.name).map(item2 => (
                                                                    //     <span>{item2}</span>
                                                                    // ))
                                                                }
                                                            </span>
                                                        </div>
                                                        <div class="tags">
                                                            {/* <span class="house-tag">小户型</span>
                                                            <span class="house-tag">配套商品房</span>
                                                            <span class="house-tag">投资地产</span> */}
                                                            {
                                                                // JSON.parse(item.tag).map(item3 => (
                                                                //     <span class="house-tag">{item3}</span>
                                                                // ))
                                                            }
                                                        </div>
                                                        <div class="price">
                                                            <span class="no">{item.pf == "0" ? '价格待定' : item.pf}</span>{item.pf == "0" ? '' : '元/㎡'}
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="tel:4008500356,8138" class="call iconfont icon-tel"></a>
                                            </div>
                                        </li>
                                    ))
                                }

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
                        <Spin style={!this.state.isok ? { display: "block" } : { display: 'none' }} />
                    </div>
                </div>



            </div>
        )
    }
}
export default withRouter(New);