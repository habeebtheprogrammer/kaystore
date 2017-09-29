import React, { Component } from 'react';

class Carousel extends Component {
    render() {
        return (
            <div id="carousel-id" className="carousel slide" data-interval="2000" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel-id" data-slide-to="0" className=""></li>
                    <li data-target="#carousel-id" data-slide-to="1" className=""></li>
                    <li data-target="#carousel-id" data-slide-to="2" className="active"></li>
                </ol>
                <div className="carousel-inner ">
                    <div className="item">
                        <img src={this.props.carousel.img1.src} width="100%" alt="First slide" />
                        <div className="container">
                            <div className="carousel-caption text-black">
                               {/* {this.props.carousel.img1.title}  */}
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
                <a className="left carousel-control" href="#carousel-id" data-slide="prev"><span className="glyphicon glyphicon-chevron-left"></span></a>
                <a className="right carousel-control" href="#carousel-id" data-slide="next"><span className="glyphicon glyphicon-chevron-right"></span></a>
            </div>
        );
    }
}

export default Carousel;