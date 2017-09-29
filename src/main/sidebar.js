import React, { Component } from 'react';
import Carousel2 from './carousel2.js';
var style = {"background":"#fff", "fontSize": "0.9em",  "padding": "0px 10px 16px",  }
class Sidebar extends Component {

    render() {
        return (
            <div className="all-category sidebar " style={style}>
                <Carousel2 carousel={this.props.carousel}/>
                {/* <img src={this.props.carousel.img1.src} width="100%" /> */}
                <img src="./images/1.png" width="50%" alt="apple store"/>
                <img src="./images/2.png" width="50%" alt="goolge playstore"/>
                <p>Login</p>
                <form action="" method="POST" role="form">
                    <div className="form-group has-feedback">
                        <input type="text" className="form-control input-sm "  placeholder="Input field" />
                        {/* <span class=""><i className="fa fa-user"></i></span> */}
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control input-sm" id="" placeholder="Input field" />
                    </div>
                    
                
                    <button type="submit" className="btn btn-sm btn-block btn-primary">Submit</button>
                </form>
                
            </div >
        );
    }
}

export default Sidebar;