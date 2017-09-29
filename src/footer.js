import React, { Component } from 'react';
import Directchat from "./main/directchat"

class Footer extends Component {
    render() {
        return (
            <div style={{"background":"grey","color":"#fff","padding":"1px 0px"}}>
                <div className="x-container adj-col">
                   
                    <p>footer</p>
                </div>
                <div style={{ "position": "fixed", "bottom": "300", "left": "0", }}>

                    <button style={{ "fontSize": "2.3em", "border-radius": "60px", "border":"2px solid #50728D" }} className="btn btn-default"><i className="fa fa-music"></i></button>
                </div>
                <div style={{ "position": "fixed", "bottom": "10","right": "50",  }}>
                    <button style={{ "fontSize": "1.6em", "border-radius": "60px", }} className="btn btn-danger dm"><i className="fa fa-comment"></i></button>
                </div>
                <div style={{ "position": "fixed", "bottom": "35", "right": "10", }}>

                    <button style={{ "fontSize": "1em", "border-radius": "60px" }} className="btn btn-danger up"><i className="fa fa-angle-up"></i></button>
                </div>
                <div style={{ "position": "fixed", "bottom": "35", "right": "80","width":"20%" }}>
                    <Directchat />
                </div>
                
            </div>
           
        );
    }
}

export default Footer;