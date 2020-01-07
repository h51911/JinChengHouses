import React, { Component } from 'react';
import Interval from './Interval';
class Shop2 extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="index-houses bg-fff esf-data">
                {
                    this.props.shop2.map(item => (
                        <>
                            <div className="big-title c-999">
                                <span>{item.bigTitle}</span>
                                {
                                    this.props.condition == "二手" ? <span className="more">查看更多</span> : ""
                                }
                            </div>

                            <div className="esf-list-component">
                                <ul >
                                    {
                                        item.shop.map(item => (
                                            <li className="item" key={item.title} data-id={item.id}>
                                                <a href="#/detail/sell/zz/1513">
                                                    <div className="thumb">
                                                        <img src={item.img} />
                                                    </div>
                                                    <div className="info flex flex-main-justify flex-dir-top">
                                                        <div className="r-title">
                                                            <p>{item.title}</p>
                                                        </div>
                                                        <div className="r-info">
                                                            <div className="r-type">
                                                                {
                                                                    item.name.map(item => (
                                                                        <span className="locate" key={item}>{item}</span>
                                                                    ))
                                                                }
                                                            </div>
                                                            <div className="r-price fr">
                                                                <em >70</em>万
            </div>
                                                        </div>
                                                        <div className="r-condition">
                                                            <div className="house-tags" style={{ width: '3.2rem' }}>
                                                                {
                                                                    item.tag.map(item => (
                                                                        <span className={item.clssName} key={item.title2}>{item.title2}</span>
                                                                    ))
                                                                }
                                                            </div>
                                                            {/* <span className="avg fr c-999">7865元/㎡</span> */}
                                                            <span className="avg fr c-999">{item.pf}</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        ))
                                    }

                                </ul>
                            </div>
                        </>
                    ))

                }





                {
                    this.props.condition == "二手" ? "":<div className="more-link bd-top">
                        <a href="#/list/sell/esf" className="full">查看更多</a>
                    </div> 
                }
                {/* <div className="more-link bd-top">
                    <a href="#/list/sell/esf" className="full">查看更多</a>
                </div> */}
                <div className="blank20 bg-f5">

                </div>
                <Interval />
            </div>
        )
    }
}
export default Shop2;