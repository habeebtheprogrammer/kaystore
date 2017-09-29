import React, { Component } from 'react';
import Title from './title';
import {Link} from "react-router-dom";
import Itemcard from './itemcard';
class Categorycard extends Component {
    constructor() {
        super();
    }
    
    
    render() {
       
        var item = this.props.category.map((item) => {
           return (<Itemcard src={item.url} category={this.props.title.url} key={item.id} title={item.title} price={item.price} discount={item.discount} slash={item.slash} />);
        });
        console.log(this.props)
        return (
            
            <div>
             
                            <div className="title-bar">
                                <h4 className="pull-right">{this.props.title.name}</h4>
                                <div className="clearfix"></div>
                            </div>
                            <div className="padding-20px">
                            <div className="" style={{"background":"#fff"}}>  
                                <div className="item-card2" >
                                    <img width="100%" src={`images/${this.props.banner.url}`} alt="Category Banner"/>
                                </div>
                              
                                {item}
                               <div className="clearfix"></div>
                           </div>
                           </div>
            </div>
        );
    } 
}

export default Categorycard;