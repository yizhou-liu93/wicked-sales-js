import React from 'react';

export default class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: window.innerHeight > 900
    };
  }

  render() {
    const isDesktop = this.state.isDesktop;
    return (
      <div className="card cart-item-row mb-3">
        <div className="row no-gutters cart-item-row">
          <div className="col-md-5">
            <img src={this.props.product.image} className="card-img" alt="..."></img>
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="detail-title">{this.props.product.name}</h5>
              <p className="detail-title price">${(this.props.product.price / 100).toFixed(2)}</p>
              {isDesktop ? (
                <p className="detail-text">{this.props.product.shortDescription}</p>
              ) : null
              }
            </div>
          </div>
        </div>
      </div>

    );
  }
}
