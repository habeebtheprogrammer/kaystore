import React, { Component } from 'react';

class Producttab extends Component {
    render() {
        return (
            <div style={{
                "background": "#fff",
                "min-height": "500px"
            }}>
                
                <div role="tabpanel " >
                    
                    <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation" className="active">
                            <a href="#product" aria-controls="product" role="tab" data-toggle="tab">Description</a>
                        </li>
                        <li role="presentation">
                            <a href="#tab" aria-controls="tab" role="tab" data-toggle="tab">tab</a>
                        </li>
                    </ul>
                
                    <div className="tab-content" style={{"padding":"0px 10px"}}>
                        <div role="tabpanel" className="tab-pane active" id="product">
                            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </h3>
                            <h4>$532,832 <small><s> $32,234</s></small></h4>
                            <div className="rating" style={{ "color": "#ffdc2e", "fontSize": "1em", "display": "block", "letterSpacing": "1px" }}>
                                <b><i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <span className="" >4.2</span></b>
                            </div>
                            <b>Terms and Condition</b><br /> Quisque vel enim quis purus ultrices consequat, sed tincidunt massa blandit ipsum interdum tristique cras dictum, lacus eu molestie elementum nulla est auctor. Etiam dan lorem quis ligula elementum porttitor quisem. Duis eget purus urna fusce sed scelerisque ante.
                            
                            <p><button type="button" className="pull-right btn-sm btn btn-danger">
                            <i className="fa fa-shopping-cart"></i> BUY NOW</button></p>
                            <div className="clearfix"></div>
                        </div>
                        {/* <div role="tabpanel" className="tab-pane" id="tab">...</div> */}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Producttab;