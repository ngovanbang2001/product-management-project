import React from "react";

class TaskList extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <table className="table table-bordered table-hover mt-3">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Giá</th>
            <th className="text-center">Trạng Thái</th>
            <th className="text-center">Hành Động</th>
          </tr>
          {children}
        </thead>
      </table>
    );
  }
}

export default TaskList;
