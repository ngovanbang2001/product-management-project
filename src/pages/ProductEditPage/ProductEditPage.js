import React from "react";
import { connect } from "react-redux";
import * as action from "../../action/index.js";
class ProductActionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: "",
      status: "",
    };
  }
  componentWillMount() {
    var { match } = this.props;
    if (match) {
      // update
      var id = match.params.id;
      this.props.onGetProduct(id);
    } // else => add
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.formEdit) {
      var { formEdit } = nextProps;
      this.setState({
        id: formEdit.id,
        name: formEdit.name,
        price: formEdit.price,
        status: formEdit.status,
      });
    }
  }
  onChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
  onSave = (e) => {
    e.preventDefault();
    const { id, name, price, status } = this.state;
    const product = {
      id,
      name,
      price,
      status,
    };

    var { match } = this.props;
    if (match) {
      // update
      var index = match.params.id;
      this.props.onEditProduct(index, product);
    }
    this.props.history.goBack();
  };
  render() {
    return (
      <form onSubmit={this.onSave}>
        <h2>Cập nhập sản phẩm</h2>
        <div className="form-group mt-5">
          <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
          <input
            required
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={this.state.name}
            name="name"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Giá</label>
          <input
            required
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={this.state.price}
            name="price"
            onChange={this.onChange}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={this.state.status}
            value={this.state.status}
            id="exampleCheck1"
            name="status"
            onChange={this.onChange}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Còn hàng
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    formEdit: state.formEdit,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onGetProduct: (id, product) => {
      dispatch(action.actGetProductRequest(id, product));
    },
    onEditProduct: (id, product) => {
      dispatch(action.actEditProductRequest(id, product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
