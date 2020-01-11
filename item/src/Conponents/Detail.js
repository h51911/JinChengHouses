import React, { Component } from 'react';
import '../css/Detail.css'
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import { connect } from 'react-redux';
import { message } from 'antd';
import { changeQty, remove, clear, add2cart } from '../store/actions/cart'


const mapStateToProps = state => {
    return {
        cartlist: state.cart.cartlist,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addToCart() {
            if (window.localStorage.getItem("user")) {
                let { img, title, sid, pf } = this.state.data;
                let goods = {
                    img,
                    title,
                    sid,
                    pf,
                    user: window.localStorage.getItem('user')
                }
                dispatch({
                    type: 'ADD_TO_CART_ASYNC',
                    payload: goods
                })
            } else {
                message.error('预约失败，请先登录！');
                this.props.history.push('/userLogin');
                // console.log(this.props)
            }
            // console.log(this.props.cartlist, this.props, '预约', '333')





        }
    }

}
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
        console.log(this.props)
    }
    //生命周期
    async componentDidMount() {
        let index = this.props.location.pathname.lastIndexOf("/");
        let id = this.props.location.pathname.slice(index + 1);
        console.log(index, id);
        let { data } = await Axios.get('http://localhost:1912/goods2/single', {
            params: {
                id
            }
        })
        this.setState({ data: data[0] })
        console.log(data[0], 'result')

    }
    // 渲染
    render() {
        const { data } = this.state;
        // console.log(data.img)
        console.log(data, '这是数据！')
        return (
            <div className="detail">
                <header data-v-e6a10626="" class="header-nav">
                    <div data-v-e6a10626="" class="flex flex-main-justify header-box">
                        <div data-v-e6a10626="" class="header-left">
                            <a data-v-e6a10626="" href="javascript:void(0);" class="iconfont icon-leftarrow" onClick={() => this.props.history.goBack()}>‹</a>
                        </div>
                        <div data-v-e6a10626="" class="header-middle text-overflow flex flex-cross-center">
                            <div data-v-e6a10626="" class="title"> {data.title}</div>
                        </div>
                        <div data-v-e6a10626="" class="header-right">
                            <a data-v-e6a10626="" class="iconfont icon-house router-link-active">
                            </a>
                            <a data-v-e6a10626="" href="javascript:void(0)" class="iconfont user-icon user">
                                <img data-v-e6a10626="" src="http://uc.0356f.com/avatar.php?uid=1360&amp;size=big" />
                            </a>
                        </div>
                    </div>
                </header>
                {/* body */}
                <div id="app-container" class="app-container" style={{ background: 'rgb(245, 245, 245)', paddingTop: '0.88rem' }}>
                    <div data-v-21efdb9e="" class="v3-house-detail v3-xf-detail">
                        <div data-v-8a836e44="" data-v-21efdb9e="" class="detail-cover">
                            <img src={data.img} />
                        </div>
                        {/* 地产名字 */}
                        <div data-v-21efdb9e="" class="house-name">
                            <div data-v-21efdb9e="" class="house-title">
                                {data.title}
                            </div>
                            <div data-v-21efdb9e="" class="house-price">
                                {/* 价格待定 */}
                                {data.pf == 0 ? '价格待定' : `均价${data.pf}元/㎡`}
                                <span data-v-21efdb9e="" class="bg-l-blue">待售</span>
                                <a data-v-21efdb9e="" href="javascript:void(0)" class="hongbao" style={{ display: 'none' }}></a>
                            </div>
                            <div data-v-21efdb9e="" class="house-time c-999">更新时间：2019-11-15</div>
                            <div data-v-21efdb9e="" class="house-tags">
                                <span data-v-21efdb9e="" class="house-tag">经济住宅</span>
                            </div>
                        </div>
                        {/* 地址 */}
                        <div data-v-21efdb9e="" class="house-message">
                            <ul data-v-21efdb9e="">
                                <li data-v-21efdb9e="">
                                    <a data-v-21efdb9e="" >
                                        <p data-v-21efdb9e="" class="text-overflow">
                                            <i data-v-21efdb9e="" class="iconfont icon-add">
                                            </i>
                                            地址：武庄路东侧，新市东街南侧
                                            </p>
                                        <i data-v-21efdb9e="" class="iconfont icon-youjiantou fr">
                                        </i>
                                    </a>
                                </li>
                                <li data-v-21efdb9e="">
                                    <a data-v-21efdb9e=""  >
                                        <p data-v-21efdb9e="" class="text-overflow">
                                            <i data-v-21efdb9e="" class="iconfont icon-time">
                                            </i>
                                            近期开盘：暂无
                                                                 </p>
                                        <i data-v-21efdb9e="" class="iconfont icon-youjiantou fr">
                                        </i>
                                    </a>
                                </li>
                                <li data-v-21efdb9e="">
                                    <a data-v-21efdb9e=""  >
                                        <p data-v-21efdb9e="" class="text-overflow">
                                            <i data-v-21efdb9e="" class="iconfont icon-type">
                                            </i>
                                            主力户型：
            <span data-v-21efdb9e="">3居(5) </span>
                                            <span data-v-21efdb9e="">4居(1) </span>
                                        </p>
                                        <i data-v-21efdb9e="" class="iconfont icon-youjiantou fr"></i>
                                    </a>
                                </li>
                                <li data-v-21efdb9e="">
                                    <a data-v-21efdb9e="" >
                                        <p data-v-21efdb9e="">
                                            <i data-v-21efdb9e="" class="iconfont icon-dtel">
                                            </i>
                                            免费咨询：
            <span data-v-21efdb9e="" class="c-pinkish">4008500356转7886</span>
                                        </p>
                                        <i data-v-21efdb9e="" class="iconfont icon-youjiantou fr"></i>
                                    </a>
                                </li>
                            </ul>
                            <div data-v-21efdb9e="" class="house-message-btn">
                                <a data-v-21efdb9e="" class="btn-link">
                                    查看楼盘详细资料
      </a>
                                <div data-v-21efdb9e="" class="flex flex-box-mean">
                                    <a data-v-21efdb9e="" class="text-link c-pinkish">
                                        <i data-v-21efdb9e="" class="iconfont icon-tongzhi"></i>
                                        开盘通知
              </a>
                                    <a data-v-21efdb9e="" class="text-link c-pinkish">
                                        <i data-v-21efdb9e="" class="iconfont icon-bianjia">
                                        </i>变价通知
                       </a>
                                </div>
                            </div>
                        </div>
                        {/* 主力户型 */}
                        <section data-v-21efdb9e="">
                            <div data-v-21efdb9e="" class="blank20 bg-f5">
                            </div>
                            <div data-v-21efdb9e="" class="big-title">
                                <a data-v-21efdb9e="" >
                                    主力户型(6)
        <i data-v-21efdb9e="" class="iconfont icon-youjiantou">
                                    </i>
                                </a>
                            </div>
                            <div data-v-752e9bbd="" data-v-21efdb9e="" class="room-list-line-component">
                                <ul data-v-752e9bbd="" class="clearfix">
                                    <li data-v-752e9bbd="">
                                        <a data-v-752e9bbd=""  >
                                            <div data-v-752e9bbd="" class="thumb">
                                                <img data-v-752e9bbd="" src="https://pics-house.0356f.com/2019/0919/15688787815857758616.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span data-v-752e9bbd="" class="room-status bg-l-blue">即将开盘</span>
                                            </div>
                                            <div data-v-752e9bbd="" class="room-title text-overflow">和平里7-D户型</div>
                                            <div data-v-752e9bbd="" class="room-info">4室2厅2卫 127平</div>
                                            <div data-v-752e9bbd="" class="room-price">暂无报价</div>
                                        </a>
                                    </li>
                                    <li data-v-752e9bbd="">
                                        <a data-v-752e9bbd=""  >
                                            <div data-v-752e9bbd="" class="thumb">
                                                <img data-v-752e9bbd="" src="https://pics-house.0356f.com/2019/0919/15688787451916931766.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span data-v-752e9bbd="" class="room-status bg-l-blue">即将开盘</span>
                                            </div>
                                            <div data-v-752e9bbd="" class="room-title text-overflow">和平里7-C户型</div>
                                            <div data-v-752e9bbd="" class="room-info">3室2厅2卫 116平</div>
                                            <div data-v-752e9bbd="" class="room-price">暂无报价</div>
                                        </a>
                                    </li>
                                    <li data-v-752e9bbd="">
                                        <a data-v-752e9bbd="">
                                            <div data-v-752e9bbd="" class="thumb">
                                                <img data-v-752e9bbd="" src="https://pics-house.0356f.com/2019/0919/15688786999166299245.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span data-v-752e9bbd="" class="room-status bg-l-blue">即将开盘</span>
                                            </div>
                                            <div data-v-752e9bbd="" class="room-title text-overflow">和平里7-B户型</div>
                                            <div data-v-752e9bbd="" class="room-info">3室2厅2卫 112平</div>
                                            <div data-v-752e9bbd="" class="room-price">暂无报价</div>
                                        </a>
                                    </li>
                                    <li data-v-752e9bbd="">
                                        <a data-v-752e9bbd=""  >
                                            <div data-v-752e9bbd="" class="thumb">
                                                <img data-v-752e9bbd="" src="https://pics-house.0356f.com/2019/0919/15688786541975781480.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span data-v-752e9bbd="" class="room-status bg-l-blue">即将开盘</span>
                                            </div>
                                            <div data-v-752e9bbd="" class="room-title text-overflow">和平里7-A户型</div>
                                            <div data-v-752e9bbd="" class="room-info">3室2厅2卫 114平</div>
                                            <div data-v-752e9bbd="" class="room-price">暂无报价</div>
                                        </a>
                                    </li>
                                    <li data-v-752e9bbd="">
                                        <a data-v-752e9bbd=""  >
                                            <div data-v-752e9bbd="" class="thumb">
                                                <img data-v-752e9bbd="" src="https://pics-house.0356f.com/2019/0919/15688785781218445333.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span data-v-752e9bbd="" class="room-status bg-l-blue">即将开盘</span>
                                            </div>
                                            <div data-v-752e9bbd="" class="room-title text-overflow">和平里6-B户型</div>
                                            <div data-v-752e9bbd="" class="room-info">3室2厅1卫 110平</div>
                                            <div data-v-752e9bbd="" class="room-price">暂无报价</div>
                                        </a>
                                    </li>
                                    <li data-v-752e9bbd="">
                                        <a data-v-752e9bbd=""  >
                                            <div data-v-752e9bbd="" class="thumb">
                                                <img data-v-752e9bbd="" src="https://pics-house.0356f.com/2019/0919/15688785019142280995.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                <span data-v-752e9bbd="" class="room-status bg-l-blue">即将开盘</span>
                                            </div>
                                            <div data-v-752e9bbd="" class="room-title text-overflow">和平里6-A户型</div>
                                            <div data-v-752e9bbd="" class="room-info">3室2厅2卫 115平</div>
                                            <div data-v-752e9bbd="" class="room-price">暂无报价</div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        {/* 楼栋信息 */}
                        <section data-v-21efdb9e="">
                            <div data-v-21efdb9e="" class="blank20 bg-f5">
                            </div>
                            <div data-v-21efdb9e="" class="big-title">
                                楼栋信息(7)
                             <i data-v-21efdb9e="" class="iconfont icon-youjiantou"></i>
                            </div>
                            <div data-v-21efdb9e="" class="period-container">
                                <div class="period-nav">
                                    <ul class="bg-f5 flex flex-main-left">
                                        <li class="on"><span>1期</span></li>
                                    </ul>
                                </div>
                                <div class="period-wrapper" style={{ overflow: 'hidden', height: 'auto' }}>
                                    <div class="mark-container" style={{ position: 'static' }}>
                                        <div class="sale-mark" style={{ left: '16.9412%', top: '46.4503%' }}>
                                            <dl>
                                                <dt class="bg-l-blue">1#楼</dt>
                                                <dd>待售</dd>
                                            </dl>
                                        </div>
                                        <div class="sale-mark" style={{ left: '31.4118%', top: '35.497%' }}>
                                            <dl>
                                                <dt class="bg-l-blue">2#楼</dt>
                                                <dd>待售</dd>
                                            </dl>
                                        </div>
                                        <div class="sale-mark" style={{ left: '47.6471%', top: '42.7992%' }}>
                                            <dl>
                                                <dt class="bg-l-blue">3#楼</dt>
                                                <dd>待售</dd>
                                            </dl>
                                        </div>
                                        <div class="sale-mark" style={{ left: '56.2353%', top: '27.3834%' }}>
                                            <dl>
                                                <dt class="bg-l-blue">4#楼</dt>
                                                <dd>待售</dd>
                                            </dl>
                                        </div>
                                        <div class="sale-mark" style={{ left: '64.2353%', top: '43.8134%' }}>
                                            <dl>
                                                <dt class="bg-l-blue">5#楼</dt>
                                                <dd>待售</dd>
                                            </dl>
                                        </div>
                                        <div class="sale-mark" style={{ left: '74.2353%', top: '28.1947%' }}>
                                            <dl>
                                                <dt class="bg-l-blue">6#楼</dt>
                                                <dd>待售</dd>
                                            </dl>
                                        </div>
                                        <div class="sale-mark" style={{ left: '81.5294%', top: '46.6531%' }}>
                                            <dl>
                                                <dt class="bg-l-blue">7#楼</dt>
                                                <dd>待售</dd>
                                            </dl>
                                        </div>
                                        <img src="https://pics-house.0356f.com/2019/0815/15658539265776133424.png" class="period-img" style={{ width: '100%', minHeight: 'auto' }} />
                                    </div>
                                </div>
                            </div>
                            <div data-v-21efdb9e="" class="see-more">请点击楼栋查看楼栋详情</div>
                        </section>

                        {/* 楼盘咨询 */}
                        <section data-v-21efdb9e=""><div data-v-21efdb9e="" class="blank20 bg-f5">
                        </div>
                            <div data-v-21efdb9e="" class="big-title">
                                <a data-v-21efdb9e="" class="">
                                    楼盘资讯(14)
        <i data-v-21efdb9e="" class="iconfont icon-youjiantou"></i>
                                </a>
                            </div>
                            <div data-v-21efdb9e="" class="xfd-news-list"><a data-v-21efdb9e="" class="">
                                <dl data-v-21efdb9e="">
                                    <dt data-v-21efdb9e="">9月19日，三建和平里样板间盛大开放，诠释新奢主义生活</dt>
                                    <dd data-v-21efdb9e="">不惊艳 不谋面！9月19日，晋城和平里样板间倾城盛放;新奢主义实景样板...</dd>
                                </dl>
                            </a>
                                <a data-v-21efdb9e="" class="">
                                    <dl data-v-21efdb9e="">
                                        <dt data-v-21efdb9e="">素手匠心，同心协力，在和平里他们过了一个完美的中秋节</dt>
                                        <dd data-v-21efdb9e="">走过了春夏，看过了百花，我们把回忆拾起，把思念复制，在隐约的丹桂清...</dd>
                                    </dl>
                                </a>
                            </div>
                        </section>
                        {/* 楼盘问答 */}
                        <section data-v-21efdb9e=""><div data-v-21efdb9e="" class="blank20 bg-f5">
                        </div>
                            <div data-v-21efdb9e="" class="big-title">
                                <a data-v-21efdb9e="" class="">
                                    楼盘问答(9)
        <i data-v-21efdb9e="" class="iconfont icon-youjiantou"></i>
                                </a>
                            </div>
                            <div data-v-4ed7c006="" data-v-21efdb9e="" class="v3-list">
                                <div data-v-4ed7c006="" class="wenda-list-component">
                                    <ul data-v-4ed7c006="">
                                        <li data-v-4ed7c006="" class="item wenda-ellipsis">
                                            <div data-v-4ed7c006="" class="wen">
                                                <i data-v-4ed7c006="" class="iconfont icon-wen"></i>
                                                <section data-v-4ed7c006="" class="flex flex-main-center flex-dir-top">
                                                    <div data-v-4ed7c006="" class="wenda-text">
                                                        <div data-v-4ed7c006="">
                                                            该楼盘什么时候交房，
              </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div data-v-4ed7c006="" class="da">
                                                <i data-v-4ed7c006="" class="iconfont icon-da"></i>
                                                <section data-v-4ed7c006="" class="flex flex-main-center flex-dir-top">
                                                    <div data-v-4ed7c006="" class="wenda-text">
                                                        你好，具体以开发商实际交付时间为准。
            </div>
                                                </section>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        {/* 位置及周边 */}
                        <section data-v-21efdb9e="">
                            <div data-v-21efdb9e="" class="blank20 bg-f5">
                            </div> <a data-v-21efdb9e="" class="full">
                                <div data-v-21efdb9e="" class="big-title">
                                    位置及周边
        <i data-v-21efdb9e="" class="iconfont icon-youjiantou"></i>
                                </div>
                                <div data-v-eaa995e4="" data-v-21efdb9e="" class="zhoubian-map">
                                    <img data-v-eaa995e4="" src="https://api.map.baidu.com/staticimage/v2?ak=415167759dc5861ddbbd14154f760c7e&amp;mcode=666666&amp;coordtype=666666&amp;copyright=1&amp;coordtype=bd09ll&amp;center=112.8988860000,35.5101270000&amp;markers=112.8988860000,35.5101270000&amp;markerStyles=-1,http://s.hangjiayun.com/house/static/import/map-marker.png,&amp;width=600&amp;height=300&amp;zoom=18" style={{ display: 'block', width: '100%' }} />
                                    <p data-v-eaa995e4="" class="container text-overflow">武庄路东侧，新市东街南侧</p>
                                </div>
                            </a>
                        </section>
                        {/* 二手房 */}
                        <section data-v-21efdb9e="" class="esf-data">
                            <div data-v-21efdb9e="" class="blank20 bg-f5"></div>
                            <div data-v-21efdb9e="" class="big-title">
                                <a data-v-21efdb9e="" class="">二手房
        <i data-v-21efdb9e="" class="iconfont icon-youjiantou">
                                    </i>
                                </a>
                            </div>
                            <div data-v-6e051e97="" data-v-21efdb9e="" class="esf-list-component">
                                <ul data-v-6e051e97="">
                                    <li data-v-6e051e97="" class="item">
                                        <a data-v-6e051e97="" class="">
                                            <div data-v-6e051e97="" class="thumb">
                                                <img data-v-6e051e97="" src="https://pics-house.0356f.com/2019/1231/15777867740728923203.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                            </div>
                                            <div data-v-6e051e97="" class="info flex flex-main-justify flex-dir-top"><div data-v-6e051e97="" class="r-title">
                                                <p data-v-6e051e97="">铭基凤凰城一室一厅一卫37平米住宅出售</p>
                                            </div>
                                                <div data-v-6e051e97="" class="r-info">
                                                    <div data-v-6e051e97="" class="r-type">
                                                        <span data-v-6e051e97="" class="locate">铭基凤凰城</span>
                                                        <span data-v-6e051e97="" class="locate">1室1厅</span>
                                                        <span data-v-6e051e97="" class="locate">37平</span>
                                                    </div>
                                                    <div data-v-6e051e97="" class="r-price fr"><em data-v-6e051e97="">35</em>万
              </div>
                                                </div>
                                                <div data-v-6e051e97="" class="r-condition">
                                                    <div data-v-6e051e97="" class="house-tags" style={{ width: '3.2rem' }}>
                                                        <span data-v-6e051e97="" class="house-tag">优质教育</span>
                                                        <span data-v-6e051e97="" class="house-tag">精装修</span>
                                                    </div>
                                                    <span data-v-6e051e97="" class="avg fr c-999">9459元/㎡</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li data-v-6e051e97="" class="item">
                                        <a data-v-6e051e97="" class="">
                                            <div data-v-6e051e97="" class="thumb">
                                                <img data-v-6e051e97="" src="https://pics-house.0356f.com/2019/1224/15771759023112267333.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                            </div>
                                            <div data-v-6e051e97="" class="info flex flex-main-justify flex-dir-top">
                                                <div data-v-6e051e97="" class="r-title">
                                                    <p data-v-6e051e97="">汇仟小区三室两厅一卫117平米住宅出售</p>
                                                </div>
                                                <div data-v-6e051e97="" class="r-info">
                                                    <div data-v-6e051e97="" class="r-type"><span data-v-6e051e97="" class="locate">汇仟小区</span>
                                                        <span data-v-6e051e97="" class="locate">3室2厅</span>
                                                        <span data-v-6e051e97="" class="locate">117平</span>
                                                    </div>
                                                    <div data-v-6e051e97="" class="r-price fr"><em data-v-6e051e97="">102</em>万
              </div>
                                                </div>
                                                <div data-v-6e051e97="" class="r-condition">
                                                    <div data-v-6e051e97="" class="house-tags" style={{ width: '3.2rem' }}>
                                                        <span data-v-6e051e97="" class="house-tag">优质教育</span>
                                                        <span data-v-6e051e97="" class="house-tag">繁华地段</span>
                                                        <span data-v-6e051e97="" class="house-tag">满五唯一</span>
                                                        <span data-v-6e051e97="" class="house-tag">南北通透</span>
                                                        <span data-v-6e051e97="" class="house-tag">精装修</span>
                                                    </div>
                                                    <span data-v-6e051e97="" class="avg fr c-999">8717元/㎡</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li data-v-6e051e97="" class="item">
                                        <a data-v-6e051e97="" class="">
                                            <div data-v-6e051e97="" class="thumb">
                                                <img data-v-6e051e97="" src="https://pics-house.0356f.com/2019/1225/15772439751673588109.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                            </div>
                                            <div data-v-6e051e97="" class="info flex flex-main-justify flex-dir-top">
                                                <div data-v-6e051e97="" class="r-title">
                                                    <p data-v-6e051e97="">龙度华府三室两厅两卫136平米住宅出售</p>
                                                </div>
                                                <div data-v-6e051e97="" class="r-info">
                                                    <div data-v-6e051e97="" class="r-type">
                                                        <span data-v-6e051e97="" class="locate">龙度华府</span>
                                                        <span data-v-6e051e97="" class="locate">3室2厅</span>
                                                        <span data-v-6e051e97="" class="locate">136平</span>
                                                    </div>
                                                    <div data-v-6e051e97="" class="r-price fr"><em data-v-6e051e97="">74</em>万
              </div>
                                                </div>
                                                <div data-v-6e051e97="" class="r-condition"><div data-v-6e051e97="" class="house-tags" style={{ width: '3.2rem' }}>
                                                    <span data-v-6e051e97="" class="house-tag">南北通透</span>
                                                    <span data-v-6e051e97="" class="house-tag">交通便利</span>
                                                </div>
                                                    <span data-v-6e051e97="" class="avg fr c-999">5441元/㎡</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* 楼盘推荐 */}
                        <section data-v-21efdb9e="">
                            <div data-v-21efdb9e="" class="blank20 bg-f5">
                            </div>
                            <div data-v-21efdb9e="" class="big-title">楼盘推荐</div>
                            <div data-v-63dc00b3="" data-v-21efdb9e="" class="xf-list-component autoH">
                                <ul data-v-63dc00b3="">
                                    <li data-v-63dc00b3="" class="item">
                                        <div data-v-63dc00b3="" class="inner">
                                            <a data-v-63dc00b3="" class="">
                                                <div data-v-63dc00b3="" class="thumb">
                                                    <img data-v-63dc00b3="" src="https://pics-house.0356f.com/2019/0416/15553811074141247177.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                    <span data-v-63dc00b3="" class="status bg-pinkish">在售</span>
                                                </div>
                                                <div data-v-63dc00b3="" class="info flex flex-main-justify flex-dir-top">
                                                    <div data-v-63dc00b3="" class="title">紫薇华庭</div>
                                                    <div data-v-63dc00b3="" class="area-distance c-999">
                                                        <span data-v-63dc00b3="" class="area">
                                                            <span data-v-63dc00b3="">东北片区</span>
                                                            <span data-v-63dc00b3="" class="t">新市东街</span>
                                                        </span>
                                                    </div>
                                                    <div data-v-63dc00b3="" class="tags">
                                                        <span data-v-63dc00b3="" class="house-tag">现房</span>
                                                        <span data-v-63dc00b3="" class="house-tag">低密居所</span>
                                                    </div>
                                                    <div data-v-63dc00b3="" class="price">
                                                        <span data-v-63dc00b3="" class="no">9000</span>元/㎡
              </div>
                                                </div></a>
                                            <a data-v-63dc00b3="" class="call iconfont icon-tel"></a>
                                        </div>
                                    </li>
                                    <li data-v-63dc00b3="" class="item">
                                        <div data-v-63dc00b3="" class="inner">
                                            <a data-v-63dc00b3="" class="">
                                                <div data-v-63dc00b3="" class="thumb">
                                                    <img data-v-63dc00b3="" src="https://pics-house.0356f.com/2019/0218/15504547592302504919.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                    <span data-v-63dc00b3="" class="status bg-pinkish">在售</span>
                                                </div>
                                                <div data-v-63dc00b3="" class="info flex flex-main-justify flex-dir-top">
                                                    <div data-v-63dc00b3="" class="title">御景花园</div>
                                                    <div data-v-63dc00b3="" class="area-distance c-999">
                                                        <span data-v-63dc00b3="" class="area">
                                                            <span data-v-63dc00b3="">东北片区</span>
                                                            <span data-v-63dc00b3="" class="t">红星东街</span>
                                                        </span>
                                                    </div>
                                                    <div data-v-63dc00b3="" class="tags">
                                                        <span data-v-63dc00b3="" class="house-tag">宜居生态</span>
                                                        <span data-v-63dc00b3="" class="house-tag">邻校房</span>
                                                        <span data-v-63dc00b3="" class="house-tag">公园地产</span>
                                                    </div>
                                                    <div data-v-63dc00b3="" class="price"><span data-v-63dc00b3="" class="no">7600</span>元/㎡
              </div>
                                                </div>
                                            </a>
                                            <a data-v-63dc00b3="" class="call iconfont icon-tel">
                                            </a>
                                        </div>
                                    </li>
                                    <li data-v-63dc00b3="" class="item">
                                        <div data-v-63dc00b3="" class="inner">
                                            <a data-v-63dc00b3="" class="">
                                                <div data-v-63dc00b3="" class="thumb">
                                                    <img data-v-63dc00b3="" src="https://pics-house.0356f.com/2019/0218/15504547867781446289.jpg?imageView2/1/w/200/h/150/interlace/1/q/100" />
                                                    <span data-v-63dc00b3="" class="status bg-pinkish">在售</span>
                                                </div>
                                                <div data-v-63dc00b3="" class="info flex flex-main-justify flex-dir-top">
                                                    <div data-v-63dc00b3="" class="title">皇城新区</div>
                                                    <div data-v-63dc00b3="" class="area-distance c-999">
                                                        <span data-v-63dc00b3="" class="area">
                                                            <span data-v-63dc00b3="">东南片区</span>
                                                            <span data-v-63dc00b3="" class="t">白水东街</span>
                                                        </span>
                                                    </div>
                                                    <div data-v-63dc00b3="" class="tags">
                                                        <span data-v-63dc00b3="" class="house-tag">宜居生态</span>
                                                        <span data-v-63dc00b3="" class="house-tag">现房</span>
                                                        <span data-v-63dc00b3="" class="house-tag">公园地产</span>
                                                    </div>
                                                    <div data-v-63dc00b3="" class="price">
                                                        <span data-v-63dc00b3="" class="no">7600</span>元/㎡
              </div>
                                                </div>
                                            </a>
                                            <a data-v-63dc00b3="" class="call iconfont icon-tel">
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div data-v-21efdb9e="" class="no-responsibility bd-top c-999">
                                免责声明：楼盘信息由开发企业提供,最终以政府部门登记备案为准,请谨慎核查。如楼盘信息有误请拨打
      <a data-v-21efdb9e="" > 0356-8885356 </a>反馈纠错。
    </div>
                        </section>
                        {/* 说明免责 */}
                        <div data-v-21efdb9e="" class="blank88 bg-f5"></div>
                        {/* 咨询 */}
                        <div data-v-78d9f94c="" data-v-21efdb9e="" class="v3-seek-foot bottom-fixed">
                            <ul data-v-78d9f94c="" class="flex flex-box-mean">
                                <li data-v-78d9f94c="">
                                    <a data-v-78d9f94c="" >
                                        <i data-v-78d9f94c="" class="iconfont icon-dianhua"></i>电话咨询
      </a>
                                </li>
                                <li data-v-78d9f94c="">
                                    <a data-v-78d9f94c="" >
                                        <i data-v-78d9f94c="" class="iconfont icon-qq"></i>QQ咨询
      </a>
                                </li>
                                <li data-v-78d9f94c="" onClick={this.props.addToCart.bind(this)}>
                                    <i data-v-78d9f94c="" class="iconfont icon-clock1"></i>预约看房
    </li>
                            </ul>
                        </div>






                    </div>





                </div>




            </div>
        )
    }
}


Detail = connect(mapStateToProps, mapDispatchToProps)(Detail);
export default withRouter(Detail);