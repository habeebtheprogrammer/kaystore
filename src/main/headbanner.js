import React, { Component } from 'react';

class Headbanner extends Component {

    render() {
        return (
            <div className="head-banner">
                <div className="banner-grid" >
                    <img width="100%" src="../images/699eab22ec7ac1ef9d62ae437b987b30cf43b7d1ec0760354fde16f3ea6a19e4.jpg" alt="Category Banner" />
                </div>
                <div className="banner-grid">
                    <img width="100%" src="../images/73febb0f7820756debc6ae66fe40d7146eadd2f2abb25ea3a52765c7d02b3991.jpg" alt="Category Banner" />
                </div>
                <div className="banner-grid" >
                    <img width="100%" src="../images/5d521be42ac43ad5559a603d09fecb97292732c52334f079b5b237c6e30406da.jpg" alt="Category Banner" />
                </div>


                <div className="clearfix"></div>
            </div>
        );
    }
}

export default Headbanner;