import React, { Component } from 'react';
import uuid from 'uuid';
const Store = {
    items:  [
        
        {
            id: uuid.v4(),
            category: {name:"womens fashion", url:"/womens-fashion"},
            banner: { url: "DesktopSlider.jpg" },
            products: [{ id: uuid.v4(), url: "1(35).jpg", title: "Lorem ipsumq adipisicing elit.", price: "$43,232", discount: "-32%", slash: "$24,320" },
                { id: uuid.v4(), url: "coll5.jpg", title: "amet consectetur adipisicing elit.", price: "$402", discount: "-2%", slash: "$320" },
            { id: uuid.v4(),  url: "1(34).jpg", title: "Lorem ipsum dolor sit kamet lit.", price: "$43332", discount: "-3%", slash: "$4,320" },
            { id: uuid.v4(),  url: "1(38).jpg", title: "Lorem  consectetur adip elit.", price: "$43,32", discount: "-50%", slash: "$24,380" },
            { id: uuid.v4(), url: "coll4.jpg", title: "Lorem ipsum dolor sit amet eklit.", price: "$32", discount: "-9%", slash: "$220" },
            { id: uuid.v4(), url: "1(16).jpg", title: "Loremd ipsum dolor sit amet.", price: "$43,232", discount: "-32%", slash: "$24,320" },
            { id: uuid.v4(), url: "1(20).jpg", title: "Loremd ipsum dolor sit amet.", price: "$43,232", discount: "-32%", slash: "$24,320" },
            { id: uuid.v4(), url: "demo1_product5_208x208-300x300.jpg", title: "Lo dolorpisicing elit.", price: "$3,232", discount: "-12%", slash: "$27650" },
            { id: uuid.v4(), url: "coll1.jpg", title: "Lorem ipsum dolor d amet.", price: "$43,232", discount: "-32%", slash: "$24,320" },
            { id: uuid.v4(),  url: "1(17).jpg", title: "Lorem dipisicing elit.", price: "$402", discount: "-2%", slash: "$320" }]
        },
        {
            id: uuid.v4(),
            category: { name: "mens fashion", url: "/mens-fashion" },
            banner: { url: "DesktopSlider(1).jpg" },
            products: [{ id: uuid.v4(), url: "other-6485-7077231-1-product.jpg", title: "Lofrem ipsum adipisicing elit.", price: "$43,232", discount: "-32%", slash: "$24,320" },
            { id: uuid.v4(), url: "other-2454-770172-1-product.jpg", title: "amet conseactetur adipisicing elit.", price: "$402", discount: "-2%", slash: "$320" },
            { id: uuid.v4(), url: "other-1731-2736721-1-product.jpg", title: "Lorem ixpsum dolor sit amet lit.", price: "$43332", discount: "-3%", slash: "$4,320" },
            { id: uuid.v4(), url: "other-6485-7077231-1-product.jpg", title: "ectetur adipisicing elit.", price: "$43,32", discount: "-50%", slash: "$24,380" },
            { id: uuid.v4(), url: "other-0486-3305431-1-product.jpg", title: "Loqrem ipsum dolor sit amet elit.", price: "$32", discount: "-9%", slash: "$220" },
            { id: uuid.v4(), url: "demo1_product13_208x208-300x300.jpg", title: "Loreim ipsum dolorpisicing elit.", price: "$3,232", discount: "-12%", slash: "$27650" },
            { id: uuid.v4(), url: "demo1_product15_208x208-300x300.jpg", title: "Loreom ipsum dolor sit amet.", price: "$43,232", discount: "-32%", slash: "$24,320" },
            { id: uuid.v4(), url: "demo1_product17_208x208-300x300.jpg", title: "Loreom ipsum dolor sit amet.", price: "$43,232", discount: "-32%", slash: "$24,320" },
            { id: uuid.v4(), url: "demo1_product16_208x208-300x300.jpg", title: "Loreom ipsum dolor sit amet.", price: "$43,232", discount: "-32%", slash: "$24,320" },
            { id: uuid.v4(), url: "demo1_product20_208x208-300x300.jpg", title: "sum dolor dipisicing elit.", price: "$402", discount: "-2%", slash: "$320" }]
        },
        {
            id: uuid.v4(),
            category: { name: "Phones $ Tablet", url: "/phones&tablet" },
            banner: { url: "DesktopSlider(2).jpg" },
            products: [{ id: uuid.v4(), url: "demo1_product6_208x208-300x300.jpg", title: "Loreom ipsum adipisicing elit.", price: "$43,232", discount: "-32%", slash: "$24,320" },
            { id: uuid.v4(),  url: "demo1_product7_208x208-1-300x300.jpg", title: "amet conisectetur adipisicing elit.", price: "$402", discount: "-2%", slash: "$320" },
            { id: uuid.v4(), url: "demo1_product8_208x208-300x300.jpg", title: "Lorem ipsum duolor sit amet lit.", price: "$43332", discount: "-3%", slash: "$4,320" },
            { id: uuid.v4(), url: "demo1_product9_208x208-300x300.jpg", title: "Lotetur adipisicing elit.", price: "$43,32", discount: "-50%", slash: "$24,380" },
            { id: uuid.v4(), url: "other-6615-0092431-1-product.jpg", title: "Lorem ipsum rdolor sit amet elit.", price: "$32", discount: "-9%", slash: "$220" },
            { id: uuid.v4(), url: "universal-6786-7526331-1-product.jpg", title: "Lorem ipesum dolorpisicing elit.", price: "$3,232", discount: "-12%", slash: "$27650" },
            { id: uuid.v4(), url: "other-7152-7017721-1-product.jpg", title: "Loremd ipsum dolor sit amet.", price: "$43,232", discount: "-32%", slash: "$24,320" },
            { id: uuid.v4(), url: "other-5932-9316721-1-product.jpg", title: "Loremd ipsum dolor sit amet.", price: "$43,232", discount: "-32%", slash: "$24,320" },
            { id: uuid.v4(), url: "diadops-843831-1-profile.jpg", title: "Loremd ipsum dolor sit amet.", price: "$43,232", discount: "-32%", slash: "$24,320" },
            { id: uuid.v4(), url: "demo1_product10_208x208-1-300x300.jpg", title: "Lorema ipsum dolor dipisicing elit.", price: "$402", discount: "-2%", slash: "$320" }]
        },
           {  id: uuid.v4(),
                category: {name:"Accessories", url:"/accessories"},
                banner: {url: "DesktopSlider(1).jpg"},
                products: [{ id: uuid.v4(), url: "other-6485-7077231-1-product.jpg", title: "Lorem ipsum adipisicing elit.", price: "$43,232", discount: "-32%", slash: "$24,320" },
                { id: uuid.v4(),  url: "other-2454-770172-1-product.jpg", title: "ameet consectetur adipisicing elit.", price: "$402", discount: "-2%", slash: "$320" },
                { id: uuid.v4(), url: "other-1731-2736721-1-product.jpg", title: "Lyorem ipsum dolor sit amet lit.", price: "$43332", discount: "-3%", slash: "$4,320" },
                { id: uuid.v4(), url: "other-6485-7077231-1-product.jpg", title: "Loqrem  consectetur aelit.", price: "$43,32", discount: "-50%", slash: "$24,380" },
                { id: uuid.v4(), url: "other-0486-3305431-1-product.jpg", title: "Lorjem ipsum dolor sit amet elit.", price: "$32", discount: "-9%", slash: "$220" },
                { id: uuid.v4(), url: "demo1_product13_208x208-300x300.jpg", title: "Lorenm sicing elit.", price: "$3,232", discount: "-12%", slash: "$27650" },
                { id: uuid.v4(), url: "demo1_product15_208x208-300x300.jpg", title: "Loremv ipsum dolor sit amet.", price: "$43,232", discount: "-32%", slash: "$24,320" },
                { id: uuid.v4(), url: "demo1_product20_208x208-300x300.jpg", title: "Lorze dipisicing elit.", price: "$402", discount: "-2%", slash: "$320" }]}


    ]

}
export default Store;