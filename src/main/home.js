import React, { Component } from 'react';
import Store from './data.js';
import Headbanner from './headbanner';
import Categorycard from './categorycard.js'
class Home extends Component {
    constructor(){
        super();
        this.state={
            carousel2: {
                img1: { title: "lorem ipsols jlads j", src: "./images/demo1_product9_208x208-300x300.jpg" },
                img2: { title: "loremsa aklsdfalja ejlaw", src: "./images/other-2431-9155621-1-product.jpg" },
                img3: { title: "loremsa  lasdj aljsdfi a", src: "./images/other-6615-0092431-1-product.jpg" }
            },
            carousel: {
                img1: { title: "lorem", src: "./images/j2a.jpg" },
                img2: { title: "loremsa", src: "./images/j2a.jpg" },
                img3: { title: "loremsa a", src: "./images/2ffc7f26245f4b11a15e81fab9fe0be30bc2c5ad25c3d8439a22602d0418cabe.jpg" }
            }
        }
    }

    
    render() {
        var catCollection = Store.items.map((item) => {
            return (<Categorycard key={item.id} title={item.category} banner={item.banner} category={item.products} />)
        })

        return (
            <div className="">
                <Headbanner />
                <div >
               
                {catCollection}
                </div>
                <div className="clearfix"></div>
            </div>
        );
    }
}

export default Home;