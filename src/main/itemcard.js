import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Itemcard extends Component {
    
    render() {
        return (
          
            <div className="item-card" >
                
                <div style={{"background": "#fff","position":"relative"}}>
                    <div className="discount1" style={{ "position": "absolute",  "color": "white", "padding": "1px 10px", "marginTop": "19px" }}><b>{this.props.discount} </b></div>
                    
                    <img src={`../images/${this.props.src}`} width="99%" alt={this.props.title}/>
                    
                <div className="anchor"style={{"padding": "0px 5px 10px" }}>
                   <Link to={`${this.props.category}/${this.props.title}`} style={{"textDecoration":"none"}}>
                        
                        {this.props.title}
                        {/* <b>{this.props.title}</b> */}
                        
                       
                        <p style={{"margin":"0px"}}><span className="text-black" style={{ "color":"#e31711","fontSize":"1.2em","fontWeight":"bold"}}>{this.props.price} </span>
                           

                            <small><s>{this.props.slash}</s></small>
                           
                            </p>
                        <div className="rating" style={{ "color": "#FF7B00","fontSize":"1em", "display": "block","letterSpacing":"1px"}}>
                            <b><i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <span className="" style={{ "letterSpacing": "0px" }}>4.2</span></b>
                        </div>
                        
                        
                    </Link>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Itemcard;