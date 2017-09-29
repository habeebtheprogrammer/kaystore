import React, { Component } from 'react';
import Itemcard from './main/itemcard'
import Store from './main/data.js';

import Home from './main/home.js';
class Shop extends Component {

    render() {
        var cat = Store.items.filter((data) => {
            return (this.props.location.pathname == data.category.url) ;
        });
        if(cat.length == 0) return(<Home />)
        var item = cat[0].products.map((item) => {
            return (<Itemcard category={cat[0].category.url} src={item.url} key={item.id} title={item.title} price={item.price} discount={item.discount} slash={item.slash} />);
        });console.log(cat[0].category.name);
        return (
            <div>
            <div className="title-bar">
                <h4 className="pull-right">{cat[0].category.name}</h4>
                <div className="clearfix"></div>
            </div>
            <div className="padding-20px">
                <div style={{"background":"#fff" }}>
                    <div className="item-card2" >
                        <img width="100%" src={`./images/${cat[0].banner.url}`} alt="Category Banner" />
                    </div>
                    {item}
                    {item}
                    <div className="clearfix"></div>
                </div>
            </div>  
            </div>
            
        );
    }
}

export default Shop;