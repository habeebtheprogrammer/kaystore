import React, { Component } from 'react';

class Carousel2 extends Component {
    render() {
        return (
            <div id="carousel2" className="carousel slide" data-ride="carousel">
             
                <div className="carousel-inner ">
                    <div className="item">
                        <img src={this.props.carousel.img1.src} width="100%" alt="First slide" />
                        <div className="container">
                            <div className="carousel-caption text-black">
                               {/* {/* <button className="btn btn-sm btn-danger">{this.props.carousel.img1.title} </button>  */} */}
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img data-src="holder.js/900x500/auto/#666:#6a6a6a/text:Second slide" alt="Second slide" width="100%" src={this.props.carousel.img2.src} />
                        <div className="container">
                            <div className="carousel-caption ">
                                {/* {this.props.carousel.img2.title}  */}
                            </div>
                        </div>
                    </div>
                    <div className="item active">
                        <img data-src="holder.js/900x500/auto/#555:#5a5a5a/text:Third slide" alt="Third slide" width="100%" src={this.props.carousel.img3.src} />
                        <div className="container">
                            <div className="carousel-caption" >
                                {/* <b>  {this.props.carousel.img1.title} </b> */}
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        );
    }
}

export default Carousel2;