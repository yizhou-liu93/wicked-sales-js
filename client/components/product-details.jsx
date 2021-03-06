import React from 'react';
import AddModal from './add-modal';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      showModal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    fetch('/api/products/' + this.props.params.productId)
      .then(response => response.json())
      .then(data => {
        this.setState({ product: data });
      })
      .catch(error => error.log('Fetch failed!', error));
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const modal = this.state.showModal ? <AddModal setView={this.props.setView} product={this.state.product}/> : null;
    if (this.state.product !== null) {
      return (
        <div>
          {modal}
          <div className="container product-detail col-md-8 m-auto">
            <div className="control">
              <a href="#" className="btn my-3" onClick={() => this.props.setView('catalog', {})}>
                <i className="fas fa-chevron-circle-left mr-1"></i>
             Back to catalog
              </a>
            </div>
            <div className="detail-container">
              <div className="row deltai-up no-gutters">
                <div className="col-md-4">
                  <img src={this.state.product.image} className="card-img" alt="..."></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="detail-title">{this.state.product.name}</h5>
                    <p className="detail-title price">${(this.state.product.price / 100).toFixed(2)}</p>
                    <p className="detail-text">{this.state.product.shortDescription}</p>
                    <a href="#" className="btn btn-primary" onClick={
                      () => {
                        this.props.addToCard(this.state.product);
                        this.toggleModal();
                      }
                    }>Add to Cart</a>
                  </div>
                </div>
              </div>
              <div className="row card-body detail-botton">
                <p className="card-text">{this.state.product.longDescription}</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }

  }
}
