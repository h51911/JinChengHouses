import React, { Component } from 'react';
import Swiper from 'swiper/js/swiper.js'
// import 'swiper/css/swiper.css'
import '../css/Home.css'
import Interval from './Interval'
import Menu from './Menu';
import Shop2 from './Shop2';
import { withRouter } from 'react-router-dom';
import { Icon } from 'antd';
import IconSite from '../prot'//Icon项目网址
const MyIcon = Icon.createFromIconfontCN({
    scriptUrl: IconSite, // 在 iconfont.cn 上生成
  });
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Carousel: ['./img/home/1.jpg', './img/home/2.jpg', './img/home/3.jpg'],
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
            menu2: [
                { "title": "看房团", "img": "./img/home/menu500000016.png" },
                { "title": "买房团", "img": "./img/home/menu500000017.png" },
                { "title": "查房价", "img": "./img/home/menu500000018.png" },
                { "title": "房产问答", "img": "./img/home/menu500000019.png" },
                { "title": "计算器", "img": "./img/home/menu500000020.png" }
            ],
            menu3: [{
                "title": ["重磅文件：关乎中心城区城中村改造", "市住建局关于购买商品房的提示性公告", "丹河新城金村起步区6宗用地竞拍成交，三大企业成功竞得", "2019年晋城市区中小学学区划分方案", "重磅文件：关乎中心城区城中村改造", "市住建局关于购买商品房的提示性公告"],
                "newss2": [{
                    "title1": "金匠园区规划",
                    "title2": "金匠园区最新规划",
                    "img": "https://pics-house.0356f.com/2019/1010/15706818429284381750.png?imageView2/1/w/375/h/150/interlace/1/q/100"
                }, {
                    "title1": "丹河新城详解",
                    "title2": "金村起步区规划详解",
                    "img": "https://pics-house.0356f.com/2019/1010/15706817112061375514.png?imageView2/1/w/375/h/150/interlace/1/q/100"
                }]
            }],
            shop1: [{
                "bigTitle": "找新房",
                "shop": [{
                    "img": "https://pics-house.0356f.com/2019/0218/15504547592302504919.jpg?imageView2/1/w/200/h/150/interlace/1/q/100",
                    "title": "御景花园",
                    "id": "new/detail/xf/67",
                    "name": ["东北片区", "红星东街"],
                    "tag": ["宜居生态", "邻校房", "公园地产"],
                    "price": "7600"
                }, {
                    "img": "https://pics-house.0356f.com/2019/0218/15504587375731106891.jpg?imageView2/1/w/200/h/150/interlace/1/q/100",
                    "title": "峰景香滨城",
                    "id": "new/detail/xf/64",
                    "name": ["西北片区", "晋春街"],
                    "tag": ["宜居生态", "小户型"],
                    "price": "6800"
                }, {
                    "img": "https://pics-house.0356f.com/2019/0218/15504547867781446289.jpg?imageView2/1/w/200/h/150/interlace/1/q/100",
                    "title": "皇城新区",
                    "id": "new/detail/xf/76",
                    "name": ["东南片区", "白水东街"],
                    "tag": ["宜居生态", "现房", "公园地产"],
                    "price": "7600"
                }, {
                    "img": "https://pics-house.0356f.com/2019/0419/15556501691386144934.png?imageView2/1/w/200/h/150/interlace/1/q/100",
                    "title": "德兴御景江山",
                    "id": "new/detail/xf/577",
                    "name": ["阳城", ""],
                    "tag": ["宜居生态", "水景地产", "公园地产", "邻校房"],
                    "price": "5300"
                }, {
                    "img": "https://pics-house.0356f.com/2019/0218/15504548842014388865.jpg?imageView2/1/w/200/h/150/interlace/1/q/100",
                    "title": "御景龙湾",
                    "id": "new/detail/xf/37",
                    "name": ["东南片区", "白水东街"],
                    "tag": ["宜居生态"],
                    "price": "6600"
                }, {
                    "img": "https://pics-house.0356f.com/2019/0218/15504817422553692716.jpg?imageView2/1/w/200/h/150/interlace/1/q/100",
                    "title": "梧桐苑",
                    "id": "new/detail/xf/534",
                    "name": ["西南片区", "金鼎路"],
                    "tag": ["宜居生态", "科技住宅", "公园地产"],
                    "price": "6450"
                }, {
                    "img": "https://pics-house.0356f.com/2019/0218/15504552651435686930.jpg?imageView2/1/w/200/h/150/interlace/1/q/100",
                    "title": "南洋花城",
                    "id": "new/detail/xf/1",
                    "name": ["东北片区", "太岳街"],
                    "tag": ["宜居生态", "水景地产", "公园地产"],
                    "price": "7300"
                }, {
                    "img": "https://pics-house.0356f.com/2019/0122/15481218956285110309.jpg?imageView2/1/w/200/h/150/interlace/1/q/100",
                    "title": "紫东国际",
                    "id": "new/detail/xf/10",
                    "name": ["西北片区", "泽州北路西"],
                    "tag": ["邻校房", "宜居生态"],
                    "price": "7500"
                }, {
                    "img": "https://pics-house.0356f.com/2019/0418/1555580440927377991.jpg?imageView2/1/w/200/h/150/interlace/1/q/100",
                    "title": "瑞基观澜墅",
                    "id": "new/detail/xf/112",
                    "name": ["西南片区", "金鼎路"],
                    "tag": ["宜居生态", "养老地产", "低密居所"],
                    "price": "6500"
                }, {
                    "img": "https://pics-house.0356f.com/2019/0122/15481214549249574598.jpg?imageView2/1/w/200/h/150/interlace/1/q/100",
                    "title": "金城山水",
                    "id": "new/detail/xf/14",
                    "name": ["东北片区", "文博北路"],
                    "tag": ["宜居生态", "景观居所", "邻校房", "水景地产"],
                    "price": "8880"
                }, {
                    "img": "https://pics-house.0356f.com/2019/0715/15631825585354357635.jpg?imageView2/1/w/200/h/150/interlace/1/q/100",
                    "title": "德源绿洲",
                    "id": "new/detail/xf/108",
                    "name": ["西南片区", "泽州南路"],
                    "tag": ["宜居生态", "公园地产"],
                    "price": "7500"
                }, {
                    "img": "https://pics-house.0356f.com/2019/0218/15504550667088377932.jpg?imageView2/1/w/200/h/150/interlace/1/q/100",
                    "title": "金城和园",
                    "id": "new/detail/xf/234",
                    "name": ["东北片区", "凤台东街"],
                    "tag": ["宜居生态", "邻校房"],
                    "price": "6880"
                }, {
                    "img": "https://pics-house.0356f.com/2019/0709/15626309895946461872.png?imageView2/1/w/200/h/150/interlace/1/q/100",
                    "title": "锦天玉龙府",
                    "id": "new/detail/xf/616",
                    "name": ["西南片区", "景西南路"],
                    "tag": ["经济住宅", "宜居生态"],
                    "price": "价格待定"
                }, {
                    "img": "https://pics-house.0356f.com/2019/0628/15617116553888925848.jpg?imageView2/1/w/200/h/150/interlace/1/q/100",
                    "title": "三文阳光城",
                    "id": "new/detail/xf/611",
                    "name": ["东北片区", "红星东街"],
                    "tag": ["品牌地产", "经济住宅"],
                    "price": "价格待定"
                }, {
                    "img": "https://pics-house.0356f.com/2019/0720/15636190764974251553.jpg?imageView2/1/w/200/h/150/interlace/1/q/100",
                    "title": "和平里",
                    "id": "new/detail/xf/628",
                    "name": ["东北片区", "新市东街"],
                    "tag": ["经济住宅"],
                    "price": "价格待定"
                }, {
                    "img": "https://pics-house.0356f.com/2019/0223/15509190384995830240.jpg?imageView2/1/w/200/h/150/interlace/1/q/100",
                    "title": "书香门第",
                    "id": "new/detail/xf/565",
                    "name": ["西北片区", "景西北路"],
                    "tag": ["小户型", "配套商品房", "投资地产"],
                    "price": "价格待定"
                }, {
                    "img": "https://pics-house.0356f.com/2019/0218/15504544759798843532.jpg?imageView2/1/w/200/h/150/interlace/1/q/100",
                    "title": "丰欣湾",
                    "id": "new/detail/xf/79",
                    "name": ["金村片", "西南属"],
                    "tag": ["宜居生态", "低总价", "经济住宅", "养老地产"],
                    "price": "4500"
                }, {
                    "img": "https://pics-house.0356f.com/2019/0416/15553811074141247177.jpg?imageView2/1/w/200/h/150/interlace/1/q/100",
                    "title": "紫薇华庭",
                    "id": "new/detail/xf/598",
                    "name": ["东北片区", "新市东街"],
                    "tag": ["现房", "低密居所"],
                    "price": "9000"
                }, {
                    "img": "https://pics-house.0356f.com/2019/0123/15482283125454364345.jpg?imageView2/1/w/200/h/150/interlace/1/q/100",
                    "title": "锦天玉龙台",
                    "id": "new/detail/xf/122",
                    "name": ["东南片区", "文昌东街"],
                    "tag": ["现房"],
                    "price": "5800"
                }, {
                    "img": "https://pics-house.0356f.com/2019/0123/15482064110272920132.jpg?imageView2/1/w/200/h/150/interlace/1/q/100",
                    "title": "澜凤华府",
                    "id": "new/detail/xf/114",
                    "name": ["西南片区", "金鼎路"],
                    "tag": ["宜居生态", "现房", "经济住宅"],
                    "price": "5580"
                }, {
                    "img": "https://pics-house.0356f.com/2019/0218/15504737897431536905.jpg?imageView2/1/w/200/h/150/interlace/1/q/100",
                    "title": "铭基和谐家园",
                    "id": "new/detail/xf/403",
                    "name": ["阳城", ""],
                    "tag": ["宜居生态", "低总价", "现房"],
                    "price": "4847"
                }, {
                    "img": "https://pics-house.0356f.com/2019/0122/15481261769184589086.jpg?imageView2/1/w/200/h/150/interlace/1/q/100",
                    "title": "汇邦现代城",
                    "id": "new/detail/xf/25",
                    "name": ["西北片区", "红星西街"],
                    "tag": ["宜居生态", "邻校房", "现房", "品牌地产"],
                    "price": "6800"
                }, {
                    "img": "https://pics-house.0356f.com/2019/0218/15504573491835563074.jpg?imageView2/1/w/200/h/150/interlace/1/q/100",
                    "title": "华府阳光城",
                    "id": "new/detail/xf/538",
                    "name": ["高平", ""],
                    "tag": ["宜居生态", "经济住宅"],
                    "price": "5800"
                }, {
                    "img": "https://pics-house.0356f.com/2019/0121/1548063125721580677.jpg?imageView2/1/w/200/h/150/interlace/1/q/100",
                    "title": "德源书香园",
                    "id": "new/detail/xf/4",
                    "name": ["西北片区", "书院街"],
                    "tag": ["小户型", "邻校房"],
                    "price": "8600"
                }]
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
    componentDidMount() {
        new Swiper('.swiper-container', {
            direction: 'horizontal',//竖向轮播
            loop: true,//无缝轮播
            pagination: {//小圆点分页
                el: '.swiper-pagination',
            },
            navigation: {//左右分页
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {//下划线分页
                el: '.swiper-scrollbar',
            },
            autoplay: true,
        })
        new Swiper('.Home-msg1-1', {
            direction: 'vertical',//竖向轮播
            loop: true,//无缝轮播
            autoplay: true,


        })
    }
    //跳转
    goto=(path)=>{
        this.props.history.push(path)
    }
    //渲染
    render() {
        return (
            <div className="Home-box">
                <div className="swiper-container homeCarousel">
                    <div className="swiper-wrapper">
                        {
                            this.state.Carousel.map(item => (
                                <div className="swiper-slide" key={item}><img src={item} /></div>
                            ))
                        }

                        {/* <div class="swiper-slide">Slide 2</div>
                        <div class="swiper-slide">Slide 3</div> */}
                    </div>
                    {/* <!-- 如果需要分页器 --> */}
                    <div className="swiper-pagination"></div>
                </div>
                <div className="Home-menu">
                    <Menu data={this.state.menu} />

                    <ul className="Home-menu2">
                        {
                            this.state.menu2.map(item => (
                                <li><img src={item.img} />{item.title}</li>
                            ))
                        }
                    </ul>
                    <Interval />
                </div>
                <div className="Home-msg">
                    <div className="Home-msg1" style={{background: "url('./img/home/menu500000053.png') 0.24rem 0.26rem/auto 0.4rem no-repeat"}}>
                        <div className="Home-msg1-1">
                            <div className="swiper-wrapper">
                                {
                                    this.state.menu3.map((item, i) => (
                                        item.title.map(item2 => (
                                            <div className="swiper-slide" key={Math.random()}><a><span>{item2}</span></a></div>
                                        ))
                                    ))
                                }


                            </div>
                        </div>
                    </div>
                    <ul className="Home-msg1-2">
                        <li >
                            <a href="//www.0356f.com/news/jinchengfangshi/1431.htm">
                                <dl >
                                    <dt className="text-overflow">金匠园区规划</dt>
                                    <dd className="text-overflow">金匠园区最新规划</dd>
                                </dl>
                                <img src="https://pics-house.0356f.com/2019/1010/15706818429284381750.png?imageView2/1/w/375/h/150/interlace/1/q/100" />
                            </a>
                        </li>
                        <li >
                            <a href="//www.0356f.com/news/yongdiguihua/1364.htm">
                                <dl >
                                    <dt className="text-overflow">丹河新城详解</dt>
                                    <dd className="text-overflow">金村起步区规划详解</dd>
                                </dl>
                                <img src="https://pics-house.0356f.com/2019/1010/15706817112061375514.png?imageView2/1/w/375/h/150/interlace/1/q/100" />
                            </a>
                        </li>
                    </ul>
                    <Interval />
                </div>
                {/* shop1 */}
                <div className="index-houses bg-fff">
                    {
                        this.state.shop1.map(item => (
                            <>
                                <div className="big-title c-999">{item.bigTitle}</div>

                                <div className="xf-list-component">
                                    <ul>



                                        {item.shop.map(item2 => (
                                            <li className="item" key={item2.title}>
                                                <div className="inner">

                                                    <a className="">
                                                        <div className="thumb">
                                                            <img src="https://pics-house.0356f.com/2019/0218/15504547592302504919.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                            <span className="status bg-pinkish">在售</span>
                                                        </div>



                                                        <div className="info flex flex-main-justify flex-dir-top">
                                                            <div className="title">{item2.title}</div>
                                                            <div className="area-distance c-999">
                                                                <span className="area">
                                                                    {
                                                                        item2.name.map(item => (

                                                                            <span>{item}</span>
                                                                        ))
                                                                    }
                                                                </span>
                                                            </div>
                                                            <div className="tags">
                                                                {
                                                                    item2.tag.map(item => (
                                                                        <span className="house-tag">{item}</span>
                                                                    ))
                                                                }
                                                            </div>
                                                            <div className="price">
                                                                <span className="no">{item2.price}</span>元/㎡
                                           </div>

                                                        </div>

                                                    </a>
                                                    <a href="tel:4008500356,8789" className="call iconfont icon-tel">

                                                    </a>

                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </>
                        ))
                    }
                    <div className="more-link bd-top">
                        <a className="full" onClick={this.goto.bind(this,'/new')}>查看更多</a>
                    </div>
                    <Interval />
                </div>
                {/* shop2 */}
                <Shop2 shop2={this.state.shop2} event={this.goto.bind(this,'/new')}/>
                {/* bottom */}
                <div className="tel-link">
                    <a href="tel:0356-8885356">
                        {/* <i className="iconfont icon-tubiao49"></i> */}
                        <MyIcon type="icon-dianhua" />
                        问房热线：0356-8885356
                        </a>
                </div>
            </div>
        )
    }
}
export default withRouter(Home);