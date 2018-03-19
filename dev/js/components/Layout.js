import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Card from "./Card";
import LikedProduct from './LikedProduct';
require('../../scss/style.scss');


export default class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [
            {
                "name": "iPhone X",
                "price": 53450,
                "company": "Apple",
                "likes": 12,
                "id": 1,
                "dislikes": 14,
                "image": "https://assets.mspcdn.net/t_c-desktop-normal,f_auto,q_auto,d_c:noimage.jpg/c/13396-6-1.jpg"
            },
            
            {
                "name": "S7 Edge",
                "price": 5340,
                "company": "Samsung",
                "likes": 2,
                "dislikes": 14,
                "id": 2,
                "image": "https://assets.mspcdn.net/t_c-desktop-normal,f_auto,q_auto,d_c:noimage.jpg/c/9484-26-1.jpg"
            },

            {
                "name": "iPhone 8",
                "price": 2345,
                "company": "Apple",
                "likes": 12,
                "dislikes": 4,
                "id": 3,
                "image": "https://assets.mspcdn.net/t_c-desktop-normal,f_auto,q_auto,d_c:noimage.jpg/c/11797-69-1.jpg"
            },
            
            {
                "name": "iPhone 7 plus",
                "price": 63450,
                "company": "Apple",
                "likes": 121,
                "dislikes": 34,
                "id": 4,
                "image": "https://assets.mspcdn.net/t_c-desktop-normal,f_auto,q_auto,d_c:noimage.jpg/c/10209-29-1.jpg"
            },
            {
                "name": "S9 Edge Plus",
                "price": 534500,
                "company": "Samsung",
                "likes": 212,
                "dislikes": 114,
                "id": 5,
                "image": "https://assets.mspcdn.net/t_c-desktop-normal,f_auto,q_auto,d_c:noimage.jpg/c/12891-55-1.jpg"
            },
            
            {
                "name": "Xiaomi X1",
                "price": 53450,
                "company": "Xiaomi",
                "likes": 32,
                "id": 6,
                "dislikes": 4,
                "image": "https://assets.mspcdn.net/t_c-desktop-normal,f_auto,q_auto,d_c:noimage.jpg/c/14126-77-1.jpg"
            },
            {
                "name": "Note 4",
                "price": 52450,
                "company": "Redmi",
                "likes": 2,
                "id": 7,
                "dislikes": 1,
                "image": "https://assets.mspcdn.net/t_c-desktop-normal,f_auto,q_auto,d_c:noimage.jpg/c/14123-52-1.jpg"
            },
            
            {
                "name": "Sony Xperia X1",
                "price": 43450,
                "company": "Xperia",
                "id": 8,
                "likes": 52,
                "dislikes": 64,
                "image": "https://assets.mspcdn.net/t_c-desktop-normal,f_auto,q_auto,d_c:noimage.jpg/c/12201-41-1.jpg"
            }
        ],
            likedProducts: [

            ]
        };

        this.likeProduct = this.likeProduct.bind(this);
    }

    likeProduct(productIndex) {
        const this1 = this;
        var newLikedProducts = [].concat(this1.state.likedProducts, productIndex);

        this.setState({
            likedProducts: newLikedProducts
        });
    }

    render() {
        const this1 = this;

        return (
            <div>
                <Header />
                { this.state.products.map(function(elem, index){
                    return <Card
                                likeProduct={this1.likeProduct} 
                                key={"product-" + elem.id} 
                                cardDetails={elem} 
                                cardIndex={index} />
                }) }
                { this.state.likedProducts.map(function(elem, index) {
                    return <LikedProduct 
                                key={"liked-" + elem} 
                                productDetails={this1.state.products[elem]} />
                }) }
                <Footer />
            </div>
        );
    }
}
