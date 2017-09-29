import React, { Component } from 'react';
import {Route,Switch, IndexRoute} from 'react-router-dom';
import Home from './main/home.js';
import Shop from './shop';
import Product from './product';
// import Sidebar from './main/sidebar.js';
class Main extends Component {

    render() {
        return (
                <div className="" >
                        <div className="row">
                            <div className="col-sm-12 zero " >
                                
                                <Switch>
                                    <Route exact path="/shop" component={Shop} />
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/product" component={Product} />
                                    <Route exact path="/*/:id" component={Product} />
                                    <Route path="*" component={Shop} />
                                </Switch>
                            </div>
                        </div>
                </div>
        );
    }
}

export default Main;