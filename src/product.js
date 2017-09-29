import React, { Component } from 'react';
import Itemcard from './main/itemcard';
import Producttab from './main/producttab';
import Store from './main/data';
import Headbanner from './main/headbanner'
class Product extends Component {

    render() {
        var urlItem = this.props.match.params.id;

        for(var i=0; i<Store.items.length; i++){
            var item2 = Store.items[i].products.filter((object => object.title == urlItem));
            var relatedItems = Store.items[i].products;
            if(item2.length > 0) break;
        }console.log(item2)
        if(relatedItems.length >0){
            var item = relatedItems.map((item) => {
                return (<Itemcard src={item.url} category={item.url} key={item.id} title={item.title} price={item.price} discount={item.discount} slash={item.slash} />);
            });
        }
        return (
            <div >
                <Headbanner />
                <div className="title-barj">
                    <h4 className="pull-right">{urlItem}</h4>
                    <div className="clearfix"></div>
                </div>
                <div className="padding-20px">
                <div className="itemCard" style={{ "width": "28.57%", "float": "left"}}>
                    <div style={{ "border": "1px solid lightgrey", "borderTop": "3px solid #e63737","background":"#fff" }}>
                        
                            <div className="itemcard2" style={{ "width": "100%"}}>
                                <img width="100%" src={`../images/${item2[0].url}`} alt="Category Banner" />
                            </div>
                            
                            <div>
                            </div>
                    
                    </div>
                </div>
                <div className="product-desc">
                        <Producttab />
                </div>
                <img src="../images/Side banner.jpg" class="img-responsive" alt="Image" />
               </div>
            </div>

        );
    }
}

export default Product;