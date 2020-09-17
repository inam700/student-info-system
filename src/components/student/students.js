import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getStudents, deleteStudent } from "../../actions/studentActions";

class Students extends Component {
  componentWillMount() {
    this.props.getStudents();
  }
  onClickDelete = (studentId) => {
    this.props.deleteStudent(studentId);
  };
  render() {
    const studentsData = (item) => {
      return (
        <tr key={item.studentId}>
          <td>
            <Link
              to={`/student-details/${item.studentId}`}
              className="card-link"
            >
              {item.studentName}
            </Link>
          </td>
          <td>{item.department}</td>
          <td>{item.phone}</td>
          <td>{item.email}</td>
          <td>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="button"
              onClick={this.onClickDelete.bind(this, item.studentId)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    };
    return (
      <React.Fragment>
        <div className="container">
          <h1>
            ALL <span className="text-primary">STUDENT DATA</span>
            <Link
              className="btn btn-outline-primary"
              type="button"
              to="/addstudent"
              style={{ float: "right", marginTop: "10px" }}
            >
              ADD NEW
            </Link>
          </h1>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Deprtment</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.props.students.map(studentsData)}</tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  students: state.students.items,
});
export default connect(mapStateToProps, { getStudents, deleteStudent })(
  Students
);
