import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <div style={{"padding":"9px 1%" }}className="title-container ">
                <span className="title">{this.props.title}</span>
                <a href="" className="next"><i className="fa fa-angle-right"></i></a>
                <a href="" className="prev"><i className="fa fa-angle-left "></i></a>
            </div>
        );
    }
}

export default Title;