import React from "react";
import ProductList from "../../component/ProductList/ProductList";
import * as action from "./../../action/index";
import "./ProductListPage.css";
import { connect } from "react-redux";

import ProductItem from "./../../component/ProductItem/ProductItem";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  findIndex = (id) => {
    const { products } = this.state;
    var result = -1;
    products.forEach((product, index) => {
      if (product.id === id) {
        result = index;
      }
    });
    return result;
  };
  componentDidMount() {
    this.props.actFetchProductsRequest();
  }

  render() {
    const { products } = this.props;

    return (
      <div className="container">
        <div className="row">
          <ProductList>{this.showProducts(products)}</ProductList>
        </div>
      </div>
    );
  }
  showProducts = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => (
        <ProductItem
          onDeleteProduct={this.props.onDeleteProduct}
          onEditProduct={this.props.onEditProduct}
          key={index}
          product={product}
          index={index}
        />
      ));
    }
    return result;
  };
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    actFetchProductsRequest: () => {
      dispatch(action.actFetchProductsRequest());
    },
    onDeleteProduct: (id) => {
      dispatch(action.actDeleteProductRequest(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
