import React from "react";

export default class LikedProduct extends React.Component {
    render() {
        var { productDetails } = this.props;
        return (
        <div className="tc-liked">
            {productDetails.name}
        </div>);
    }
}
