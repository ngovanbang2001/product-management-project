import React from "react";

import { Link } from "react-router-dom";

class ProductItem extends React.Component {
  onDelete = (index) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa ?")) {
      //eslint-disable-line
      this.props.onDeleteProduct(index);
    }
  };
  render() {
    const { product, index } = this.props;
    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td className="text-center">{product.name}</td>
        <td className="text-center">{product.price}</td>
        <td className="text-center">
          <span
            className={
              product.status ? "badge badge-info" : "badge badge-danger"
            }
            onClick={this.handleChange}
          >
            {product.status ? "Còn Hàng" : "Hết Hàng"}
          </span>
        </td>
        <td className="text-center">
          <Link to={`product/${product.id}/edit`} className="btn btn-warning">
            <span className="fa fa-pencil mr-5"></span> &nbsp; Sửa
          </Link>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              this.onDelete(product.id);
            }}
          >
            <span className="fa fa-trash mr-5"></span> &nbsp;Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
