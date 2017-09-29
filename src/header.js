import React, { Component } from 'react';
import Store from './main/data';
import {Link} from 'react-router-dom'
class Header extends Component {
    render() {
        var navs = Store.items.map((item)=>{
            return (<li><Link to={item.category.url}><span>{item.category.name}</span></Link></li>)
        });
        return (
            <div>
                <div className="x-header ">
                    <div className="first-bar ">
                        <div className="x-container">
                            <div className="row">
                                <div className="col-sm-6 bar1-text ">
                                    {/* text */}
                                 </div>
                                <div className="col-sm-6 adj-col">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><a href="about"><i className="fa fa-instagram"></i></a></li>
                                        <li><a href="about"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="about"><i className="fa fa-youtube"></i></a></li>
                                        <li><a href="about"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="about"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="about">USD</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fixed-bar">
                        <div className="bar2 ">
                            <div className="x-container">
                                <div className="row">
                                    <div className="col-xs-3 bar2-left-grid adj-col">
                                        <div className="brand-logo">
                                            <Link to="/"><h3>
                                             KayStore</h3></Link>
                                            {/* <a href="/"><img src="./images/homemarket-theme-logo-1.png" className="img-responsive" alt="logo" />
                                            </a> */}
                                        </div>
                                        </div>
                                        <div className="col-xs-6 hidden-xs bar2-middle-grid adj-col">
                                            
                                            <div className="input-group">
                                                
                                                <input type="search" name="" id="input${1/(\w+)/\u\1/g}" className="form-control" value="" required="required" title="" />
                                                
                                                <span className="input-group-btn">
                                                    <button type="button" className="btn btn-default">Go!</button>
                                                </span>
                                                
                                            </div>
                                            
                                            </div>
                                        <div className="bar2-right-grid col-xs-3">
 
                                            <ul className="nav navbar-nav" >
                                                <li className="dropdown" >
                                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" style={{ "padding": "15px 10px" }}>
                                                        <img className="img-circle" src="./images/avatar5.png" width="25px" alt="Image" style={{ "margin": "0px 10px 0px 0px" }} />
                                                            Login
                                                    </a>
                                                            <ul className="dropdown-menu">
                                                                <li><a href="#">Action</a></li>
                                                                <li><a href="#">Another action</a></li>
                                                                <li><a href="#">Something else here</a></li>
                                                                <li><a href="#">Separated link</a></li>
                                                            </ul>
                                                </li>
                                                <li className="dropdown" >
                                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" style={{ "padding": "15px 5px " }}>
                                                    <img className="img-circle" src="./images/images (1).png" width="25px" alt="Image" style={{ "margin": "0px 10px 0px 0px 0px" }} />
                                                    <span style={{ "fontWeight": "bold" }} ><small><span className="cart-items">1 </span></small></span>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li><a href="#">Action</a></li>
                                                        <li><a href="#">Another action</a></li>
                                                        <li><a href="#">Something else here</a></li>
                                                        <li><a href="#">Separated link</a></li>
                                                    </ul>
                                                </li>
                                               
                                            </ul>
                                    
                                </div>
                            </div>
                        </div>
                        </div>

                        <nav className="navbar  bar3 " role="navigation" style={{"marginBottom":"0px"}}>
                            <div className="x-container">
                                <div className="">
                                    <div className="navbar-header">
                                        <button type="button" id="navBtnRes" className="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span style={{"color":"#222",}}> 
                                            <i className="fa fa-bars"></i>
                                            </span>
                                        </button>
                                    </div>

                                
                                    <div className="collapse navbar-collapse" id="navbar" style={{padding:0+"px"}}>
                                        <ul className="nav navbar-nav">
                                            
                                            {/* <li className="active"><Link to="/" ><i className="fa fa-home"></i></Link></li> */}
                                            
                                            {navs   }
                                            {/* <li><Link to="todays-deal"><span>Women's Fashion</span></Link></li>
                                            <li><Link to="todays-deal"><span>Men's Fashion</span></Link></li>
                                            <li><Link to="todays-deal"> <span>Computing & Gadget's</span></Link></li>
                                            <li><Link to="todays-deal"> <span>Phone's & Tablet's</span></Link></li>
                                            <li><Link to="todays-deal"><span> Shoes </span></Link></li>
                                            <li><Link to="todays-deal"> <span>Jewelries</span></Link></li>
                                            <li><Link to="todays-deal"> <span>Android App's</span></Link></li>
                                            <li><Link to="todays-deal"> <span>Music's</span></Link></li>
                                            <li><Link to="todays-deal"> <span>Video's</span></Link></li> */}
                                            {/* <li><Link to="todays-deal"><span> About us</span></Link></li> */}
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                 </div>
                
            </div >
        );
    }
}

export default Header;