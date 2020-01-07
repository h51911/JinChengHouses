import React from 'react';
function Menu({data}){
    return (
        <ul className="Home-menu1">
        {
            data.map(item => (
                <li><img src={item.img} />{item.title}</li>
            ))
        }
    </ul>
    )
}
export default Menu;