import React from "react";

export default class Card extends React.Component {
    render() {
        var { cardDetails, likeProduct, cardIndex } = this.props;
        return (
        <div className="tc-card" onClick={() => likeProduct(cardIndex) }>
            <div className="tc-card-img-cont">
                <div className="tc-card-img-cont-inr">
                    </div>
                        <img className="tc-card-desc" src="https://assets.mspcdn.net/q_auto/logos/partners/amazon_store.png" />
                        <img className="tc-card-img" draggable="false" src={cardDetails.image} />
                    </div>
                <div className="tc-card-body">
                    <h2 className="tc-card-title">{cardDetails.name}</h2>
                    <div className="tc-card-prices">
                        <span className="tc-card-prices-offer">
                            ₹{cardDetails.price}
                        </span>
                        <span className="tc-card-prices-mrp" >
                            ₹{cardDetails.price}
                        </span>
                    </div>
                </div>
        </div>);
    }
}
