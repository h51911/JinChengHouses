import React from 'react';
import {withRouter } from 'react-router-dom';
function Menu(props){
    console.log(props,'menu')
    return (
        <ul className="Home-menu1">
        {
            props.data.map(item => (
                // <li onClick={()=>item.event?this.props.history.push('/cart'):''}><img src={item.img} />{item.title}</li>
                <li onClick={item.event?props.go:null}><img src={item.img} />{item.title}</li>
            ))
        }
    </ul>
    )
}
export default withRouter(Menu);