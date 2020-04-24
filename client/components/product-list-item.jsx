import React from 'react';

export default class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="card">
        <img src={this.props.image} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.shortDescription}</p>
        </div>
      </div>
    );

  }
}